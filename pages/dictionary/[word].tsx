import useSwr from 'swr';
import { useRouter } from 'next/router';

import Page from '../../components/Page';

import fetcher from '../../utils/pages/fetcher';
import WordDetails from '../../components/WordDetails';

const WordDictionary = () => {
	const router = useRouter();
	const { word } = router.query;

	const { data } = useSwr(`/api/dictionary/${word}`, fetcher);

	return (
		<Page title={`Dictionary ${word}`}>
			<div className="dictionary">{data && <WordDetails word={data} />}</div>
		</Page>
	);
};

export default WordDictionary;
