import { navLinks } from '../../utils/pages/navLinks';

import { signIn, useSession } from 'next-auth/react';

import UserActions from '../UserActions';

import Link from 'next/link';

const Header = () => {
	const { data: session } = useSession();

	return (
		<header className="header">
			<div className="header__container">
				<nav className="header__nav">
					<ul>
						{navLinks.map(({ title, link }) => (
							<Link key={`${title}-${link}`} href={link}>
								<li>{title}</li>
							</Link>
						))}
						{!session ? (
							<li
								onClick={() => {
									signIn();
								}}
							>
								Sign in
							</li>
						) : (
							<UserActions user={session.user} />
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
