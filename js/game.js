var ball;
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
	ball = new Ball(10, 10, 2, 2 ); 	
}

Game.prototype.gameLoop = function () {
	game.update();
	game.draw();
	ball.update();
}

Game.prototype.draw =function (){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width, height);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, width, height);
}

Game.prototype.update = function(){

}