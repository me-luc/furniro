'use client';
import styled from 'styled-components';
import { Montserrat } from 'next/font/google';
import {
	FaRegUser as AccountIcon,
	FaRegHeart as FavoriteIcon,
} from 'react-icons/fa';
import {
	BiSearchAlt as SearchIcon,
	BiCartAlt as ShoppingCartIcon,
} from 'react-icons/bi';
import LogoIcon from '@/icons/LogoIcon';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: '700',
	variable: '--font-montserrat',
});

export default function MenuBar() {
	return (
		<StyledBar>
			<LogoBox>
				<LogoIcon />
				<LogoTitle className={montserrat.className}>Furniro</LogoTitle>
			</LogoBox>

			<MenuOptionsBox>
				<MenuOption>Home</MenuOption>
				<MenuOption>Shop</MenuOption>
				<MenuOption>About</MenuOption>
			</MenuOptionsBox>

			<IconBox>
				<button>
					<AccountIcon />
				</button>
				<button>
					<SearchIcon className='small-icon' />
				</button>
				<button>
					<FavoriteIcon />
				</button>
				<button>
					<ShoppingCartIcon className='small-icon' />
				</button>
			</IconBox>
		</StyledBar>
	);
}

const StyledBar = styled.menu`
	height: 100px;
	width: 100%;

	position: fixed;
	top: 0;
	left: 0;

	box-sizing: border-box;
	padding: 0 100px 0 55px;
	box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LogoBox = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
`;

const LogoTitle = styled.h1`
	font-size: 34px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	color: var(--text-color);
	margin-left: 5px;
`;

const MenuOptionsBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MenuOption = styled.button`
	color: var(--text-color);
	font-size: 16px;
	font-style: normal;

	background: none;
	border: none;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: 75px;
	}
`;

const IconBox = styled.div`
	display: flex;
	align-items: center;

	button {
		background: none;
		border: none;
	}
	button:not(:last-of-type) {
		margin-right: 45px;
	}

	svg {
		font-size: 24px;
		cursor: pointer;
	}

	svg.small-icon {
		font-size: 28px;
	}
`;
