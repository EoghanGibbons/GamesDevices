var velX;
var velY;
var ballRadius;

var Ball = function(pPosX, pPosY, pVelX, pVelY){
	this.x = pPosX; 
	this.y = pPosY; 
	velX = pVelX; 
	velY = pVelY;
	ballRadius = 10;
};

Ball.prototype.update = function(){
	
	if (this.x >= width - 12 || this.x <= 10){
		velX =  velX*-1;
	}
	if ((this.y >= height -12) || (this.y <= 10)){
		velY = velY*-1;
	}
	this.x += velX;
	this.y += velY;

	this.drawSelf();
}

Ball.prototype.drawSelf = function(){
	ctx.fillStyle = 'green';
	ctx.beginPath();
	ctx.arc(this.x,this.y,ballRadius,0,2*Math.PI);
	
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
}

Ball.prototype.incVelocity = function(newVelX, newVelY){
	velX += newVelX;
	velY += newVelY;
}

Ball.prototype.setPostion = function(newX, newY){
	this.x = newX;
	this.y = newY;
}

Ball.prototype.rebound = function(){
	velX =  velX*-1;

	if (velX > 0)
		this.incVelocity(1,0);
	else
		this.incVelocity(-1,0);
}