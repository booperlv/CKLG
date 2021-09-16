//This is generally all we need to configure.
let keyboard_layers = {
	//Needed
  init: [
    '`', '1', '2', '3', '4', '5' ,'6', '7', '8', '9', '0', '-', '=',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'
  ],
  shift: [
    '~', '!', '@', '#', '$', '%' ,'^', '&', '*', '(', ')', '_', '+',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'",
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'
  ],
	//Optional, can be removed and it wouldn't affect anything
  //ctrl: [
  //  '`', '1', '2', '3', '4', '5' ,'6', '7', '8', '9', '0', '-', '=',
  //  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\',
  //  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
  //  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'
  //],
  //alt: [
  //  '`', '1', '2', '3', '4', '5' ,'6', '7', '8', '9', '0', '-', '=',
  //  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '\\',
  //  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",
  //  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'
  //]
}

const keycodes = [
  "Backquote", "Digit1", "Digit2", "Digit3", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal",
  "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash",
  "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote",
  "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash"
]


//Assign the array into an object consisting of the keycodes above
let key_interface = {}
for (layer in keyboard_layers) {
	let assigned_to_keycodes = {}
	keycodes.forEach(async function(keycode, index) {
		assigned_to_keycodes[keycode] = layer[index]
	})
	key_interface[layer] = assigned_to_keycodes
}



var contextID = 0;

chrome.input.ime.onFocus.addListener(
  function(context) {
    contextID = context.contextID;
  }
);

chrome.input.ime.onBlur.addListener(() => {
  contextID = 0;
})


chrome.input.ime.onKeyEvent.addListener(
  function(engineID, keyData) {
    var handled = false;

    if (keyData.type == "keydown") {
      if (key_interface[keyData.code]) {
        let emit
        
        let shift_pressed = keyData.capsLock ^ keyData.shiftKey;
				//For ctrl and alt, we first check for their existence and just turn
				//them to false if they don't exist in the keyboard layers.
        let ctrl_pressed = (ctrl in keyboard_layers ? keyData.ctrlKey : false)
        let alt_pressed = (alt in keyboard_layers ? keyData.altKey : false)

        if (shift_pressed) {
          emit = key_interface['shift'][keyData.code];
        } else if (ctrl_pressed) {
          emit = key_interface['ctrl'][keyData.code];
        } else if (alt_pressed) {
          emit = key_interface['alt'][keyData.code];
        } else {
          emit = key_interface['init'][keyData.code];
        }

        if (emit != null && contextID != 0) {
          chrome.input.ime.commitText({
            "contextID": contextID,
            "text": emit,
          }, () => {
              if (chrome.runtime.lastError) {
                console.error('Error committing text:', chrome.runtime.lastError);
                return;
              }
            });
        }
        handled = true;
      }
    }
    return handled;
});
