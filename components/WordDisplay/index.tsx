import Letter from './Letter';

import checkValidity from '../../utils/pages/checkValidity';

interface Props {
	randomWord: string[];
	currentWord: string[];
}

const WordDisplay = ({ randomWord, currentWord }: Props) => {
	return (
		<div className="word-display">
			{randomWord.map((letter, i) => {
				const classes = checkValidity(currentWord, letter, i);

				return (
					<Letter key={`${letter}-${i}`} classNames={classes} letter={letter} />
				);
			})}
		</div>
	);
};

export default WordDisplay;
