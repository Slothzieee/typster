import Head from '../Head';
import Header from '../Header';
import MobileHeader from '../MobileHeader';

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
			<MobileHeader />
			<main className={`page ${classNames}`}>{children}</main>
		</>
	);
};

export default Page;
