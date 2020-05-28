import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    
    responseGoogle(response){
      // console.log(response);
      if(!response.error)
      {
        console.log("login Sucess");
        var obj = response.profileObj;
        localStorage.setItem('email', obj.email);
        localStorage.setItem('name', obj.name);
        localStorage.setItem('imageUrl', obj.imageUrl);
        localStorage.setItem('googleId', obj.googleId);
        localStorage.setItem('isLoggedIn', true);
        this.props.history.push('/Home')

      }
     
    }

  render() {
    var clientId="954790367319-st8ofvv4d29glm7j1qn3j2cmognu3g7i.apps.googleusercontent.com";

     return (
       <div>
         <header>
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to="/"><img src="/img/logo.svg" alt="" title=""/> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn" to="/signup">Signup</Link>                                
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            </header>
            <article>
                <div className="logoImage">
                    <img src="/img/big_logo.svg" alt="" title=""/>
                </div>
                <div className="mainBox">
                    <h2 className="text-center">Sign up</h2>
                    <h6 className="subHeading">Test your General Knowledge<br/> and Earn Real Money</h6>
                    <div className="innerMainBox">
                        <form>
                            <div className="input-group mb-4">
                                <span className="boxIcon"><i className="far fa-envelope-open"></i></span>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-4">
                                <span className="boxIcon"><i className="fas fa-unlock-alt"></i></span>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="boxIcon"><i className="fas fa-unlock-alt"></i></span>
                                <input type="password" className="form-control" placeholder="Repeat Password"/>
                            </div>
                           
                            <button type="button" data-toggle="modal" data-target="#modelInfo" className="btn btn-full mb-2">Sign up</button>
                            <p className="text-right"><a href="sign_in.html" className="textLink">login</a></p>
                            <p className="text-center mb-1">or login via your social media account</p>
                            <ul className="socialLinks">
                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><GoogleLogin render={renderProps => (
             <a href="#"  onClick={renderProps.onClick} disabled={renderProps.disabled} className="googlePlus"><i><img src="/img/logo-google.svg" alt="" title=""/> </i></a>
            )} onSuccess={this.responseGoogle} onFailure={this.responseGoogle} clientId={clientId} /></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </article>
          <footer>
            <div className="boxCopyright">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <a href="#" className="imgLogo"><img src="/img/logo.svg" alt="" title=""/></a>   © Copyright 2020, All rights reserved by Indian Quiz League
                        </div>
                        <div className="col-md-6 text-md-right">
                            Design with <i className="fas fa-heart"></i> by <a href="https://alfyi.com/" target="_blank">alfyi</a>
                        </div>
                    </div>
                </div>
            </div>    
        </footer>
       </div>
    );
  }
}

export default Signup;
