import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeforeLoginHeader extends Component {
  render() {

    return (
      <header className="headerHome">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#"><img src="/img/logo.svg" alt="" title=""/> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                    <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="btn btn-style2 btn-secondary" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-style2 btn-secondary" to="/signup">Signup</Link>                                
                            </li>
                        </ul>
                </div>
            </nav>
            <div className="row no-gutters align-items-center">
                <div className="col-md-4">
                    <div className="imgBanner"><img src="/img/image6.png" alt="" title=""/></div>
                </div>
                <div className="col-md-4">
                    <div className="contentBanner">
                        <h2>TEST YOUR GK AND<br/> WIN <span>CASH</span> UPTO<br/>  <i className="fas fa-rupee-sign"></i> 25000 DAILY !</h2>
                        <p className="mb-0"><a href="#" className="btn btn-style2 btn-secondary">PLAY NOW</a> </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <ul className="listCategory">
                        <li>
                            <a href="#">
                                <img src="/img/category-img1.jpg" alt="" title=""/>
                                <span>Arts & Literature</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img2.jpg" alt="" title=""/>
                                <span>Health, Wellness & Lifestyle</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img4.jpg" alt="" title=""/>
                                <span>Music & Entertainment</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img1.jpg" alt="" title=""/>
                                <span>Arts & Literature</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img1.jpg" alt="" title=""/>
                                <span>Arts & Literature</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img2.jpg" alt="" title=""/>
                                <span>Health, Wellness & Lifestyle</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img4.jpg" alt="" title=""/>
                                <span>Music & Entertainment</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img1.jpg" alt="" title=""/>
                                <span>Arts & Literature</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/category-img9.jpg" alt="" title=""/>
                                <span>Geography</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img8.jpg" alt="" title=""/>
                                <span>History</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img7.jpg" alt="" title=""/>
                                <span>General Knowledge & Current Affairs</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img6.jpg" alt="" title=""/>
                                <span>Mythology & Astrology</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img9.jpg" alt="" title=""/>
                                <span>Geography</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img8.jpg" alt="" title=""/>
                                <span>History</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img7.jpg" alt="" title=""/>
                                <span>General Knowledge & Current Affairs</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img6.jpg" alt="" title=""/>
                                <span>Mythology & Astrology</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/img/category-img10.jpg" alt="" title=""/>
                                <span>Politics</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img3.jpg" alt="" title=""/>
                                <span>Science & Technology</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img5.jpg" alt="" title=""/>
                                <span>Sports</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img10.jpg" alt="" title=""/>
                                <span>Politics</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img3.jpg" alt="" title=""/>
                                <span>Science & Technology</span>
                            </a>
                            <a href="#">
                                <img src="/img/category-img5.jpg" alt="" title=""/>
                                <span>Sports</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="imgRightLogo">
            <img src="/img/big_logo.svg" alt="" title=""/>
        </div>
    </header>
    );
  }
}

export default BeforeLoginHeader;
