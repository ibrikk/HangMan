import React from 'react';
import { randomDcHero } from './dcSuperHeroes';

import step0 from './assets/0.jpg';
import step1 from './assets/1.jpg';
import step2 from './assets/2.jpg';
import step3 from './assets/3.jpg';
import step4 from './assets/4.jpg';
import step5 from './assets/5.jpg';
import step6 from './assets/6.jpg';

class HangmanDc extends React.Component {
	static defaultProps = {
		maxWrong: 6,
		images: [step0, step1, step2, step3, step4, step5, step6]
	};

	constructor(props) {
		super(props);
		this.state = { mistake: 0, guessed: new Set(), answer: randomDcHero() };
		this.handleGuess = this.handleGuess.bind(this);
	}

	guessedWord() {
		return this.state.answer.split('').map(bingo => (this.state.guessed.has(bingo) ? bingo : "_"));
	}

	handleGuess(event) {
		const letter = event.target.value;
		this.setState(state => ({
			guessed: state.guessed.add(letter),
			mistake: state.mistake + (state.answer.includes(letter) ? 0 : 1)
		}));
	}

	generateButtons() {
		return "abcdefghijklmnopqrstuvwxyz ".split('').map(letter => (
			<button
				key={letter}
				value={letter}
				onClick={this.handleGuess}
				disabled={this.state.guessed.has(letter)}
			>
				{letter}
			</button>
		));
	}

	resetButton = () => {
		this.setState({
			mistake: 0,
			guessed: new Set(),
			answer: randomDcHero()
		});
	};

	render() {
		const gameOver = this.state.mistake >= this.props.maxWrong;
		const altText = `${this.state.mistake}/${this.props.maxWrong} wrong guesses`;
		const isWinner = this.guessedWord().join("") === this.state.answer;
		let gameStat = this.generateButtons();
		if (isWinner) {
			gameStat = "YOU WON";
		}
		if (gameOver) {
			gameStat = "YOU LOST";
		}

		return (
			<div className='Hangman'>
				<nav className='navbar navbar-expand-lg'>
					<a className='navbar-brand text-light' href='/'>
					DC SUPERHEROES
					</a>
					<span className='d-xl-none d-lg-none text-primary'>
						Guessed wrong: {this.state.mistake}
					</span>
					<button
						className='navbar-toggler sr-only'
						type='button'
						data-toggle='collapse'
						data-target='#navbarText'
						aria-controls='navbarText'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarText'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item '></li>
							<li className='nav-item'></li>
							<li className='nav-item'></li>
						</ul>
						<span className='navbar-text text-primary'>Guessed wrong: {this.state.mistake}</span>
					</div>
				</nav>
				<p className='text-center'>
					<img src={this.props.images[this.state.mistake]} alt={altText} />
				</p>
				<p className='text-center text-light'>Who is this Superhero ?</p>
				<p className='Hangman-word text-center'>
					{!gameOver ? this.guessedWord() : this.state.answer}{' '}
				</p>

				<p className='text-center text-warning mt-4'>{gameStat}</p>

				<div>
					<p className='text-center'>
						<button className='Hangman-reset' onClick={this.resetButton}>
							Reset
						</button>
					</p>
				</div>
			</div>
		);
	}
}

export default HangmanDc;