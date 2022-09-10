import randomWords from "random-words";

const gerRandomWords = () => {
	const [word] = randomWords(1);
	const splittedWord = word.split("");

	return splittedWord;
};

export default gerRandomWords;
