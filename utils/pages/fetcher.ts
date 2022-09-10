import axios from 'axios';

const fetcher = async (uri: string) => {
	try {
		const response = await axios.get(uri);

		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default fetcher;
