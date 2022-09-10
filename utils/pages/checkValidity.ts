const checkValidity = (
	currentWord: string[],
	letter: string,
	index: number
): string => {
	const isCorrectLetter =
		currentWord[index] === letter ? 'letter--correct' : 'letter--wrong';
	const isLetterStillUknown = !currentWord[index]
		? 'letter-neutral'
		: isCorrectLetter;

	return isLetterStillUknown;
};

export default checkValidity;
