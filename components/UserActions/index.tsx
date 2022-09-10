import { useState } from 'react';

import { signOut } from 'next-auth/react';

import User from '../../types/user';

interface Props {
	user: User;
}

const UserActions = ({ user }: Props) => {
	const [expand, setExpand] = useState<boolean>(false);

	const handleImageOnMouseIn = () => {
		setExpand(true);
	};

	const handleImageOnMouseOut = () => {
		setExpand(false);
	};

	return (
		<div
			onMouseEnter={handleImageOnMouseIn}
			onMouseLeave={handleImageOnMouseOut}
			className="user-actions"
		>
			<img height={44} width={44} alt={user.name} src={user.image} />

			{expand && (
				<div className="user-actions__menu">
					<p
						onClick={() => {
							signOut();
						}}
					>
						Sing out
					</p>
				</div>
			)}
		</div>
	);
};

export default UserActions;
