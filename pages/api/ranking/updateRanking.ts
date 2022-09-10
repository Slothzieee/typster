import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../utils/api/clientPromise';

const updateRanking = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { body } = req;

		console.log(body);
		const { username, score } = body;
		const client = await clientPromise;
		const db = client.db('typster');

		await db.collection('scores').insertOne({ username, score });

		res.status(200).json({ message: 'Ranking updated' });
	} catch (error) {
		console.error(error);

		res.status(400).json({ message: 'Could not retrive DB' });
	}
};

export default updateRanking;
