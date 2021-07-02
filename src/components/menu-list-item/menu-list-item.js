import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, category, url} = menuItem;
    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="wok"></img>
                <div className="menu__category">Категория: <span>{category}</span></div>
                <div className="menu__price">Цена: <span>{price} рублей</span></div>
                <button onClick={onAddToCart} className="menu__btn">В корзину</button>
            </li>
         
    )
}

export default MenuListItem;