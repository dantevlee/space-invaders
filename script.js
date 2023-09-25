let tileSize = 32;
let rows = 16;
let columns = 16;

let gameBoard;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;

let shipWidth = tileSize * 2;
let shipHeight = tileSize;

let shipX = tileSize * columns/2 - tileSize;
let shipY = tileSize * rows  - tileSize * 2;

let shipImg;

let ship = {
  x: shipX,
  y: shipY,
  width: shipWidth,
  height: shipHeight
}

window.onload = function() {
  gameBoard = document.getElementById('game-board');
  gameBoard.width = boardHeight;
  gameBoard.height = boardHeight;
  context =  gameBoard.getContext('2d');

  // draw ship (no image)
  // context.fillStyle='green';
  // context.fillRect(ship.x, ship.y, ship.width, ship.height);

  shipImg = new Image();
  shipImg.src= './ship.png';
  shipImg.onload = function(){
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
  }
  
}

