const DC_SUPERHEROES = [
	"batman",
	"superman",
	"wonder woman",
	"aqua man",
	"joker",
	"catwoman",
	"cyborg",
	"flash",
	"robin"
];

const randomDcHero = () => {
	return DC_SUPERHEROES[Math.floor(Math.random() * DC_SUPERHEROES.length)];
}

export { randomDcHero };