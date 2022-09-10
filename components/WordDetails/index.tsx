import { Word, Meaning } from './models/word';

interface Props {
	word: Word;
}

const WordDetails = ({ word }: Props) => {
	return (
		<div className="word-details">
			<h1>{word.word}</h1>
			{word.meanings.map((meaning: Meaning) => (
				<div className="word-details__meaning" key={word.word}>
					<h2>Part of Speech: {meaning.partOfSpeech}</h2>
					<div className="word-details__meaning__definitions">
						{meaning.definitions.map((definition, i) => (
							<div className="word-details__meaning__definition" key={i}>
								<h3>Definition:</h3>
								<small>{definition.definition}</small>
								{definition.example && (
									<div>
										<h4>Example:</h4>
										<small>{definition.example}</small>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default WordDetails;
