import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const dictionary = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { word } = req.query;

		const { data } = await axios.get(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
		);

		const [expectedWord] = data;

		res.status(200).json({
			meanings: expectedWord.meanings,
			word: expectedWord.word,
		});
	} catch (error) {
		console.error(error);

		res.status(404).json({ message: 'Could not find word' });
	}
};

export default dictionary;
