import { useState } from 'react';
import Image from 'next/image';
import DrawerMenu from './DrawerMenu';

import { navLinks } from '../../utils/pages/navLinks';

import { default as MenuIcon } from '../../images/burger-menu.svg';

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleMenuActions = () => {
		return isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	return (
		<div className="mobile-header">
			{isOpen ? (
				<div onClick={handleMenuActions}>
					<DrawerMenu menu={navLinks} />
				</div>
			) : (
				<Image
					onClick={handleMenuActions}
					width={54}
					height={55}
					alt="menu"
					src={MenuIcon.src}
				/>
			)}
		</div>
	);
};

export default MobileHeader;
