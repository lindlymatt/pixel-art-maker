'use strict';

var canvas = document.querySelector('.pixel-canvas');
var allColors = document.getElementsByClassName('color');
var allDivs = document.getElementsByClassName('pixel-square');
var currentColorBox = document.querySelector('.current-color-container');
var currentColorText = document.querySelector('.current-color-header');
var paintbrushButton = document.getElementById('paintbrush');
var eraserButton = document.getElementById('eraser');
var newRowButton = document.getElementById('row-button');
var newColorButton = document.getElementById('color-button');
var clearImageButton = document.getElementById('clear-button');
var colorPallette = document.querySelector('.palet-container');
var newColor = '';
var currentColor = '';

function createPixels() {
  for(var i = 0; i < 1624; i++) {
    var pixelSquare = document.createElement('DIV');
    canvas.appendChild(pixelSquare);

    pixelSquare.style.display = 'inline-block';
    pixelSquare.style.width = '15.4px';
    pixelSquare.style.float = 'left';
    pixelSquare.style.height = '15.4px';
    pixelSquare.style.backgroundColor = 'white';
    pixelSquare.style.border = '1px #d3d3d3 solid';
    pixelSquare.className = 'pixel-square';
  }
}

function refreshAll() {
  for(var i = 0; i < allColors.length; i++) {
    allColors[i].addEventListener("mousedown", function(event) {
      currentColor = '#' + event.target.id;
      currentColorBox.style.backgroundColor = currentColor;
      document.body.style.cursor = "url('paintb-cursor.png'), default";
      currentColorText.innerText = "CURRENT COLOR ON BRUSH";
    });
    for(var j = 0; j < allDivs.length; j++) {
      allDivs[j].addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = currentColor;
      });
    }
  }

  for(var i = 0; i < allColors.length; i++) {
    allColors[i].addEventListener("mouseup", function(event) {
      currentColor = '#' + event.target.id;
      currentColorBox.style.backgroundColor = currentColor;
      document.body.style.cursor = "url('paintb-cursor.png'), default";
      currentColorText.innerText = "CURRENT COLOR ON BRUSH";
    });
    for(var j = 0; j < allDivs.length; j++) {
      allDivs[j].removeEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = currentColor;
      });
    }
  }
}

createPixels();

// Color Pallete Manipulation:

for(var i = 0; i < allColors.length; i++) {
  allColors[i].addEventListener("mousedown", function(event) {
    currentColor = '#' + event.target.id;
    currentColorBox.style.backgroundColor = currentColor;
    document.body.style.cursor = "url('paintb-cursor.png'), default";
    currentColorText.innerText = "CURRENT COLOR ON BRUSH";
  });
}

// Adds Event Listeners to Canvas:

for(var j = 0; j < allDivs.length; j++) {
  allDivs[j].addEventListener("mousedown", function(event) {
    event.target.style.backgroundColor = currentColor;
  });
  allDivs[j].addEventListener("mousedown", function(event) {
    event.target.style.backgroundColor = currentColor;
  });
}

// Paintbrush Image/Tool Functionality:

paintbrushButton.addEventListener("mousedown", function() {
  document.body.style.cursor = "url('paintb-cursor.png'), default";
  currentColorText.innerText = "CURRENT COLOR ON BRUSH";
  currentColorBox.style.backgroundColor = 'white';
});

// Eraser Image/Tool Functionality:

eraserButton.addEventListener("mousedown", function() {
  document.body.style.cursor = "url('eraser-cursor.png'), default";
  currentColorText.innerText = "ERASER";
  currentColorBox.style.backgroundColor = 'white';
  currentColor = 'white';
});

// New Row Functionality (56 New Divs):

newRowButton.addEventListener("mousedown", function() {
  for(var i = 0; i < 56; i++) {
    var pixelSquare = document.createElement('DIV');
    canvas.appendChild(pixelSquare);

    pixelSquare.style.display = 'inline-block';
    pixelSquare.style.width = '15.4px';
    pixelSquare.style.float = 'left';
    pixelSquare.style.height = '15.4px';
    pixelSquare.style.backgroundColor = 'white';
    pixelSquare.style.border = '1px #d3d3d3 solid';
    pixelSquare.className = 'pixel-square';
  }

  refreshAll();
});

// Pops Up New Color Window

newColorButton.addEventListener("mousedown", function() {
  newColor = '';
  while(newColor.length !== 7 && newColor === 'exit') {
    newColor = window.prompt("Please enter a HEX Color Code here, please include (#) before the 6 digit code, type 'exit' to not enter a code, unfortunately, at this time, you cannot set a HEX Color Code with a number as the first character:","Example Error: #567102, Correct: #A28723");
  }

  //creates newColor without hashtag
  var newColorNoHashtag = '';
  for(var q = 1; q < newColor.length; q++) {
    newColorNoHashtag += newColor[q];
  }

  var newColorCircle = document.createElement('DIV');
  colorPallette.appendChild(newColorCircle);

  newColorCircle.style.display = 'inline-block';
  newColorCircle.style.float = 'left';
  newColorCircle.style.marginRight = '5px';
  newColorCircle.style.height = '40.5px';
  newColorCircle.style.width = '40.5px';
  newColorCircle.id = newColorNoHashtag;
  newColorCircle.style.backgroundColor = newColor;
  newColorCircle.style.border = '0px #bdbdbd solid';
  newColorCircle.style.borderRadius = '20px';
  newColorCircle.className = 'color';

  refreshAll();
});

// Clear Button Functionality

clearImageButton.addEventListener("mousedown", function() {
  for(var i = 0; i < allDivs.length; i++) {
    allDivs[i].style.backgroundColor = 'white';
  }

  refreshAll();
});

alert('Welcome to the Pixeltopia! If you have gotten this far, then you are off to a good start. You can click the colors and tools below to help you draw wonderful images. Click & drag to color over multiple boxes at once!');
