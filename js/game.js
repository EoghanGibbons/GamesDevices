var width;
var height;
var megaman = new Image();
var megamanSlow = new Image();
var imgOneFrameCounter = 0;
var imgOneFrequency = 50;	//how often to change frame in miliseconds
var imgTwoFrequency = 200;	//how often to change frame in miliseconds
var imgTwoFrameCounter = 0;
var imgOneTimer = 0;
var imgTwoTimer = 0;
function Game (){
}

Game.prototype.initCanvas=function () {
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	width = canvas.getAttribute("width");
	height = canvas.getAttribute("height");

}

Game.prototype.initWorld = function(){
}

Game.prototype.draw =function (){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, width, height);
	ctx.drawImage(megaman, 100, 100);
	ctx.drawImage(megamanSlow, 150, 100);
}

Game.prototype.update = function(elsapsedTime){

	if (imgOneTimer > imgOneFrequency){
        imgOneTimer = 0;
        imgOneFrameCounter++;
        if (imgOneFrameCounter > 7) 
        	imgOneFrameCounter = 0;
    }
    else{
        imgOneTimer += elsapsedTime;
    }

    if (imgTwoTimer > imgTwoFrequency){
        imgTwoTimer = 0;
        imgTwoFrameCounter++;
        if (imgTwoFrameCounter > 7) 
        	imgTwoFrameCounter = 0;
    } 
    else{
        imgTwoTimer += elsapsedTime;
    }
	
	megaman.src = 'assets/' + imgOneFrameCounter.toString() + '.png';
	megamanSlow.src = 'assets/' + imgTwoFrameCounter.toString() + '.png';
}