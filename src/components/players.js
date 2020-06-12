var BEST_FOOTBALL_PLAYERS = [
	"messi",
	"monaldo",
	"neymar",
	"koulibaly",
	"mane",
	"hazard",
	"pogba",
	"mbappe",
	"de bruyne",
	"van dijk",
	"kante"
];

function randomPlayer() {
	return BEST_FOOTBALL_PLAYERS[Math.floor(Math.random() * BEST_FOOTBALL_PLAYERS.length)];
}

export { randomPlayer };