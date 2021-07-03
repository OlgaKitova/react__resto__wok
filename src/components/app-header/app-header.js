import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to ={'/'} className = "header__link">Меню</Link>
            <Link to = "/cart" className = "header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Заказ: {total} рублей
            </Link>
        </header>
    )
};

export default AppHeader;