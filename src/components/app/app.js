import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { Route, Switch } from 'react-router-dom';


const App = () => {
    return (
        <div style={{backgroundColor: '#29a745', minHeight: '100vh', overflowX: 'hidden' }} className="app">
            <AppHeader/>
            <Switch>
                <Route path="/" component={MainPage} exact/>
                 <Route path="/cart" component={CartPage}/>
            </Switch>
            
        </div>
    )
}

export default App;