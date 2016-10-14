'use strict';

var currentColor = '';
var allDivs = document.getElementsByClassName('pixel-square');
var currentColorBox = document.querySelector('.current-color-container');
var currentColorText = document.querySelector('.current-color-header');
var canvas = document.querySelector('.pixel-canvas');
createDivs();
pickColor();
createCanvasListeners();
createToolKit();
totalListenerRefresh();

function createDivs() {
  for(var i = 0; i < 1624; i++) {
    var pixelSquare = document.createElement('DIV');
    canvas.appendChild(pixelSquare);
    pixelSquare.className = 'pixel-square';
  }
}

function pickColor() {
  var allColors = document.getElementsByClassName('color');
  for(var i = 0; i < allColors.length; i++) {
    allColors[i].addEventListener("mousedown", function(event) {
      currentColor = '#' + event.target.id;
      currentColorBox.style.backgroundColor = currentColor;
      document.body.style.cursor = "url('paintb-cursor.png'), default";
      currentColorText.innerText = "CURRENT COLOR";
    });
  }
}

function createCanvasListeners() {
  for(var i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener("mousedown", function(event) {
      event.target.style.backgroundColor = currentColor;
      event.target.style.border = '0px';
      for(var j = 0; j < allDivs.length; j++) {
        allDivs[j].addEventListener("mouseover", dasHandler);
      }
    });
  }
  for(var k = 0; k < allDivs.length; k++) {
    allDivs[k].addEventListener("mouseup", function(event) {
      for(var l = 0; l < allDivs.length; l++) {
        allDivs[l].removeEventListener("mouseover", dasHandler);
      }
    });
  }
}

function createToolKit() {
  var paintbrushButton = document.getElementById('paintbrush');
  var eraserButton = document.getElementById('eraser');
  var newRowButton = document.getElementById('row-button');
  var newColorButton = document.getElementById('color-button');
  var clearImageButton = document.getElementById('clear-button');

  paintbrushButton.addEventListener("click", function() {
    document.body.style.cursor = "url('paintb-cursor.png'), default";
    currentColorText.innerText = "CURRENT COLOR";
    currentColorBox.style.backgroundColor = 'white';
    totalListenerRefresh();
  });

  eraserButton.addEventListener("click", function() {
    document.body.style.cursor = "url('eraser-cursor.png'), default";
    currentColorText.innerText = "ERASER";
    currentColorBox.style.backgroundColor = 'white';
    currentColor = 'white';
    for(var i = 0; i < allDivs.length; i++) {
      allDivs[i].addEventListener("mousedown", function(event) {
        event.target.style.backgroundColor = currentColor;
        event.target.style.border = '1px #d3d3d3 solid';
        for(var j = 0; j < allDivs.length; j++) {
          allDivs[j].addEventListener("mouseover", dasHandler);
        }
      });
    }
    for(var k = 0; k < allDivs.length; k++) {
      allDivs[k].addEventListener("mouseup", function(event) {
        for(var l = 0; l < allDivs.length; l++) {
          allDivs[l].removeEventListener("mouseover", dasHandler);
        }
      });
    }
    totalListenerRefresh();
  });

  newRowButton.addEventListener("click", function() {
    for(var i = 0; i < 56; i++) {
      var pixelSquare = document.createElement('DIV');
      canvas.appendChild(pixelSquare);
      pixelSquare.className = 'pixel-square';
    }
    totalListenerRefresh();
  });

  newColorButton.addEventListener("click", function() {
    var userColor = window.prompt("Please enter a HEX Color Code here (do not include the #):", "Ex. FF6600");
    var colorPallette = document.querySelector('.palet-container');
    if (userColor.length !== 6) {
      userColor = window.prompt("ERROR! INCORRECT VALUE ENTERED! Please enter a HEX Color Code here (do not include the #), enter 'exited' to close':", "Ex. FF6600");
    }
    else {
      var newColorCircle = document.createElement('DIV');
      colorPallette.appendChild(newColorCircle);
      newColorCircle.className = 'color';
      newColorCircle.style.marginRight = '5px';
      newColorCircle.id = userColor;
      newColorCircle.style.backgroundColor = '#' + userColor;

      totalListenerRefresh();
    }
  });

  clearImageButton.addEventListener("mousedown", function() {
    for(var i = 0; i < allDivs.length; i++) {
      allDivs[i].style.backgroundColor = 'white';
      allDivs[i].style.border = '1px #d3d3d3 solid';
    }
    totalListenerRefresh();
  });
}

function dasHandler(event) {
  event.target.style.backgroundColor = currentColor;
  event.target.style.border = '0px';
}

function totalListenerRefresh() {
  pickColor();
  createCanvasListeners();
}
