import Head from '../Head';
import Header from '../Header';

interface Props {
	children: React.ReactNode;
	title: string;
	classNames?: string;
}

const Page = ({ children, title, classNames = '' }: Props) => {
	return (
		<>
			<Head title={title} />
			<Header />
			<main className={`page ${classNames}`}>{children}</main>
		</>
	);
};

export default Page;
