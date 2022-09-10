import User from '../../types/user';

interface Props {
	user: User;
	score: number;
	rounds: number;
	guessedWords: string[];
	setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameReport = ({
	score,
	rounds,
	guessedWords,
	user,
	setGameOver,
}: Props) => {
	return (
		<div className="game-report">
			<div className="game-report__layout" />
			<div className="game-report__wrapper">
				<div className="game-report__info">
					<h2>{user.name}`s results: </h2>

					<h3>Score: {score}</h3>
					<h3>Guessed Words: {rounds}</h3>
				</div>
				<div className="game-report__guessed">
					<h3>List of guessed words:</h3>
					<small>Click on any word to learn what it means!</small>
					<ul>
						{guessedWords.map((word) => (
							<a
								key={word}
								rel="noreferrer"
								target="_blank"
								href={`/dictionary/${word}`}
							>
								<li key={word}>{word}</li>
							</a>
						))}
					</ul>
				</div>

				<button onClick={() => setGameOver(false)}>Restart</button>
			</div>
		</div>
	);
};

export default GameReport;
