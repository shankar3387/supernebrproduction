import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/header';
import SellerLayoutRouter from './SellerLayoutRouter'
export default class SellerLayout extends Component {
    render() {
        return (
            <div>
              <Header />
              <hr />
              <Switch>
                <SellerLayoutRouter  exact />
              </Switch>
            </div>
            
        );
    }
}
