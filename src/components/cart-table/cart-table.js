import React from 'react';
import { connect } from 'react-redux';
import { delleteToCart } from '../../actions';
import WithRestoService from '../hoc';
import './cart-table.scss';


    let bool = false;

const CartTable = ({items, delleteToCart, RestoService}) => {

    const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            countPiece: item.countPiece,
        }
    });
    return newOrder;
}

    if(items.length === 0 && !bool){
        return (
                <div className="cart__title"> Ваша корзина пуста</div>)
    } else if(items.length === 0 && bool) {
        return (
            <div className="cart__title"> Ваш заказ оформлен</div>
        )
    }

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">

                {
                    items.map(item => {
                        const {title, price, url, id, countPiece, totalCount} = item;
                        return (
                <div key={id} className="cart__item">
                    <img src={url} className="cart__item-img" alt={title}></img>
                    <div className="cart__item-title">{title}</div>
                    <div className="cart__item-price">{price} рублей</div>
                    <div className="cart__item-count">{countPiece} шт.</div>
                    <div className="cart__item-count">{totalCount} руб</div>
                    <div onClick={() => delleteToCart(id)} className="cart__close">&times;</div>
                </div>)
                    })

                }

            </div>
            <button  className = "order" onClick={() => {
                bool = true;
                RestoService.setOrder(generateOrder(items));
                items.map(item => delleteToCart(item.id));
                setTimeout(() => {
                    return bool = !bool
                }, 2000)}
            }>Оформить заказ</button>
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        items: state.items,
    }
}

const mapDispatchToProps = {
 delleteToCart
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));