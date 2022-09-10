import Link from 'next/link';

import { signIn, useSession, signOut } from 'next-auth/react';

import { NavLink } from '../../../utils/pages/navLinks';

interface Props {
	menu: NavLink[];
}

const DrawerMenu = ({ menu }: Props) => {
	const { data: session } = useSession();

	return (
		<div className="drawer-menu">
			<div className="drawer-menu__nav">
				{menu.map((voice: NavLink) => (
					<Link key={voice.title} href={voice.link}>
						{voice.title}
					</Link>
				))}
				{!session ? (
					<p
						onClick={() => {
							signIn();
						}}
					>
						Sign in
					</p>
				) : (
					<div className="drawer-menu__user-actions">
						<img
							height={44}
							width={44}
							alt={session.user.name}
							src={session.user.image}
						/>

						<p
							onClick={() => {
								signOut();
							}}
						>
							Sign out
						</p>
					</div>
				)}
			</div>
			<span>X</span>
		</div>
	);
};

export default DrawerMenu;
