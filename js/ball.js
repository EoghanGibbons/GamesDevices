var velX = 0;
var velY = 0;
var ballRadius = 10;

var Ball = function(pPosX, pPosY, pVelX, pVelY){
	this.x = pPosX; 
	this.y = pPosY; 
	velX = pVelX; 
	velY = pVelY;
	console.log("create ball called");
};

Ball.prototype.update = function(){
	this.drawSelf();
	this.x = this.x + velX;
	this.y = this.y + velY;
}

Ball.prototype.drawSelf = function(){
	ctx.fillStyle = 'green';
	ctx.beginPath();
	ctx.arc(this.x,this.y,ballRadius,0,2*Math.PI);
	
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
	console.log("draw ball called");
}