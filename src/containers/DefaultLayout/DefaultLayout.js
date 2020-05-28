import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';


import routes from '../../routes';

const BeforeLoginFooter = React.lazy(() => import('./BeforeLoginFooter'));
const BeforeLoginHeader = React.lazy(() => import('./BeforeLoginHeader'));
const AfterLoginHeader = React.lazy(() => import('./AfterLoginHeader'));
const AfterLoginFooter = React.lazy(() => import('./AfterLoginFooter'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        {localStorage.getItem('isLoggedIn') ? <AfterLoginHeader /> : <BeforeLoginHeader/> }
        
        
           
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/Home" />
                </Switch>
              
          <BeforeLoginFooter />
        
      </div>
    );
  }
}

export default DefaultLayout;
