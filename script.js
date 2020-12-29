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
KeyboardFontSize.addEventListener('input', function () {
	var fontval = KeyboardFontSize.value;
	PlainDiv.style.fontSize = fontval + "vw";
	ShiftDiv.style.fontSize = fontval + "vw";
	CapsDiv.style.fontSize = fontval + "vw";
	AltDiv.style.fontSize = fontval + "vw";
	AltGRDiv.style.fontSize = fontval + "vw";
})

var ClearKey = document.getElementById('ClearKeyState');
ClearKey.addEventListener('click', function () {
	var radioinputs = document.getElementsByName('KeyState');
	for (let i=0; i < radioinputs.length; i++) {
		if (radioinputs[i].checked === true) {
			var whichkey = radioinputs[i].id;
			switch (whichkey) {
				case 'PlainState':
					var parent = PlainDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						console.log(parent[i].value);
						if (parent[i].readOnly == true) {
							console.log('notinputtable');
						}
						else {
							parent[i].value = "";
						}
					}
					break;
				case 'ShiftState':
					var parent = ShiftDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						console.log(parent[i].value);
						if (parent[i].readOnly == true) {
							console.log('notinputtable');
						}
						else {
							parent[i].value = "";
						}
					}
					break;
				case 'CapsState':
					var parent = CapsDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						console.log(parent[i].value);
						if (parent[i].readOnly == true) {
							console.log('notinputtable');
						}
						else {
							parent[i].value = "";
						}
					}
					break;
				case 'AltState':
					var parent = AltDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						console.log(parent[i].value);
						if (parent[i].readOnly == true) {
							console.log('notinputtable');
						}
						else {
							parent[i].value = "";
						}
					}
					break;
				case 'AltGRState':
					var parent = AltGRDiv.querySelectorAll('input.key');
					for (let i=0; i < parent.length; i++) {
						console.log(parent[i].value);
						if (parent[i].readOnly == true) {
							console.log('notinputtable');
						}
						else {
							parent[i].value = "";
						}
					}
			}

		}
	}
})

var allinputs = document.querySelectorAll('input');
for (let i = 0; i < allinputs.length; i++) {
	allinputs[i].addEventListener('keypress', function (event) {
		if (event.keyCode == 13) {
			event.preventDefault()
			return false;
		}
		//LeftArrow
		if (event.keyCode == 37) {
			//function
		}
		//RightArrow 
		if (event.keyCode == 39) {
			//function
		}
	})

	if (allinputs[i].readOnly == true) {
		allinputs[i].style.backgroundColor = 'darkgrey';
	}
}

//Need to Add Arrow Functionality
//Need to add automatic shift and caps lock generator