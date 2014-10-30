var ball;
var paddle;
var width;
var height;
var playerOneScore;
var playerTwoScore;
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
	playerOneScore = 0;
	playerTwoScore = 0;
}

Game.prototype.gameLoop = function () {
	
	game.draw();
	game.update();
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
		if (paddle.y > 0)
		paddle.movePaddle(-5);
	}
	if(KeyController.isKeyDown(Key.S)){
		if (paddle.y + paddle.height < 450)
			paddle.movePaddle(5);
	}
	if(KeyController.isKeyDown(Key.UP)){
		if (playerTwoPaddle.y > 0)
		playerTwoPaddle.movePaddle(-5);
	}
	if(KeyController.isKeyDown(Key.DOWN)){
		if (playerTwoPaddle.y + playerTwoPaddle.height < 450)
			playerTwoPaddle.movePaddle(5);
	}

	if ((ball.x -10 <= paddle.x+paddle.width) && ((ball.y -10 < paddle.y + paddle.height) && (ball.y + 10 > paddle.y))) {
		ball.rebound();
	}
	else if ((ball.x + 10 >= playerTwoPaddle.x) && ((ball.y -10 < playerTwoPaddle.y + playerTwoPaddle.height) && (ball.y + 10 > playerTwoPaddle.y))){
		ball.rebound();
	}

	if (ball.x >= width){
		playerOneScore++;
		ball.reset(225, 225, 1, 1 );
	}

	if  (ball.x <= 0){
		playerTwoScore++;
		ball.reset(225, 225, -1, -1 );
	}

	if ((playerOneScore == 10) || (playerTwoScore == 10)){
		playerOneScore = 0;
		playerTwoScore = 0;
	}


	//var score_text = "PlayerOne" + playerOneScore + "PlayerTwo" + playerTwoScore;
	ctx.fillStyle = "blue"
	ctx.font="15px Verdana";
	ctx.fillText("playerOne", 130, 35);
	ctx.fillText(playerOneScore, 165, 50);
	ctx.fillText("playerTwo",  245, 35);
	ctx.fillText(playerTwoScore,280, 50);

	ctx.fillText("a", ball.x -10, ball.y);
}