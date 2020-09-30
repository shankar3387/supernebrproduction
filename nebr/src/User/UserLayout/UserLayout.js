import React, { Component } from 'react'
import {withRouter, Switch } from 'react-router-dom';
import Header from './header/header';
import UserLayoutRouter from './UserLayoutRouter'
import Home from './Components/Home/Home'
import Footer from './Components/footer/footer'
import ProductDetails from './Components/Fashion/ProductDetails/ProductDetails'
import Login from './Components/Authentication/Login/Login'
import Register from './Components/Authentication/Register/Register';
import CartProcess from './Components/Cart/CartProcess';
import CreateBlogs from './Components/BlogBoard/CreateBlogs';
import CreatePolls from './Components/Polls/CreatePolls';
import SellerRegistration from './Components/SellerRegistration/SellerRegistration';
 class UserLayout extends Component {
    render() {
        return (
            <div>
              <Header />
              <Switch>
              <UserLayoutRouter exact restricted={false} path='/' component={Home}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/login' component={Login}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/register' component={Register}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/cartProcess' component={CartProcess}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/createBlogs' component={CreateBlogs}></UserLayoutRouter>
              <UserLayoutRouter exact restricted={false} path='/productDetails' component={ProductDetails}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/createPolls' component={CreatePolls}></UserLayoutRouter>
              <UserLayoutRouter restricted={false} path='/seller_account' component={SellerRegistration}></UserLayoutRouter>
             
              
              </Switch>
              <Footer />
            </div>
            
        );
    }
}

export default withRouter(UserLayout);
