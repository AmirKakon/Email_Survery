import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {
  renderContent()
  {
    switch(this.props.auth)
    {
      case null:
        return 'still deciding';
      case false:
        return 'im logged out';
      default:
        return 'im logged in';
    } 
  }

    render() 
    {
        return (
            <nav>
            <div className="nav-wrapper">
              <a className="left brand-logo">Email Survey</a>
              <ul className="right ">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        );
    }
}

function mapStateToProp({auth})
{
  return {auth};
}

export default connect(mapStateToProp)(Header);