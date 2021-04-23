import profile from './images/profile.png';
import bell from './images/bell.png';
import home from './images/home.png';
import activity from  './images/activity.png';
import market from './images/market.png';
import earn from './images/earn.png';
import wallet from './images/wallet.png';
import React from 'react'



import './Homepage.css';

import {Link} from 'react-router-dom';

class Homepage extends React.Component {
    constructor(){
      super();

      this.state = {
        opacity: true
      };
    }
    
    changeOpacity(){
      this.setState({opacity: !this.state.opacity})
    }
    render(){
      let opt_class = this.state.opacity ? "noOpacity" : "yesOpacity";
    return ( 
        <div className="body">
        <div className="wrapper">
          <div className="nav">
          <div className="logo">
            LOGO
          </div>
          <div className="notifs">
            <img src={profile} alt="profile" className="img" />
            <img src={bell} alt="notification" className="img" />
          </div>
        </div>

            <div className="box">
          <div className="left">
            <p>WALLET BALANCE</p>
            <p>TOKEN BALANCE:</p>
            <p>NAIRA BALANCE</p>
          </div>
        </div>

        <div className="currency">
          <div className="select">
            <p>select currency:</p>
          </div>
          <div className="input">
            <p>TOKEN</p>
            <div>
              <input type="text" name="currency" placeholder="0.00000001" />
            </div>
          </div>
          <div className="btn">
            <button>send</button>
            <button>receive</button>
          </div>
        </div>

        <div className="activity">
          <div className="activity2">
            <h4>recent activity</h4>
          </div>
          <div className="activity3">
          <div className="activity1">
            <p>Date</p>
            <p>Description</p>
            <p>Amount</p>
          </div>
          <div className="activity1">
            <p>1/1/21</p>
            <p>Sent</p>
            <p>N100.00</p>
          </div>
          <div className="activity1">
            <p>2/2/21</p>
            <p>Received</p>
            <p>N200.00</p>
          </div>
          <div className="activity1">
            <p>3/3/21</p>
            <p>Sent</p>
            <p>N300.00</p>
          </div>
          </div>
        </div>

        <div className="icons">
          <div>
            <Link to="/" className="links home">
              <img src={home} alt="home" id="icon-img"  />
              <p>Home</p>
            </Link>
          </div>

          <div>
            <Link to="/activity" className="links">
              <img src={activity} alt="activity" id="icon-img" className={opt_class} onClick={this.changeOpacity.bind(this)}  />
              <p>Activity</p>
            </Link>
          </div>

          <div>
            <Link to="/wallet" className="links">
              <img src={wallet} alt="wallet"id="icon-img" className={opt_class} onClick={this.changeOpacity.bind(this)}/>
              <p>Wallet</p>
            </Link>
          </div>

          <div>
            <Link to="/market" className="links">
              <img src={market} alt="market" id="icon-img" className={opt_class}  onClick={this.changeOpacity.bind(this)}/>
              <p>Market</p> 
            </Link>
          </div>

          <div>
            <Link to="/earn" className="links">
              <img src={earn} alt="earn" id="icon-img" className={opt_class}  onClick={this.changeOpacity.bind(this)}/>
              <p>Earn</p>
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
}
};

export default Homepage;
