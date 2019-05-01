import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

    renderLinks () {
        if(this.props.authenticated) {
          return (
              <div>
                <Link to="/signout">Sign Out</Link>
                <Link to="/feature">Feature Page</Link>
              </div>
          )
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            )
        }
    }

    render() {
        return (
           <React.Fragment>
                <Link to="/">Redux Auth</Link>
               {this.renderLinks()}
           </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return  {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);