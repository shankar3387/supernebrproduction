import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const AdminLayoutRouter = ({component:Component, ...rest}) =>{
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('admin') ?
                <Component {...props} />
                :  <Redirect to="/login" />
        )} />
    );
}

export default AdminLayoutRouter;