/*
Copyright 2018 The Extra Keyboards for Chrome OS Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var contextID = 0;

var lut = {
	KeyW: ["w", "W", "W", "", ""]
	KeyE: ["e", "E", "E", "", ""],
	KeyR: ["r", "R", "R", "", ""],
	KeyT: ["t", "T", "T", "", ""],
	KeyY: ["y", "Y", "Y", "", ""],
	KeyU: ["u", "U", "U", "", ""],
	KeyI: ["i", "I", "I", "", ""],
	KeyO: ["o", "O", "O", "", ""],
	KeyP: ["p", "P", "P", "", ""],
	BracketLeft: ["[", "{", "[", "", ""],
	BracketRight: ["]", "}", "]", "", ""],
	KeyA: ["a", "A", "A", "", ""],
	KeyS: ["s", "S", "S", "", ""],
	KeyD: ["d", "D", "D", "", ""],
	KeyF: ["f", "F", "F", "", ""],
	KeyG: ["g", "G", "G", "", ""],
	KeyH: ["h", "H", "H", "", ""],
	KeyJ: ["j", "J", "J", "", ""],
	KeyK: ["", "K", "K", "", ""],
	KeyL: ["l", "L", "L", "", ""],
	Semicolon: [";", ":", ";", "", ""],
	Quote: ["'", '"', "'", "", ""],

	KeyZ: ["z", "Z", "Z", "", ""],
	KeyX: ["x", "X", "X", "", ""],
	KeyC: ["c", "C", "C", "", ""],
	KeyV: ["v", "V", "V", "", ""],
	KeyB: ["b", "B", "B", "", ""],
	KeyN: ["n", "N", "N", "", ""],
	KeyM: ["m", "M", "M", "", ""],
	Comma: [",", "<", ",", "", ""],
	Period: [".", ">", ".", "", ""],
	Slash: ["/", "?", "/", "", ""],
};

chrome.input.ime.onFocus.addListener(function (context) {
	contextID = context.contextID;
});

chrome.input.ime.onBlur.addListener(() => {
	contextID = 0;
});

chrome.input.ime.onActivate.addListener(function (engineID) {
	console.log("onActivate:" + engineID);
});

chrome.input.ime.onDeactivated.addListener(function (engineID) {
	console.log("onDeactivated:" + engineID);
});

chrome.input.ime.onKeyEvent.addListener(function (engineID, keyData) {
	var handled = false;
	if (keyData.type == "keydown") {
		//Check Modifier State Function and Variable
		function checkKeyState(modifier) {
			if (modifier.shiftKey === true) {
				return 1;
			}
			if (modifier.capsLock === true) {
				return 2;
			}
			if (modifier.altKey === true) {
				return 3;
			}
			if (modifier.altgrKey === true) {
				return 4;
			}
			else {
				return 0;
			}
		}
		let checkstate = checkKeyState(keyData);

		//BackSlash Key Press
		if (keyData.keyCode == 220) {
			let backslash = ["\\", "|", "\\", "", "", ""]
			let backslashkey = backslash[checkstate];

			if (backslashkey == "\\") {
				backslashkey = backslashkey.substring(1);
				if (backslashkey != null && contextID != 0) {
					chrome.input.ime.commitText(
						{
							contextID: contextID,
							text: backslashkey,
						},
						() => {
							if (chrome.runtime.lastError) {
								console.error(
									"Error committing text:",
									chrome.runtime.lastError
								);
								return;
							}
						}
					);
				}
			} else {
				if (backslashkey != null && contextID != 0) {
					chrome.input.ime.commitText(
						{
							contextID: contextID,
							text: backslashkey,
						},
						() => {
							if (chrome.runtime.lastError) {
								console.error(
									"Error committing text:",
									chrome.runtime.lastError
								);
								return;
							}
						}
					);
				}
			}
		}

		//Main Key Press Handler
		if (lut[keyData.code]) {
			let emit = lut[keyData.code][checkstate];

			if (emit != null && contextID != 0) {
				chrome.input.ime.commitText(
					{
						contextID: contextID,
						text: emit,
					},
					() => {
						if (chrome.runtime.lastError) {
							console.error("Error committing text:", chrome.runtime.lastError);
							return;
						}
					}
				);
			}

			handled = true;
		}
	}
	return handled;
});
