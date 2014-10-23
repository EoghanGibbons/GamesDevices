var ball;
var paddle;
var width;
var height;
function Game (){
}

Game.prototype.initCanvas=function () {
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	width = canvas.getAttribute("width");
	height = canvas.getAttribute("height");
}

Game.prototype.initWorld = function(){
	ball = new Ball(225, 225, -1, 1 );
	paddle = new Paddle(10, 200);
	playerTwoPaddle = new Paddle(420,200);
}

Game.prototype.gameLoop = function () {
	game.update();
	game.draw();
	ball.update();
	paddle.update();
	playerTwoPaddle.update();
}

Game.prototype.draw =function (){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width, height);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, width, height);
}

Game.prototype.update = function(){
	if(KeyController.isKeyDown(Key.W)){
		paddle.movePaddle(-5);
	}
	if(KeyController.isKeyDown(Key.S)){
		paddle.movePaddle(5);
	}
	if(KeyController.isKeyDown(Key.UP)){
		playerTwoPaddle.movePaddle(-5);
	}
	if(KeyController.isKeyDown(Key.DOWN)){
		playerTwoPaddle.movePaddle(5);
	}
	if ((ball.x -10 <= paddle.x+paddle.width) || (ball.x + 10 >= playerTwoPaddle.x) && 
		(((ball.y < paddle.y + paddle.height) || (ball.y < paddle.y + playerTwoPaddle.height)) && ((ball.y > paddle.y) || (ball.y > playerTwoPaddle.y)))) {
		ball.rebound();
	}
}