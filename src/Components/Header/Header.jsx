import React from 'react';
import './Header.css';
import {
  Search as SearchIcon,
  LocalOfferOutlined as OfferIcon,
  HelpOutlineOutlined as HelpIcon,
  PersonOutlineOutlined as PersonIcon,
  AddShoppingCartOutlined as CartIcon,
} from '@mui/icons-material';

const HeaderComponent = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="" />
          </div>
          <ul>
            <li>
              <div className="icon-text-container">
                <SearchIcon />
                <span>Search</span>
              </div>
            </li>
            <li>
              <div className="icon-text-container">
                <OfferIcon />
                <span>Offer</span>
              </div>
            </li>
            <li>
              <div className="icon-text-container">
                <HelpIcon />
                <span>Help</span>
              </div>
            </li>
            <li>
              <div className="icon-text-container">
                <PersonIcon />
                <span>Anil Maur...</span>
              </div>
            </li>
            <li>
              <div className="icon-text-container">
                <CartIcon />
                <span>Cart</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
