interface Props {
	letter: string;
	classNames: string;
}

const Letter = ({ letter, classNames }: Props) => {
	return <p className={`letter ${classNames}`}>{letter}</p>;
};

export default Letter;
