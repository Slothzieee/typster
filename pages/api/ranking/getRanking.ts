import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../utils/api/clientPromise';

const getRankings = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const client = await clientPromise;
		const db = client.db('typster');

		const userData = await db
			.collection('scores')
			.find({})
			.sort({ score: -1 })
			.limit(10)
			.toArray();

		res.status(200).json({ userData });
	} catch (error) {
		console.error(error);

		res.status(400).json({ message: 'Could not retrive DB' });
	}
};

export default getRankings;
