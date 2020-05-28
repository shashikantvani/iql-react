import React, { Component, lazy, Suspense } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      
    };
  }

  render() {

    return (
        <article>
          <div className="boxInfo">
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <div className="contentInfo">
                              <h3><i className="fas fa-rupee-sign"></i> 10,000 +</h3>
                              <h5>Daily Winning<br/> Amount</h5>
                          </div>
                      </div>
                      <div className="col">
                          <div className="contentInfo">
                              <h3>100%</h3>
                              <h5>Legal and<br/> Secure</h5>
                          </div>
                      </div>
                      <div className="col">
                          <div className="contentInfo">
                              <h3>960</h3>
                              <h5>Contests <br/> Daily</h5>
                          </div>
                      </div>
                      <div className="col">
                          <div className="contentInfo">
                              <h3>60</h3>
                              <h5>Seconds<br/> Per Contest</h5>
                          </div>
                      </div>
                      <div className="col">
                          <div className="contentInfo">
                              <h3>10x</h3>
                              <h5>Multiply your winnings<br/> upto 10x times</h5>
                          </div>
                      </div>
                  </div>
              </div>    
          </div>
          <section className="sectionComman pb-0 sectionTable">
              <div className="container">
                  <h2 className="heading-center">
                      <span>IQL</span>
                      Leaderboard
                  </h2>
                  <div className="table-responsive">
                      <table className="table mb-0 text-center">
                          <thead className="thead-dark">
                          <tr>
                              <th></th>
                              <th>Qs Category</th>
                              <th>Date & Time</th>
                              <th>Total Players</th>
                              <th>Total Amount</th>
                              <th>Biggest Gainer</th>
                              <th>Biggest Loser</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                              <td>01</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>15</td>
                              <td>800</td>
                              <td className="textGreen">7</td>
                              <td className="textRed">4</td>
                          </tr>
                          <tr>
                              <td>02</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>18</td>
                              <td>900</td>
                              <td className="textGreen">4</td>
                              <td className="textRed">15</td>
                          </tr>
                          <tr>
                              <td>03</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>20</td>
                              <td>700</td>
                              <td className="textGreen">9</td>
                              <td className="textRed">5</td>
                          </tr>
                          <tr>
                              <td>04</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>25</td>
                              <td>1500</td>
                              <td className="textGreen">7</td>
                              <td className="textRed">8</td>
                          </tr>
                          <tr>
                              <td>05</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>13</td>
                              <td>1000</td>
                              <td className="textGreen">5</td>
                              <td className="textRed">15</td>
                          </tr>
                          <tr>
                              <td>06</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>15</td>
                              <td>800</td>
                              <td className="textGreen">7</td>
                              <td className="textRed">4</td>
                          </tr>
                          <tr>
                              <td>07</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>18</td>
                              <td>900</td>
                              <td className="textGreen">4</td>
                              <td className="textRed">15</td>
                          </tr>
                          <tr>
                              <td>08</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>20</td>
                              <td>700</td>
                              <td className="textGreen">9</td>
                              <td className="textRed">5</td>
                          </tr>
                          <tr>
                              <td>09</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>25</td>
                              <td>1500</td>
                              <td className="textGreen">7</td>
                              <td className="textRed">8</td>
                          </tr>
                          <tr>
                              <td>10</td>
                              <td>History</td>
                              <td>12-15-2020 | 12:50</td>
                              <td>13</td>
                              <td>1000</td>
                              <td className="textGreen">5</td>
                              <td className="textRed">15</td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
              </div>    
          </section>    
          <section className="sectionComman sectionPlay">
              <div className="container">
                  <h2 className="heading-center">
                      <span>IQL</span>
                      How to Play
                  </h2>
                  <div className="row rowPlayTabs">
                      <div className="col-md-4">
                        <div className="nav flex-column nav-pills">
                          <a className="nav-link active"  data-toggle="pill" href="#signup" role="tab"><span className="iconBox iconsignup"></span> Sign up</a>
                          <a className="nav-link" data-toggle="pill" href="#addCash" role="tab" ><span className="iconBox iconaddcash"></span> Add Cash (optional)</a>
                          <a className="nav-link" data-toggle="pill" href="#viewQuestionCategory" role="tab" ><span className="iconBox iconCategory"></span> View Question Category</a>
                          <a className="nav-link" data-toggle="pill" href="#playforfun" role="tab" ><span className="iconBox iconPlay"></span> Play for fun/Play for money</a>
                          <a className="nav-link" data-toggle="pill" href="#answerQuestion" role="tab" ><span className="iconBox iconAnswer"></span> Answer Question</a>
                          <a className="nav-link" data-toggle="pill" href="#multiplyyourwinnings" role="tab" ><span className="iconBox iconMultiply"></span> Multiply your winnings</a>
                          <a className="nav-link" data-toggle="pill" href="#completeyourKYC" role="tab" ><span className="iconBox iconKYC"></span> Complete your KYC</a>
                          <a className="nav-link" data-toggle="pill" href="#instantwithdrawal" role="tab" ><span className="iconBox iconwithdrawal"></span> Instant withdrawal</a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="tab-content">
                          <div className="tab-pane fade show active" id="signup" role="tabpanel">
                              <div className="embed-responsive embed-responsive-16by9">
                                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                </div>
                          </div>
                          <div className="tab-pane fade" id="addCash" role="tabpanel">3</div>
                          <div className="tab-pane fade" id="viewQuestionCategory" role="tabpanel">4</div>
                          <div className="tab-pane fade" id="playforfun" role="tabpanel">5</div>
                          <div className="tab-pane fade" id="answerQuestion" role="tabpanel">5</div>
                          <div className="tab-pane fade" id="multiplyyourwinnings" role="tabpanel">5</div>
                          <div className="tab-pane fade" id="completeyourKYC" role="tabpanel">5</div>
                          <div className="tab-pane fade" id="instantwithdrawal" role="tabpanel">5</div>
                        </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="sectionComman pt-0 sectionabout">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="img_about">
                              <img src="/img/img-about4.png" alt="" title=""/>
                          </div>
                      </div>
                      <div className="col-md-6 contentAbout">
                          <h2 className="heading-center text-left mb-2"><span>IQL</span> About us</h2>
                          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                          <p className="mb-0"><a href="about_us.html" className="btn btn-style2 btn">Read more</a></p>    
                      </div>
                  </div>
              </div>
          </section>
          <section className="sectionComman pt-0 sectionPayment">
              <div className="container">
                  <h2 className="heading-center">
                      <span>IQL</span>
                      Payment & Media Partners
                  </h2>
                  <div className="row rowPayment">
                      <div className="col">
                          <div className="boxLogo">
                              <img src="/img/logo_razorpay.png" className="imgrazorpay" alt="" title=""/>
                          </div>
                      </div>
                      <div className="col">
                          <div className="boxLogo">
                              <img src="/img/logo_paytm_logo.png" alt="" title=""/>
                          </div>
                      </div>
                      <div className="col">
                          <div className="boxLogo">
                              <img src="/img/logo_upi.png" alt="" title=""/>
                          </div>
                      </div>
                      <div className="col">
                          <div className="boxLogo">
                              <img src="/img/logo_phonePe.png" alt="" title=""/>
                          </div>
                      </div>
                      <div className="col">
                          <div className="boxLogo">
                              <img src="/img/logo_mobiKwik.png" alt="" title=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </section> 
          <section className="sectionComman pt-0 sectionFaq">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-md-6">
                          <div className="boxFAQ">
                              <div className="accordion" id="accordionExample">
                                  <div className="card">
                                    <div className="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          Lorem Ipsum is simply dummy
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                      <div className="card-body">
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the,
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          Lorem Ipsum is simply dummy
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                      <div className="card-body">
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the,
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-header collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          Lorem Ipsum is simply dummy
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                      <div className="card-body">
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the,
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                      <div className="card-header collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            Lorem Ipsum is simply dummy
                                      </div>
                                      <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div className="card-body">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the,
                                        </div>
                                      </div>
                                    </div>
                                </div>
                          </div>
                      </div>
                      <div className="col-md-6 contentAbout">
                          <h2 className="heading-center text-left mb-2"><span>IQL</span> Frequently Asked Questions</h2>
                          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      </div>
                  </div>
              </div>
          </section>      
          <section className="sectionComman pt-0 sectionReviews">
              <div className="container">
                  <h2 className="heading-center"><span>IQL</span> Reviews</h2>
                  <div className="sliderReviews">
                      <div>
                          <div className="contentReview">
                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p> 
                             <div className="reviewClientImage">
                                  <div className="reviewImage"><img src="/img/img-client5.png" alt="" title=""/></div>
                                  <h4>Ray Cooper</h4>
                                  <h6>Driver</h6>
                             </div>
                          </div>
                      </div>
                      <div>
                          <div className="contentReview">
                             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p> 
                             <div className="reviewClientImage">
                                  <div className="reviewImage"><img src="/img/img-client5.png" alt="" title=""/></div>
                                  <h4>Ray Cooper</h4>
                                  <h6>Driver</h6>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>                 
      </article>
    );
  }
}

export default Dashboard;
