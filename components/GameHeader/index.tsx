interface Props {
	points: number;
	time: number;
	round: number;
}

const GameHeader = ({ points, time, round }: Props) => {
	return (
		<div className="game-header">
			<div className="game-header__wrapper">
				<div className="game-header__stats">
					<p>
						<span>Time</span>: {time}
					</p>
				</div>
				<div className="game-header__stats">
					<p>
						<span>Points</span>: {points}
					</p>
				</div>
				<div className="game-header__stats">
					<p>
						<span>Round</span>: {round}
					</p>
				</div>
			</div>
		</div>
	);
};

export default GameHeader;
