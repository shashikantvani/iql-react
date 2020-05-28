import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Login'));
const Register = React.lazy(() => import('./views/Signup'));
// const Page404 = React.lazy(() => import('./views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./views/Pages/Page500'));
//               <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
//               <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {!localStorage.getItem('isLoggedIn') && (
                <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              )}

              {!localStorage.getItem('isLoggedIn') && (
                <Route exact path="/signup" name="Register Page" render={props => <Register {...props}/>} />
              )}
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
