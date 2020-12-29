<?php
function checkSpecial($KeyLayer) { 
    $onequote = "'";
    $twoquote = '"'; 
	$backslash = "\\";
    if ($KeyLayer === $twoquote) {
        return $onequote . $KeyLayer . $onequote; 
    } elseif ($KeyLayer === $onequote) {
        return $twoquote . $KeyLayer . $twoquote; 
    } elseif ($KeyLayer === $backslash) {
				return $twoquote . $backslash . $backslash . $twoquote; 
		} else {
        return $twoquote . $KeyLayer . $twoquote; 
    } 
}

function insertToArrayFormat ($code, $plain, $shift, $alt, $caps) {
	return $code . ': [' . checkSpecial($plain) . ',' . checkSpecial($shift) . ',' . checkSpecial($alt) . ',' . checkSpecial($caps) . '], ';
}
function insertToNoCodeFormat ($plain, $shift, $alt, $caps) {
	return '[' . checkSpecial($plain) . ',' . checkSpecial($shift) . ',' . checkSpecial($alt) . ',' . checkSpecial($caps) . ']';
}
//Declare Variables
//Plain Layer
$Backquote = $_POST['Backquote'];
$Digit1 = $_POST['Digit1'];
$Digit2 = $_POST['Digit2'];
$Digit3 = $_POST['Digit3'];
$Digit4 = $_POST['Digit4'];
$Digit5 = $_POST['Digit5'];
$Digit6 = $_POST['Digit6'];
$Digit7 = $_POST['Digit7'];
$Digit8 = $_POST['Digit8'];
$Digit9 = $_POST['Digit9'];
$Digit0 = $_POST['Digit1'];
$Minus = $_POST['Minus'];
$Equal = $_POST['Equal'];

$KeyQ = $_POST['KeyQ'];
$KeyW = $_POST['KeyW'];
$KeyE = $_POST['KeyE'];
$KeyR = $_POST['KeyR'];
$KeyT = $_POST['KeyT'];
$KeyY = $_POST['KeyY'];
$KeyU = $_POST['KeyU'];
$KeyI = $_POST['KeyI'];
$KeyO = $_POST['KeyO'];
$KeyP = $_POST['KeyP'];
$BracketLeft = $_POST['BracketLeft'];
$BracketRight = $_POST['BracketRight'];
$BackSlash = $_POST['BackSlash'];

$KeyA = $_POST['KeyA'];
$KeyS = $_POST['KeyS'];
$KeyD = $_POST['KeyD'];
$KeyF = $_POST['KeyF'];
$KeyG = $_POST['KeyG'];
$KeyH = $_POST['KeyH'];
$KeyJ = $_POST['KeyJ'];
$KeyK = $_POST['KeyK'];
$KeyL = $_POST['KeyL'];
$Semicolon = $_POST['Semicolon'];
$Quote = $_POST['Quote'];

$KeyZ = $_POST['KeyZ'];
$KeyX = $_POST['KeyX'];
$KeyC = $_POST['KeyC'];
$KeyV = $_POST['KeyV'];
$KeyB = $_POST['KeyB'];
$KeyN = $_POST['KeyN'];
$KeyM = $_POST['KeyM'];
$Comma = $_POST['Comma'];
$Period = $_POST['Period'];
$Slash = $_POST['Slash'];

//Shifted

$ShiftBackquote = $_POST['ShiftedBackquote'];
$ShiftDigit1 = $_POST['ShiftedDigit1'];
$ShiftDigit2 = $_POST['ShiftedDigit2'];
$ShiftDigit3 = $_POST['ShiftedDigit3'];
$ShiftDigit4 = $_POST['ShiftedDigit4'];
$ShiftDigit5 = $_POST['ShiftedDigit5'];
$ShiftDigit6 = $_POST['ShiftedDigit6'];
$ShiftDigit7 = $_POST['ShiftedDigit7'];
$ShiftDigit8 = $_POST['ShiftedDigit8'];
$ShiftDigit9 = $_POST['ShiftedDigit9'];
$ShiftDigit0 = $_POST['ShiftedDigit1'];
$ShiftMinus = $_POST['ShiftedMinus'];
$ShiftEqual = $_POST['ShiftedEqual'];

$ShiftKeyQ = $_POST['ShiftedKeyQ'];
$ShiftKeyW = $_POST['ShiftedKeyW'];
$ShiftKeyE = $_POST['ShiftedKeyE'];
$ShiftKeyR = $_POST['ShiftedKeyR'];
$ShiftKeyT = $_POST['ShiftedKeyT'];
$ShiftKeyY = $_POST['ShiftedKeyY'];
$ShiftKeyU = $_POST['ShiftedKeyU'];
$ShiftKeyI = $_POST['ShiftedKeyI'];
$ShiftKeyO = $_POST['ShiftedKeyO'];
$ShiftKeyP = $_POST['ShiftedKeyP'];
$ShiftBracketLeft = $_POST['ShiftedBracketLeft'];
$ShiftBracketRight = $_POST['ShiftedBracketRight'];
$ShiftBackSlash = $_POST['ShiftedBackSlash'];

$ShiftKeyA = $_POST['ShiftedKeyA'];
$ShiftKeyS = $_POST['ShiftedKeyS'];
$ShiftKeyD = $_POST['ShiftedKeyD'];
$ShiftKeyF = $_POST['ShiftedKeyF'];
$ShiftKeyG = $_POST['ShiftedKeyG'];
$ShiftKeyH = $_POST['ShiftedKeyH'];
$ShiftKeyJ = $_POST['ShiftedKeyJ'];
$ShiftKeyK = $_POST['ShiftedKeyK'];
$ShiftKeyL = $_POST['ShiftedKeyL'];
$ShiftSemicolon = $_POST['ShiftedSemicolon'];
$ShiftQuote = $_POST['ShiftedQuote'];

$ShiftKeyZ = $_POST['ShiftedKeyZ'];
$ShiftKeyX = $_POST['ShiftedKeyX'];
$ShiftKeyC = $_POST['ShiftedKeyC'];
$ShiftKeyV = $_POST['ShiftedKeyV'];
$ShiftKeyB = $_POST['ShiftedKeyB'];
$ShiftKeyN = $_POST['ShiftedKeyN'];
$ShiftKeyM = $_POST['ShiftedKeyM'];
$ShiftComma = $_POST['ShiftedComma'];
$ShiftPeriod = $_POST['ShiftedPeriod'];
$ShiftSlash = $_POST['ShiftedSlash'];

//Caps Locked
$CapsLockBackquote = $_POST['CapsLockedBackquote'];
$CapsLockDigit1 = $_POST['CapsLockedDigit1'];
$CapsLockDigit2 = $_POST['CapsLockedDigit2'];
$CapsLockDigit3 = $_POST['CapsLockedDigit3'];
$CapsLockDigit4 = $_POST['CapsLockedDigit4'];
$CapsLockDigit5 = $_POST['CapsLockedDigit5'];
$CapsLockDigit6 = $_POST['CapsLockedDigit6'];
$CapsLockDigit7 = $_POST['CapsLockedDigit7'];
$CapsLockDigit8 = $_POST['CapsLockedDigit8'];
$CapsLockDigit9 = $_POST['CapsLockedDigit9'];
$CapsLockDigit0 = $_POST['CapsLockedDigit1'];
$CapsLockMinus = $_POST['CapsLockedMinus'];
$CapsLockEqual = $_POST['CapsLockedEqual'];

$CapsLockKeyQ = $_POST['CapsLockedKeyQ'];
$CapsLockKeyW = $_POST['CapsLockedKeyW'];
$CapsLockKeyE = $_POST['CapsLockedKeyE'];
$CapsLockKeyR = $_POST['CapsLockedKeyR'];
$CapsLockKeyT = $_POST['CapsLockedKeyT'];
$CapsLockKeyY = $_POST['CapsLockedKeyY'];
$CapsLockKeyU = $_POST['CapsLockedKeyU'];
$CapsLockKeyI = $_POST['CapsLockedKeyI'];
$CapsLockKeyO = $_POST['CapsLockedKeyO'];
$CapsLockKeyP = $_POST['CapsLockedKeyP'];
$CapsLockBracketLeft = $_POST['CapsLockedBracketLeft'];
$CapsLockBracketRight = $_POST['CapsLockedBracketRight'];
$CapsLockBackSlash = $_POST['CapsLockedBackSlash'];

$CapsLockKeyA = $_POST['CapsLockedKeyA'];
$CapsLockKeyS = $_POST['CapsLockedKeyS'];
$CapsLockKeyD = $_POST['CapsLockedKeyD'];
$CapsLockKeyF = $_POST['CapsLockedKeyF'];
$CapsLockKeyG = $_POST['CapsLockedKeyG'];
$CapsLockKeyH = $_POST['CapsLockedKeyH'];
$CapsLockKeyJ = $_POST['CapsLockedKeyJ'];
$CapsLockKeyK = $_POST['CapsLockedKeyK'];
$CapsLockKeyL = $_POST['CapsLockedKeyL'];
$CapsLockSemicolon = $_POST['CapsLockedSemicolon'];
$CapsLockQuote = $_POST['CapsLockedQuote'];

$CapsLockKeyZ = $_POST['CapsLockedKeyZ'];
$CapsLockKeyX = $_POST['CapsLockedKeyX'];
$CapsLockKeyC = $_POST['CapsLockedKeyC'];
$CapsLockKeyV = $_POST['CapsLockedKeyV'];
$CapsLockKeyB = $_POST['CapsLockedKeyB'];
$CapsLockKeyN = $_POST['CapsLockedKeyN'];
$CapsLockKeyM = $_POST['CapsLockedKeyM'];
$CapsLockComma = $_POST['CapsLockedComma'];
$CapsLockPeriod = $_POST['CapsLockedPeriod'];
$CapsLockSlash = $_POST['CapsLockedSlash'];

//Alted

$AltBackquote = $_POST['AltedBackquote'];
$AltDigit1 = $_POST['AltedDigit1'];
$AltDigit2 = $_POST['AltedDigit2'];
$AltDigit3 = $_POST['AltedDigit3'];
$AltDigit4 = $_POST['AltedDigit4'];
$AltDigit5 = $_POST['AltedDigit5'];
$AltDigit6 = $_POST['AltedDigit6'];
$AltDigit7 = $_POST['AltedDigit7'];
$AltDigit8 = $_POST['AltedDigit8'];
$AltDigit9 = $_POST['AltedDigit9'];
$AltDigit0 = $_POST['AltedDigit1'];
$AltMinus = $_POST['AltedMinus'];
$AltEqual = $_POST['AltedEqual'];

$AltKeyQ = $_POST['AltedKeyQ'];
$AltKeyW = $_POST['AltedKeyW'];
$AltKeyE = $_POST['AltedKeyE'];
$AltKeyR = $_POST['AltedKeyR'];
$AltKeyT = $_POST['AltedKeyT'];
$AltKeyY = $_POST['AltedKeyY'];
$AltKeyU = $_POST['AltedKeyU'];
$AltKeyI = $_POST['AltedKeyI'];
$AltKeyO = $_POST['AltedKeyO'];
$AltKeyP = $_POST['AltedKeyP'];
$AltBracketLeft = $_POST['AltedBracketLeft'];
$AltBracketRight = $_POST['AltedBracketRight'];
$AltBackSlash = $_POST['AltedBackSlash'];

$AltKeyA = $_POST['AltedKeyA'];
$AltKeyS = $_POST['AltedKeyS'];
$AltKeyD = $_POST['AltedKeyD'];
$AltKeyF = $_POST['AltedKeyF'];
$AltKeyG = $_POST['AltedKeyG'];
$AltKeyH = $_POST['AltedKeyH'];
$AltKeyJ = $_POST['AltedKeyJ'];
$AltKeyK = $_POST['AltedKeyK'];
$AltKeyL = $_POST['AltedKeyL'];
$AltSemicolon = $_POST['AltedSemicolon'];
$AltQuote = $_POST['AltedQuote'];

$AltKeyZ = $_POST['AltedKeyZ'];
$AltKeyX = $_POST['AltedKeyX'];
$AltKeyC = $_POST['AltedKeyC'];
$AltKeyV = $_POST['AltedKeyV'];
$AltKeyB = $_POST['AltedKeyB'];
$AltKeyN = $_POST['AltedKeyN'];
$AltKeyM = $_POST['AltedKeyM'];
$AltComma = $_POST['AltedComma'];
$AltPeriod = $_POST['AltedPeriod'];
$AltSlash = $_POST['AltedSlash'];

//AltGR

$AltGRBackquote = $_POST['AltGRBackquote'];
$AltGRDigit1 = $_POST['AltGRDigit1'];
$AltGRDigit2 = $_POST['AltGRDigit2'];
$AltGRDigit3 = $_POST['AltGRDigit3'];
$AltGRDigit4 = $_POST['AltGRDigit4'];
$AltGRDigit5 = $_POST['AltGRDigit5'];
$AltGRDigit6 = $_POST['AltGRDigit6'];
$AltGRDigit7 = $_POST['AltGRDigit7'];
$AltGRDigit8 = $_POST['AltGRDigit8'];
$AltGRDigit9 = $_POST['AltGRDigit9'];
$AltGRDigit0 = $_POST['AltGRDigit1'];
$AltGRMinus = $_POST['AltGRMinus'];
$AltGREqual = $_POST['AltGREqual'];

$AltGRKeyQ = $_POST['AltGRKeyQ'];
$AltGRKeyW = $_POST['AltGRKeyW'];
$AltGRKeyE = $_POST['AltGRKeyE'];
$AltGRKeyR = $_POST['AltGRKeyR'];
$AltGRKeyT = $_POST['AltGRKeyT'];
$AltGRKeyY = $_POST['AltGRKeyY'];
$AltGRKeyU = $_POST['AltGRKeyU'];
$AltGRKeyI = $_POST['AltGRKeyI'];
$AltGRKeyO = $_POST['AltGRKeyO'];
$AltGRKeyP = $_POST['AltGRKeyP'];
$AltGRBracketLeft = $_POST['AltGRBracketLeft'];
$AltGRBracketRight = $_POST['AltGRBracketRight'];
$AltGRBackSlash = $_POST['AltGRBackSlash'];

$AltGRKeyA = $_POST['AltGRKeyA'];
$AltGRKeyS = $_POST['AltGRKeyS'];
$AltGRKeyD = $_POST['AltGRKeyD'];
$AltGRKeyF = $_POST['AltGRKeyF'];
$AltGRKeyG = $_POST['AltGRKeyG'];
$AltGRKeyH = $_POST['AltGRKeyH'];
$AltGRKeyJ = $_POST['AltGRKeyJ'];
$AltGRKeyK = $_POST['AltGRKeyK'];
$AltGRKeyL = $_POST['AltGRKeyL'];
$AltGRSemicolon = $_POST['AltGRSemicolon'];
$AltGRQuote = $_POST['AltGRQuote'];

$AltGRKeyZ = $_POST['AltGRKeyZ'];
$AltGRKeyX = $_POST['AltGRKeyX'];
$AltGRKeyC = $_POST['AltGRKeyC'];
$AltGRKeyV = $_POST['AltGRKeyV'];
$AltGRKeyB = $_POST['AltGRKeyB'];
$AltGRKeyN = $_POST['AltGRKeyN'];
$AltGRKeyM = $_POST['AltGRKeyM'];
$AltGRComma = $_POST['AltGRComma'];
$AltGRPeriod = $_POST['AltGRPeriod'];
$AltGRSlash = $_POST['AltGRSlash'];

//END OF VARIABLE DECLARATION

mkdir('generated');
mkdir('generated/extension');
?>


<?php
$bgPath = 'generated/extension/background.js';
$backgroundFile = fopen($bgPath, "w+");
$backgroundAssembled = '/*
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

var lut = {' .
insertToArrayFormat('Backquote', $Backquote, $ShiftBackquote, $CapsLockBackquote, $AltBackquote, $AltGRBackquote) .
insertToArrayFormat('Digit1', $Digit1, $ShiftDigit1, $CapsLockDigit1, $AltDigit1, $AltGRDigit1) .
insertToArrayFormat('Digit2', $Digit2, $ShiftDigit2, $CapsLockDigit2, $AltDigit2, $AltGRDigit2) .
insertToArrayFormat('Digit3', $Digit3, $ShiftDigit3, $CapsLockDigit3, $AltDigit3, $AltGRDigit3) .
insertToArrayFormat('Digit4', $Digit4, $ShiftDigit4, $CapsLockDigit4, $AltDigit4, $AltGRDigit4) .
insertToArrayFormat('Digit5', $Digit5, $ShiftDigit5, $CapsLockDigit5, $AltDigit5, $AltGRDigit5) .
insertToArrayFormat('Digit6', $Digit6, $ShiftDigit6, $CapsLockDigit6, $AltDigit6, $AltGRDigit6) .
insertToArrayFormat('Digit7', $Digit7, $ShiftDigit7, $CapsLockDigit7, $AltDigit7, $AltGRDigit7) .
insertToArrayFormat('Digit8', $Digit8, $ShiftDigit8, $CapsLockDigit8, $AltDigit8, $AltGRDigit8) .
insertToArrayFormat('Digit9', $Digit9, $ShiftDigit9, $CapsLockDigit9, $AltDigit9, $AltGRDigit9) .
insertToArrayFormat('Digit0', $Digit0, $ShiftDigit0, $CapsLockDigit0, $AltDigit0, $AltGRDigit0) .
insertToArrayFormat('Minus', $Minus, $ShiftMinus,$CapsLockMinus, $AltMinus, $AltGRMinus).
insertToArrayFormat('Equal', $Equal, $ShiftEqual,$CapsLockEqual, $AltEqual, $AltGREqual).

insertToArrayFormat('KeyQ', $KeyQ, $ShiftKeyQ, $CapsLockKeyQ, $AltKeyQ, $AltGRKeyQ) .
insertToArrayFormat('KeyW', $KeyW, $ShiftKeyW, $CapsLockKeyW, $AltKeyW, $AltGRKeyW) .
insertToArrayFormat('KeyE', $KeyE, $ShiftKeyE, $CapsLockKeyE, $AltKeyE, $AltGRKeyE) .
insertToArrayFormat('KeyR', $KeyR, $ShiftKeyR, $CapsLockKeyR, $AltKeyR, $AltGRKeyR) .
insertToArrayFormat('KeyT', $KeyT, $ShiftKeyT, $CapsLockKeyT, $AltKeyT, $AltGRKeyT) .
insertToArrayFormat('KeyY', $KeyY, $ShiftKeyY, $CapsLockKeyY, $AltKeyY, $AltGRKeyY) .
insertToArrayFormat('KeyU', $KeyU, $ShiftKeyU, $CapsLockKeyU, $AltKeyU, $AltGRKeyU) .
insertToArrayFormat('KeyI', $KeyI, $ShiftKeyI, $CapsLockKeyI, $AltKeyI, $AltGRKeyI) .
insertToArrayFormat('KeyO', $KeyO, $ShiftKeyO, $CapsLockKeyO, $AltKeyO, $AltGRKeyO) .
insertToArrayFormat('KeyP', $KeyP, $ShiftKeyP, $CapsLockKeyP, $AltKeyP, $AltGRKeyP) .
insertToArrayFormat('BracketLeft', $BracketLeft, $ShiftBracketLeft, $CapsLockBracketLeft, $AltBracketLeft, $AltGRBracketLeft) .
insertToArrayFormat('BracketRight', $BracketRight, $ShiftBracketRight, $CapsLockBracketRight, $AltBracketRight, $AltGRBracketRight) .

insertToArrayFormat('KeyA', $KeyA, $ShiftKeyA, $CapsLockKeyA, $AltKeyA, $AltGRKeyA) .
insertToArrayFormat('KeyS', $KeyS, $ShiftKeyS, $CapsLockKeyS, $AltKeyS, $AltGRKeyS) .
insertToArrayFormat('KeyD', $KeyD, $ShiftKeyD, $CapsLockKeyD, $AltKeyD, $AltGRKeyD) .
insertToArrayFormat('KeyF', $KeyF, $ShiftKeyF, $CapsLockKeyF, $AltKeyF, $AltGRKeyF) .
insertToArrayFormat('KeyG', $KeyG, $ShiftKeyG, $CapsLockKeyG, $AltKeyG, $AltGRKeyG) .
insertToArrayFormat('KeyH', $KeyH, $ShiftKeyH, $CapsLockKeyH, $AltKeyH, $AltGRKeyH) .
insertToArrayFormat('KeyJ', $KeyJ, $ShiftKeyJ, $CapsLockKeyJ, $AltKeyJ, $AltGRKeyJ) .
insertToArrayFormat('KeyK', $KeyK, $ShiftKeyK, $CapsLockKeyK, $AltKeyK, $AltGRKeyK) .
insertToArrayFormat('KeyL', $KeyL, $ShiftKeyL, $CapsLockKeyL, $AltKeyL, $AltGRKeyL) .
insertToArrayFormat('Semicolon', $Semicolon, $ShiftSemicolon, $CapsLockSemicolon, $AltSemicolon, $AltGRSemicolon) .
insertToArrayFormat('Quote', $Quote, $ShiftQuote, $CapsLockQuote, $AltQuote, $AltGRQuote) .

insertToArrayFormat('KeyZ', $KeyZ, $ShiftKeyZ, $CapsLockKeyZ, $AltKeyZ, $AltGRKeyZ) .
insertToArrayFormat('KeyX', $KeyX, $ShiftKeyX, $CapsLockKeyX, $AltKeyX, $AltGRKeyX) .
insertToArrayFormat('KeyC', $KeyC, $ShiftKeyC, $CapsLockKeyC, $AltKeyC, $AltGRKeyC) .
insertToArrayFormat('KeyV', $KeyV, $ShiftKeyV, $CapsLockKeyV, $AltKeyV, $AltGRKeyV) .
insertToArrayFormat('KeyB', $KeyB, $ShiftKeyB, $CapsLockKeyB, $AltKeyB, $AltGRKeyB) .
insertToArrayFormat('KeyN', $KeyN, $ShiftKeyN, $CapsLockKeyN, $AltKeyN, $AltGRKeyN) .
insertToArrayFormat('KeyM', $KeyM, $ShiftKeyM, $CapsLockKeyM, $AltKeyM, $AltGRKeyM) .
insertToArrayFormat('Comma', $Comma, $ShiftComma, $CapsLockComma, $AltComma, $AltGRComma) .
insertToArrayFormat('Period', $Period, $ShiftPeriod, $CapsLockPeriod, $AltPeriod, $AltGRPeriod) .
insertToArrayFormat('Slash', $Slash, $ShiftSlash, $CapsLockSlash, $AltSlash, $AltGRSlash) .
'};
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
      let backslash = ' . insertToNoCodeFormat($BackSlash, $ShiftBackSlash, $CapsLockBackSlash, $AltBackSlash, $AltGRBackSlash) .
			'
			let backslashkey = backslash[checkstate];

      if (backslashkey == "\\\") {
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
';
fwrite($backgroundFile, $backgroundAssembled);
fclose($backgroundFile);


$mnPath = 'generated/extension/manifest.json';
$manifestFile = fopen($mnPath, "w+");
$manifestName = $_POST['JsonName'];
$manifestDescription = $_POST['JsonDescription'];
$manifestCNID = strtolower($manifestName);
$manifestCNDescription = strtolower($manifestDescription);
$manifestAssembled = '{ "name": "' . $manifestName .  '", "version": "1.0", "manifest_version": 2, "description": "' . $manifestDescription . '", "background": { "scripts": ["background.js"] }, "permissions": ["input"], "input_components": [{ "name": "' . $manifestName . '", "type": "ime", "id": "' . $manifestCNID . '", "description": "' . $manifestCNDescription . '", "language": "en-US", "layouts": ["us"] }]}';
fwrite($manifestFile, $manifestAssembled);
fclose($manifestFile);

unlink('generated/manifest.json');
unlink('generated/background.js');


// Get real path for our folder
$rootPath = realpath('generated');

// Initialize archive object
$zip = new ZipArchive();
$zip->open('generated.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);

// Create recursive directory iterator
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootPath),
    RecursiveIteratorIterator::LEAVES_ONLY
);

foreach ($files as $name => $file)
{
    // Skip directories (they would be added automatically)
    if (!$file->isDir())
    {
        // Get real and relative path for current file
        $filePath = $file->getRealPath();
        $relativePath = substr($filePath, strlen($rootPath) + 1);

        // Add current file to archive
        $zip->addFile($filePath, $relativePath);
    }
}

// Zip archive will be created only after closing object
$zip->close();



$zipcreated = "generated.zip";
header("Content-type: application/zip"); 
header("Content-Disposition: attachment; filename=$zipcreated");
header("Pragma: no-cache"); 
header("Expires: 0");
readfile($zipcreated);
echo "I hope this was downloaded. Thank You!";
?>

