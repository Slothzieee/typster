import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log(process.env.GOOGLE_ID);

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID || '',
			clientSecret: process.env.GOOGLE_SECRET || '',
			authorization: {
				params: {
					prompt: 'consent',
					response_type: 'code',
				},
			},
		}),
	],
};
export default NextAuth(authOptions);
