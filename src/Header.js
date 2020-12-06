import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
	const [{ basket }, dispatch] = useStateValue();

	return (

		<div className="header">
			<Link to="/">
				<img 
					src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
					className="header_logo" 
					alt="logo" 
				/>
			</Link>


			<div className='header_search'>
				<input 
					className='header_searchInput' 
					type='text' 
				/>
				<SearchIcon 
					className="header__searchIcon"
				/>
			</div>

			<div className='header_nav'>
				<div className='header_option'>
					<span className="header__optionLineOne">Hello Guest</span>
					<span className="header__optionLineTwo">Sign In</span>
				</div>

				<div className='header_option'>
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>

				<div className='header_option'>
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__basketOption">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
					</div>
				</Link>
				
			</div>
		</div>		
	)
}

export default Header;