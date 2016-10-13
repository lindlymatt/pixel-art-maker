'use strict';

function createPixels() {
  var canvas = document.querySelector('#pixel-canvass');
  for(var i = 0; i < 1620; i++) {
    var pixelSquare = document.createElement('DIV');
    canvas.appendChild(pixelSquare);
    console.log('hello');

    pixelSquare.style.display = 'inline-block';
    pixelSquare.style.float = 'left';
    pixelSquare.style.width = '16px';
    pixelSquare.style.height = '16px';
    pixelSquare.style.backgroundColor = 'white';
    pixelSquare.style.border = '1px #d3d3d3 solid';
  }

  console.log(canvas);
}

createPixels();
