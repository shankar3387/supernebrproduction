import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export class AdminLayout extends Component {
    render() {
        return (
            <div>
              <Switch>
                <AdminLayout restricted={false} path='/'></AdminLayout>
                
              </Switch>
            </div>
            
        );
    }
}

export default AdminLayout
