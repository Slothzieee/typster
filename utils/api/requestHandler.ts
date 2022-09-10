import { NextApiRequest, NextApiResponse } from 'next';

interface Args {
	req: NextApiRequest;
	res: NextApiResponse;
	GET?: any;
	POST?: any; // probably should be a function that returns a promise (req: NextApiRequest, res: NextApiResponse) => Promise<OBJ>;
}

const requestHandler = ({ req, res, GET, POST }: Args) => {
	const { method } = req;

	switch (method) {
		case 'POST':
			POST(req, res);
			break;
		case 'GET':
			GET(req, res);
			break;

		default:
			throw new Error('Unrecognised method.');
	}
};

export default requestHandler;
