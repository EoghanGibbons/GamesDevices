var game;
function main()
{
	game= new Game();

	game.initCanvas();

	ctx.clearRect(0,0,canvas.width, canvas.height);

	game.initWorld();			

	//start game loop
	game.gameLoop();
	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(game.gameLoop, 16);
}
