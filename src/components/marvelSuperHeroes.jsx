const MARVEL_SUPERHEROES = [
	"spider-man",
	"iron man",
	"thanos",
	"captain america",
	"deadpool",
	"hulk",
	"thor",
	"wolverine",
	"black panther",
	"ant-man",
	"groot",
	"loki"
];

const randomMarvelHero = () => {
	return MARVEL_SUPERHEROES[Math.floor(Math.random() * MARVEL_SUPERHEROES.length)];
}

export { randomMarvelHero };