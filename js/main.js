var game;
function main()
{
	game= new Game();

	game.initCanvas();

	ctx.clearRect(0,0,canvas.width, canvas.height);

	game.initWorld();			

	var lastUpdate = Date.now();
	var myInterval = setInterval(tick, 0);

	function tick() {
    	var now = Date.now();
    	var dt = now - lastUpdate;
    	lastUpdate = now;

    	game.update(dt);
    	game.draw();
	}
}
