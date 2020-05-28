import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AfterLoginHeader extends Component {
    
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout()
    {
        localStorage.clear();
        this.props.history.push('/Login')
    }

  render() {

    return (
      <header>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#"><img src="/img/logo.svg" alt="" title=""/> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Cash Balance</a>
                    </li>
                    <li className="nav-item addSpace">
                    <a className="nav-link" href="#">Winnings Balance:<strong>500</strong></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Wallet Balance: <strong>600</strong>
                        </a>
                        <div className="dropdown-menu dropdown-menuWallet dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <div className="row">
                                <div className="col-md-6"><a href="add_fund_to_wallet.html" className="btn btn-full">Add more funds</a></div>
                                <div className="col-md-6"><a href="withdrawal_from_wallet.html" className="btn btn-secondary btn-full">Withdraw</a></div>
                            </div>
                            <div className="boxDeposit">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h5>Cash Deposit</h5>
                                        <h3>180</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Winnings</h5>
                                        <h3>320</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center"><a href="transaction_history.html" className="textLink textYellow">View all transitions</a></div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="rowUser">
                               <div className="imgUser"><img src={localStorage.getItem('imageUrl')} alt="" title=""/></div>{localStorage.getItem('name')}
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-comman dropdown-menu-right">
                            <a href="#" className="nav-link">My Profile</a>
                            <a href="#" className="nav-link">Dashboard</a>
                            <button onClick={this.logout} className="nav-link">Logout</button>
                        </div>
                      </li>  
                </ul>
                </div>
            </nav>
        </div>
    </header>
    );
  }
}

export default AfterLoginHeader;
