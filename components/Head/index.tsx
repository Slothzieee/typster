import NextHead from 'next/head';

interface Props {
	title: string;
}

const Head = ({ title }: Props) => {
	return (
		<NextHead>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content="A new fun way to learn" />
			<meta
				name="google-site-verification"
				content="IpEsJilWyGT2yvDSr_pcq95F5KGVuzkUcmPEAYdqmCk"
			/>
			<meta name="title" content={title} />
		</NextHead>
	);
};

export default Head;
