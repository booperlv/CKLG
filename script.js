function KeyLayerChange(showzero, noneone, nonetwo, nonethree, nonefour) {
	showzero.style.display = "block";
	noneone.style.display = "none";
	nonetwo.style.display = "none";
	nonethree.style.display = "none";
	nonefour.style.display = "none";
}

var PlainStateInput = document.getElementById('PlainState');
var ShiftStateInput = document.getElementById('ShiftState');
var CapsStateInput = document.getElementById('CapsState');
var AltStateInput = document.getElementById('AltState')
var AltGRStateInput = document.getElementById('AltGRState')

var PlainDiv = document.getElementById('PlainKey');
var ShiftDiv = document.getElementById('ShiftedKey');
var CapsDiv = document.getElementById('CapsLockedKey')
var AltDiv = document.getElementById('AltedKey');
var AltGRDiv = document.getElementById('AltGRKey');
PlainStateInput.addEventListener('click', function () { KeyLayerChange(PlainDiv, ShiftDiv, CapsDiv, AltDiv, AltGRDiv); });
ShiftStateInput.addEventListener('click', function () { KeyLayerChange(ShiftDiv, PlainDiv, CapsDiv, AltDiv, AltGRDiv); });
AltStateInput.addEventListener('click', function () { KeyLayerChange(AltDiv, PlainDiv, ShiftDiv, CapsDiv, AltGRDiv); });
CapsStateInput.addEventListener('click', function () { KeyLayerChange(CapsDiv, PlainDiv, ShiftDiv, AltDiv, AltGRDiv); });
AltGRStateInput.addEventListener('click', function () { KeyLayerChange(AltGRDiv, PlainDiv, ShiftDiv, CapsDiv, AltDiv); });

var KeyboardSize = document.getElementById('KeyboardSize');
//Keyboard Size Range
KeyboardSize.addEventListener('input', function () {
	var value = KeyboardSize.value;
	var sizeval = 20 - value;
	var sizevalheight = sizeval * 3;
	PlainDiv.style.padding = sizeval + "vw " + sizevalheight + "vw";
	ShiftDiv.style.padding = sizeval + "vw " + sizevalheight + "vw";
	CapsDiv.style.padding = sizeval + "vw " + sizevalheight + "vw";
	AltDiv.style.padding = sizeval + "vw " + sizevalheight + "vw";
	AltGRDiv.style.padding = sizeval + "vw " + sizevalheight + "vw";
})
var KeyboardFontSize = document.getElementById('KeyboardFontSize');
//Keyboard Font Size Range
KeyboardFontSize.addEventListener('input', function () {
	var fontval = KeyboardFontSize.value;
	PlainDiv.style.fontSize = fontval + "vw";
	ShiftDiv.style.fontSize = fontval + "vw";
	CapsDiv.style.fontSize = fontval + "vw";
	AltDiv.style.fontSize = fontval + "vw";
	AltGRDiv.style.fontSize = fontval + "vw";
})

var ClearKey = document.getElementById('ClearKeyState');
//Clear the current key state
ClearKey.addEventListener('click', function () {
	var radioinputs = document.getElementsByName('KeyState');
	for (let i=0; i < radioinputs.length; i++) {
		if (radioinputs[i].checked === true) {
			var whichkey = radioinputs[i].id;
			switch (whichkey) {
				case 'PlainState':
					var parent = PlainDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						if (parent[i].readOnly === false) {
							parent[i].value = "";
						}
					}
					break;
				case 'ShiftState':
					var parent = ShiftDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						if (parent[i].readOnly === false) {
							parent[i].value = "";
						}
					}
					break;
				case 'CapsState':
					var parent = CapsDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						if (parent[i].readOnly === false) {
							parent[i].value = "";
						}
					}
					break;
				case 'AltState':
					var parent = AltDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						if (parent[i].readOnly === false) {
							parent[i].value = "";
						}
					}
					break;
				case 'AltGRState':
					var parent = AltGRDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						if (parent[i].readOnly === false) {
							parent[i].value = "";
						}
					}
			}

		}
	}
})


//Automate Shift and CapsLock Layer Character Function
const AutomateShiftCaps = (char, state) => { 
	if (char.match(/[a-z]/i)) {
		return char.toUpperCase();
	} else {
		switch (char) {
			case "1":
				switch (state) {
					case "shift":
						return "!";
					case "caps":
						return char;
				}
				break;
			case "2":
				switch (state) {
					case "shift":
						return "@";
					case "caps":
						return char;
				}
				break;
			case "3": 
				switch (state) {
					case "shift":
						return "#";
					case "caps":
						return char;
				}
				break;
			case "4":
				switch (state) {
					case "shift":
						return "$";
					case "caps":
						return char;
				}
				break;
			case "5":
				switch (state) {
					case "shift":
						return "%";
					case "caps":
						return char;
				}
				break;
			case "6": 
				switch (state) {
					case "shift":
						return "^";
					case "caps":
						return char;
				}
				break;
			case "7":
				switch (state) {
					case "shift":
						return "&";
					case "caps":
						return char;
				}
				break;
			case "8":
				switch (state) {
					case "shift":
						return "*";
					case "caps":
						return char;
				}
				break;
			case "9":
				switch (state) {
					case "shift":
						return "(";
					case "caps":
						return char;
				}
				break;
			case "0":
				switch (state) {
					case "shift":
						return ")";
					case "caps":
						return char;
				}
				break;
			case "`":
				switch (state) {
					case "shift":
						return "~";
					case "caps":
						return char;
				}
				break;
			case "-": 
				switch (state) {
					case "shift":
						return "_";
					case "caps":
						return char;
				}
				break;
			case "=":
				switch (state) {
					case "shift":
						return "+";
					case "caps":
						return char;
				}
				break;
			case "[":
				switch (state) {
					case "shift":
						return "{";
					case "caps":
						return char;
				}
				break;
			case "]":
				switch (state) {
					case "shift":
						return "}";
					case "caps":
						return char;
				}
				break;
			case ";":
				switch (state) {
					case "shift":
						return ":";
					case "caps":
						return char;
				}
				break;
			case "'":
				switch (state) {
					case "shift":
						return '"';
					case "caps":
						return char;
				}
				break;
			case "\\":
				switch (state) {
					case "shift":
						return "|";
					case "caps":
						return char;
				}
				break;
			case ",": 
				switch (state) {
					case "shift":
						return "<";
					case "caps":
						return char;
				}
				break;
			case ".":
				switch (state) {
					case "shift":
						return ">";
					case "caps":
						return char;
				}
				break;
			case "/":
				switch (state) {
					case "shift":
						return "?";
					case "caps":
						return char;
				}
				break;
			default:
				console.log('error mate sorry');
				break;
		}
	}
}

document.getElementById('AutoShiftCaps').addEventListener('click', function(AutoShiftEvent) {
	var Backquote = document.getElementById('Backquote').value;
	var Digit1 = document.getElementById('Digit1').value;
	var Digit2 = document.getElementById('Digit2').value;
	var Digit3 = document.getElementById('Digit3').value;
	var Digit4 = document.getElementById('Digit4').value;
	var Digit5 = document.getElementById('Digit5').value;
	var Digit6 = document.getElementById('Digit6').value;
	var Digit7 = document.getElementById('Digit7').value;
	var Digit8 = document.getElementById('Digit8').value;
	var Digit9 = document.getElementById('Digit9').value;
	var Digit0 = document.getElementById('Digit0').value;
	var Minus = document.getElementById('Minus').value;
	var Equal = document.getElementById('Equal').value;
	var KeyQ = document.getElementById('KeyQ').value;
	var KeyW = document.getElementById('KeyW').value;
	var KeyE = document.getElementById('KeyE').value;
	var KeyR = document.getElementById('KeyR').value;
	var KeyT = document.getElementById('KeyT').value;
	var KeyY = document.getElementById('KeyY').value;
	var KeyU = document.getElementById('KeyU').value;
	var KeyI = document.getElementById('KeyI').value;
	var KeyO = document.getElementById('KeyO').value;
	var KeyP = document.getElementById('KeyP').value;
	var BracketLeft = document.getElementById('BracketLeft').value;
	var BracketRight = document.getElementById('BracketRight').value;
	var BackSlash = document.getElementById('BackSlash').value;
	var KeyA = document.getElementById('KeyA').value;
	var KeyS = document.getElementById('KeyS').value;
	var KeyD = document.getElementById('KeyD').value;
	var KeyF = document.getElementById('KeyF').value;
	var KeyG = document.getElementById('KeyG').value;
	var KeyH = document.getElementById('KeyH').value;
	var KeyJ = document.getElementById('KeyJ').value;
	var KeyK = document.getElementById('KeyK').value;
	var KeyL = document.getElementById('KeyL').value;
	var Semicolon = document.getElementById('Semicolon').value;
	var Quote = document.getElementById('Quote').value;
	var KeyZ = document.getElementById('KeyZ').value;
	var KeyX = document.getElementById('KeyX').value;
	var KeyC = document.getElementById('KeyC').value;
	var KeyV = document.getElementById('KeyV').value;
	var KeyB = document.getElementById('KeyB').value;
	var KeyN = document.getElementById('KeyN').value;
	var KeyM = document.getElementById('KeyM').value;
	var Comma = document.getElementById('Comma').value;
	var Period = document.getElementById('Period').value;
	var Slash = document.getElementById('Slash').value;
	var ShiftedBackquote = document.getElementById('ShiftedBackquote');
	var ShiftedDigit1 = document.getElementById('ShiftedDigit1');
	var ShiftedDigit2 = document.getElementById('ShiftedDigit2');
	var ShiftedDigit3 = document.getElementById('ShiftedDigit3');
	var ShiftedDigit4 = document.getElementById('ShiftedDigit4');
	var ShiftedDigit5 = document.getElementById('ShiftedDigit5');
	var ShiftedDigit6 = document.getElementById('ShiftedDigit6');
	var ShiftedDigit7 = document.getElementById('ShiftedDigit7');
	var ShiftedDigit8 = document.getElementById('ShiftedDigit8');
	var ShiftedDigit9 = document.getElementById('ShiftedDigit9');
	var ShiftedDigit0 = document.getElementById('ShiftedDigit0');
	var ShiftedMinus = document.getElementById('ShiftedMinus');
	var ShiftedEqual = document.getElementById('ShiftedEqual');
	var ShiftedKeyQ = document.getElementById('ShiftedKeyQ');
	var ShiftedKeyW = document.getElementById('ShiftedKeyW');
	var ShiftedKeyE = document.getElementById('ShiftedKeyE');
	var ShiftedKeyR = document.getElementById('ShiftedKeyR');
	var ShiftedKeyT = document.getElementById('ShiftedKeyT');
	var ShiftedKeyY = document.getElementById('ShiftedKeyY');
	var ShiftedKeyU = document.getElementById('ShiftedKeyU');
	var ShiftedKeyI = document.getElementById('ShiftedKeyI');
	var ShiftedKeyO = document.getElementById('ShiftedKeyO');
	var ShiftedKeyP = document.getElementById('ShiftedKeyP');
	var ShiftedBracketLeft = document.getElementById('ShiftedBracketLeft');
	var ShiftedBracketRight = document.getElementById('ShiftedBracketRight');
	var ShiftedBackSlash = document.getElementById('ShiftedBackSlash');
	var ShiftedKeyA = document.getElementById('ShiftedKeyA');
	var ShiftedKeyS = document.getElementById('ShiftedKeyS');
	var ShiftedKeyD = document.getElementById('ShiftedKeyD');
	var ShiftedKeyF = document.getElementById('ShiftedKeyF');
	var ShiftedKeyG = document.getElementById('ShiftedKeyG');
	var ShiftedKeyH = document.getElementById('ShiftedKeyH');
	var ShiftedKeyJ = document.getElementById('ShiftedKeyJ');
	var ShiftedKeyK = document.getElementById('ShiftedKeyK');
	var ShiftedKeyL = document.getElementById('ShiftedKeyL');
	var ShiftedSemicolon = document.getElementById('ShiftedSemicolon');
	var ShiftedQuote = document.getElementById('ShiftedQuote');
	var ShiftedKeyZ = document.getElementById('ShiftedKeyZ');
	var ShiftedKeyX = document.getElementById('ShiftedKeyX');
	var ShiftedKeyC = document.getElementById('ShiftedKeyC');
	var ShiftedKeyV = document.getElementById('ShiftedKeyV');
	var ShiftedKeyB = document.getElementById('ShiftedKeyB');
	var ShiftedKeyN = document.getElementById('ShiftedKeyN');
	var ShiftedKeyM = document.getElementById('ShiftedKeyM');
	var ShiftedComma = document.getElementById('ShiftedComma');
	var ShiftedPeriod = document.getElementById('ShiftedPeriod');
	var ShiftedSlash = document.getElementById('ShiftedSlash');
	var CapsLockedBackquote = document.getElementById('CapsLockedBackquote');
	var CapsLockedDigit1 = document.getElementById('CapsLockedDigit1');
	var CapsLockedDigit2 = document.getElementById('CapsLockedDigit2');
	var CapsLockedDigit3 = document.getElementById('CapsLockedDigit3');
	var CapsLockedDigit4 = document.getElementById('CapsLockedDigit4');
	var CapsLockedDigit5 = document.getElementById('CapsLockedDigit5');
	var CapsLockedDigit6 = document.getElementById('CapsLockedDigit6');
	var CapsLockedDigit7 = document.getElementById('CapsLockedDigit7');
	var CapsLockedDigit8 = document.getElementById('CapsLockedDigit8');
	var CapsLockedDigit9 = document.getElementById('CapsLockedDigit9');
	var CapsLockedDigit0 = document.getElementById('CapsLockedDigit0');
	var CapsLockedMinus = document.getElementById('CapsLockedMinus');
	var CapsLockedEqual = document.getElementById('CapsLockedEqual');
	var CapsLockedKeyQ = document.getElementById('CapsLockedKeyQ');
	var CapsLockedKeyW = document.getElementById('CapsLockedKeyW');
	var CapsLockedKeyE = document.getElementById('CapsLockedKeyE');
	var CapsLockedKeyR = document.getElementById('CapsLockedKeyR');
	var CapsLockedKeyT = document.getElementById('CapsLockedKeyT');
	var CapsLockedKeyY = document.getElementById('CapsLockedKeyY');
	var CapsLockedKeyU = document.getElementById('CapsLockedKeyU');
	var CapsLockedKeyI = document.getElementById('CapsLockedKeyI');
	var CapsLockedKeyO = document.getElementById('CapsLockedKeyO');
	var CapsLockedKeyP = document.getElementById('CapsLockedKeyP');
	var CapsLockedBracketLeft = document.getElementById('CapsLockedBracketLeft');
	var CapsLockedBracketRight = document.getElementById('CapsLockedBracketRight');
	var CapsLockedBackSlash = document.getElementById('CapsLockedBackSlash');
	var CapsLockedKeyA = document.getElementById('CapsLockedKeyA');
	var CapsLockedKeyS = document.getElementById('CapsLockedKeyS');
	var CapsLockedKeyD = document.getElementById('CapsLockedKeyD');
	var CapsLockedKeyF = document.getElementById('CapsLockedKeyF');
	var CapsLockedKeyG = document.getElementById('CapsLockedKeyG');
	var CapsLockedKeyH = document.getElementById('CapsLockedKeyH');
	var CapsLockedKeyJ = document.getElementById('CapsLockedKeyJ');
	var CapsLockedKeyK = document.getElementById('CapsLockedKeyK');
	var CapsLockedKeyL = document.getElementById('CapsLockedKeyL');
	var CapsLockedSemicolon = document.getElementById('CapsLockedSemicolon');
	var CapsLockedQuote = document.getElementById('CapsLockedQuote');
	var CapsLockedKeyZ = document.getElementById('CapsLockedKeyZ');
	var CapsLockedKeyX = document.getElementById('CapsLockedKeyX');
	var CapsLockedKeyC = document.getElementById('CapsLockedKeyC');
	var CapsLockedKeyV = document.getElementById('CapsLockedKeyV');
	var CapsLockedKeyB = document.getElementById('CapsLockedKeyB');
	var CapsLockedKeyN = document.getElementById('CapsLockedKeyN');
	var CapsLockedKeyM = document.getElementById('CapsLockedKeyM');
	var CapsLockedComma = document.getElementById('CapsLockedComma');
	var CapsLockedPeriod = document.getElementById('CapsLockedPeriod');
	var CapsLockedSlash = document.getElementById('CapsLockedSlash');

	ShiftedBackquote.value = AutomateShiftCaps(Backquote, "shift");
	CapsLockedBackquote.value = AutomateShiftCaps(Backquote, "caps");
	ShiftedDigit1.value = AutomateShiftCaps(Digit1, "shift");
	CapsLockedDigit1.value = AutomateShiftCaps(Digit1, "caps");
	ShiftedDigit2.value = AutomateShiftCaps(Digit2, "shift");
	CapsLockedDigit2.value = AutomateShiftCaps(Digit2, "caps");
	ShiftedDigit3.value = AutomateShiftCaps(Digit3, "shift");
	CapsLockedDigit3.value = AutomateShiftCaps(Digit3, "caps");
	ShiftedDigit4.value = AutomateShiftCaps(Digit4, "shift");
	CapsLockedDigit4.value = AutomateShiftCaps(Digit4, "caps");
	ShiftedDigit5.value = AutomateShiftCaps(Digit5, "shift");
	CapsLockedDigit5.value = AutomateShiftCaps(Digit5, "caps");
	ShiftedDigit6.value = AutomateShiftCaps(Digit6, "shift");
	CapsLockedDigit6.value = AutomateShiftCaps(Digit6, "caps");
	ShiftedDigit7.value = AutomateShiftCaps(Digit7, "shift");
	CapsLockedDigit7.value = AutomateShiftCaps(Digit7, "caps");
	ShiftedDigit8.value = AutomateShiftCaps(Digit8, "shift");
	CapsLockedDigit8.value = AutomateShiftCaps(Digit8, "caps");
	ShiftedDigit9.value = AutomateShiftCaps(Digit9, "shift");
	CapsLockedDigit9.value = AutomateShiftCaps(Digit9, "caps");
	ShiftedDigit0.value = AutomateShiftCaps(Digit0, "shift");
	CapsLockedDigit0.value = AutomateShiftCaps(Digit0, "caps");
	ShiftedMinus.value = AutomateShiftCaps(Minus, "shift");
	CapsLockedMinus.value = AutomateShiftCaps(Minus, "caps");
	ShiftedEqual.value = AutomateShiftCaps(Equal, "shift");
	CapsLockedEqual.value = AutomateShiftCaps(Equal, "caps");

	ShiftedKeyQ.value = AutomateShiftCaps(KeyQ, "shift");
	CapsLockedKeyQ.value = AutomateShiftCaps(KeyQ, "caps");
	ShiftedKeyW.value = AutomateShiftCaps(KeyW, "shift");
	CapsLockedKeyW.value = AutomateShiftCaps(KeyW, "caps");
	ShiftedKeyE.value = AutomateShiftCaps(KeyE, "shift");
	CapsLockedKeyE.value = AutomateShiftCaps(KeyE, "caps");
	ShiftedKeyR.value = AutomateShiftCaps(KeyR, "shift");
	CapsLockedKeyR.value = AutomateShiftCaps(KeyR, "caps");
	ShiftedKeyT.value = AutomateShiftCaps(KeyT, "shift");
	CapsLockedKeyT.value = AutomateShiftCaps(KeyT, "caps");
	ShiftedKeyY.value = AutomateShiftCaps(KeyY, "shift");
	CapsLockedKeyY.value = AutomateShiftCaps(KeyY, "caps");
	ShiftedKeyU.value = AutomateShiftCaps(KeyU, "shift");
	CapsLockedKeyU.value = AutomateShiftCaps(KeyU, "caps");
	ShiftedKeyI.value = AutomateShiftCaps(KeyI, "shift");
	CapsLockedKeyI.value = AutomateShiftCaps(KeyI, "caps");
	ShiftedKeyO.value = AutomateShiftCaps(KeyO, "shift");
	CapsLockedKeyO.value = AutomateShiftCaps(KeyO, "caps");
	ShiftedKeyP.value = AutomateShiftCaps(KeyP, "shift");
	CapsLockedKeyP.value = AutomateShiftCaps(KeyP, "caps");
	ShiftedBracketLeft.value = AutomateShiftCaps(BracketLeft, "shift");
	CapsLockedBracketLeft.value = AutomateShiftCaps(BracketLeft, "caps");
	ShiftedBracketRight.value = AutomateShiftCaps(BracketRight, "shift");
	CapsLockedBracketRight.value = AutomateShiftCaps(BracketRight, "caps");
	ShiftedBackSlash.value = AutomateShiftCaps(BackSlash, "shift");
	CapsLockedBackSlash.value = AutomateShiftCaps(BackSlash, "caps");

	ShiftedKeyA.value = AutomateShiftCaps(KeyA, "shift");
	CapsLockedKeyA.value = AutomateShiftCaps(KeyA, "caps");
	ShiftedKeyS.value = AutomateShiftCaps(KeyS, "shift");
	CapsLockedKeyS.value = AutomateShiftCaps(KeyS, "caps");
	ShiftedKeyD.value = AutomateShiftCaps(KeyD, "shift");
	CapsLockedKeyD.value = AutomateShiftCaps(KeyD, "caps");
	ShiftedKeyF.value = AutomateShiftCaps(KeyF, "shift");
	CapsLockedKeyF.value = AutomateShiftCaps(KeyF, "caps");
	ShiftedKeyG.value = AutomateShiftCaps(KeyG, "shift");
	CapsLockedKeyG.value = AutomateShiftCaps(KeyG, "caps");
	ShiftedKeyH.value = AutomateShiftCaps(KeyH, "shift");
	CapsLockedKeyH.value = AutomateShiftCaps(KeyH, "caps");
	ShiftedKeyJ.value = AutomateShiftCaps(KeyJ, "shift");
	CapsLockedKeyJ.value = AutomateShiftCaps(KeyJ, "caps");
	ShiftedKeyK.value = AutomateShiftCaps(KeyK, "shift");
	CapsLockedKeyK.value = AutomateShiftCaps(KeyK, "caps");
	ShiftedKeyL.value = AutomateShiftCaps(KeyL, "shift");
	CapsLockedKeyL.value = AutomateShiftCaps(KeyL, "caps");
	ShiftedSemicolon.value = AutomateShiftCaps(Semicolon, "shift");
	CapsLockedSemicolon.value = AutomateShiftCaps(Semicolon, "caps");
	ShiftedQuote.value = AutomateShiftCaps(Quote, "shift");
	CapsLockedQuote.value = AutomateShiftCaps(Quote, "caps");
	ShiftedKeyZ.value = AutomateShiftCaps(KeyZ, "shift");
	CapsLockedKeyZ.value = AutomateShiftCaps(KeyZ, "caps");
	ShiftedKeyX.value = AutomateShiftCaps(KeyX, "shift");
	CapsLockedKeyX.value = AutomateShiftCaps(KeyX, "caps");
	ShiftedKeyC.value = AutomateShiftCaps(KeyC, "shift");
	CapsLockedKeyC.value = AutomateShiftCaps(KeyC, "caps");
	ShiftedKeyV.value = AutomateShiftCaps(KeyV, "shift");
	CapsLockedKeyV.value = AutomateShiftCaps(KeyV, "caps");
	ShiftedKeyB.value = AutomateShiftCaps(KeyB, "shift");
	CapsLockedKeyB.value = AutomateShiftCaps(KeyB, "caps");
	ShiftedKeyN.value = AutomateShiftCaps(KeyN, "shift");
	CapsLockedKeyN.value = AutomateShiftCaps(KeyN, "caps");
	ShiftedKeyM.value = AutomateShiftCaps(KeyM, "shift");
	CapsLockedKeyM.value = AutomateShiftCaps(KeyM, "caps");
	ShiftedComma.value = AutomateShiftCaps(Comma, "shift");
	CapsLockedComma.value = AutomateShiftCaps(Comma, "caps");
	ShiftedPeriod.value = AutomateShiftCaps(Period, "shift");
	CapsLockedPeriod.value = AutomateShiftCaps(Period, "caps");
	ShiftedSlash.value = AutomateShiftCaps(Slash, "shift");
	CapsLockedSlash.value = AutomateShiftCaps(Slash, "caps");
	AutoShiftEvent.preventDefault();
	return;
})


var allinputs = document.querySelectorAll('input');
for (let i = 0; i < allinputs.length; i++) {
	const nowinputs = allinputs[i];
	nowinputs.addEventListener('keydown', function (inputdownevent) {
		globalThis.parentparam = inputdownevent;
		if (inputdownevent.key == "Enter") {
			inputdownevent.preventDefault()
			return false;
		}
		//RightArrow
		if (inputdownevent.key == "ArrowRight") {
			let now = nowinputs;
			let next = now.nextElementSibling;
			next.focus();
			if (document.activeElement !== next) {
				next.nextElementSibling.focus();
			}
		}
		//LeftArrow 
		if (inputdownevent.key == "ArrowLeft") {
			let now = nowinputs;
			let previous = now.previousElementSibling;
			previous.focus();
			if (document.activeElement !== previous) {
				previous.previousElementSibling.focus();
			}
			inputdownevent.preventDefault();
		}
	})



	//Readonly set color
	if (nowinputs.readOnly == true) {
		nowinputs.style.backgroundColor = 'darkgrey';
	}


	//Skip Modifiers
	nowinputs.addEventListener('focus', function() {
	
		if (parentparam.key == "ArrowRight" || parentparam.key == "Tab") {
				if (nowinputs.readOnly == true) {
					if (nowinputs.nextElementSibling.readOnly == true) {
						nowinputs.nextElementSibling.nextElementSibling.focus();
					} else {
						nowinputs.nextElementSibling.focus();
					}
				} else {
					return;
				}
		} 
		if (parentparam.key == "ArrowLeft" || (parentparam.shiftKey && parentparam.keyCode == "9")) {
			if (nowinputs.readOnly == true) {
				if (nowinputs.previousElementSibling.readOnly == true) {
					nowinputs.previousElementSibling.previousElementSibling.focus();
				} else {
					nowinputs.previousElementSibling.focus();
				}
			} else {
				return;
			}
		}
	
		if (nowinputs.value == "Backspace" || nowinputs.value == "Enter") {
			if (parentparam.key == "ArrowRight" || parentparam.key == "Tab" && parentparam.shiftKey == false) {
				nowinputs.blur();
				nowinputs.nextElementSibling.nextElementSibling.focus();
			}
			if (parentparam.key == "ArrowLeft" || (parentparam.shiftKey && parentparam.keyCode == "9")) {
				nowinputs.blur();
				nowinputs.previousElementSibling.focus();
				return;
			}
		}
		if (nowinputs.value == "Tab" || nowinputs.value == "Shift" || nowinputs.value == "CapsLock") {
			if (parentparam.key == "ArrowRight" || parentparam.key == "Tab" && parentparam.shiftKey == false) {
				nowinputs.blur();
				nowinputs.nextElementSibling.focus();
			}
			if (parentparam.key == "ArrowLeft" || (parentparam.shiftKey && parentparam.keyCode == "9")) {
				nowinputs.blur();
				nowinputs.previousElementSibling.previousElementSibling.focus();
				return;
			}
		}
	})
}