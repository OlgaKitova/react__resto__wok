import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';


const App = () => {
    return (
        <div style={{backgroundColor: 'rgba(204,70,70,1)'}} className="app">
            <AppHeader total={50}/>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default App;