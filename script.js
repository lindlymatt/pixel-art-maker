'use strict';

function createPixels() {
  var canvas = document.querySelector('.pixel-canvas');
  for(var i = 0; i < 1624; i++) {
    var pixelSquare = document.createElement('DIV');
    canvas.appendChild(pixelSquare);

    pixelSquare.style.display = 'inline-block';
    pixelSquare.style.width = '15.4px';
    pixelSquare.style.float = 'left';
    pixelSquare.style.height = '15.4px';
    pixelSquare.style.backgroundColor = 'white';
    pixelSquare.style.border = '1px #d3d3d3 solid';
  }

  console.log(canvas);
}

function clickedColor(object) {
  var currentColorBox = document.getElementById('current-color');
  var allColors = document.getElementsByClassName('color');

  for(var i = 0; i < allColors.length; i++) {
  console.log(allColors[i]);
    if(object.target === allColors[i]) {
      currentColorBox.style.backgroundColor = allColors[i].style.backgroundColor;
      console.log(allColors[i] + ' : ' + object.target);
    }
  }
}

createPixels();
