import clsx from 'clsx';

interface Props {
	name: string;
	score: number;
	index: number;
}

const RankCard = ({ name, score, index }: Props) => {
	const isFirst = index === 0;
	const isSecond = index === 1;
	const isThird = index === 2;

	const classes = clsx('rank-card', {
		golden: isFirst,
		silver: isSecond,
		bronze: isThird,
	});

	return (
		<div className={`${classes}`}>
			<p>{index + 1}º</p>
			<h3>{name}</h3>
			<p>{score}</p>
		</div>
	);
};
export default RankCard;
