import React, { Component } from 'react';

class AfterLoginFooter extends Component {
  render() {

    return (
        <footer>
          <div className="container">
              <ul className="listSocialIcons">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
              <div className="row align-items-center">
                  <div className="col-md-6 pr-5">
                      <div className="row align-items-center rowAbout"> 
                          <div className="col-md-4">
                              <img src="/img/logo.svg" alt="" title=""/>
                          </div>  
                          <div className="col-md-8">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="row">
                          <div className="col-md-6">
                              <h4>Quick Links</h4>
                              <ul className="footerMenu">
                                  <li><a href="faq.html">FAQ</a> </li>
                                  <li><a href="support_ticket.html">Support</a> </li>
                                  <li><a href="#">Legal terms </a> </li>
                                  <li><a href="about_us.html">About us </a> </li>
                                  <li><a href="how_to_play.html">How to play </a> </li>
                                  <li><a href="terms_conditions.html">Terms & Conditions</a> </li>
                                  <li><a href="privacy_policy.html">Privacy policy </a> </li>
                              </ul>
                          </div>
                          <div className="col-md-6">
                              <h4>Contact</h4>
                              <ul className="listContact">
                                  <li><i className="fas fa-phone"></i> <a href="#"> 000-000-000</a></li>
                                  <li><i className="far fa-envelope-open"></i> <a href="#">info@email.com</a></li>
                                  <li><i className="fas fa-map-marker-alt"></i><a href="#">12/12 Delhi, india</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="boxCopyright">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          © Copyright 2020, All rights reserved by Indian Quiz League
                      </div>
                      <div className="col-md-6 text-md-right">
                          Design with <i className="fas fa-heart"></i> by <a href="https://alfyi.com/" target="_blank">alfyi</a>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
}


export default AfterLoginFooter;
