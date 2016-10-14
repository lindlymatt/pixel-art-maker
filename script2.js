'use strict';

var newColor = '';
var currentColor = '';
createDivs();

function createDivs() {
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
    pixelSquare.className = 'pixel-square';
  }
}
