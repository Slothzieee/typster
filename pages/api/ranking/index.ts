import { NextApiRequest, NextApiResponse } from 'next';

import getRanking from './getRanking';
import updateRanking from './updateRanking';

import requestHandler from '../../../utils/api/requestHandler';

const ranking = async (req: NextApiRequest, res: NextApiResponse) => {
	return requestHandler({ req, res, GET: getRanking, POST: updateRanking });
};

export default ranking;
