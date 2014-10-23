var Paddle = function(pPosX, pPosY){
	this.x = pPosX;
	this.y = pPosY;

	this.height = 75;
	this.width = 20;
};

Paddle.prototype.update = function(){
	

	this.drawSelf();
}

Paddle.prototype.drawSelf = function(){
	ctx.fillStyle = '#00FFFF';

	ctx.fillRect(this.x, this.y, this.width, this.height);
	
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#00008B';
	ctx.stroke();
}

Paddle.prototype.movePaddle = function(incY){
	this.y += incY;
}