import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
           <React.Fragment>
                <Link to="/">Redux Auth</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signput">Sign Out</Link>
                <Link to="/feature">Feature Page</Link>
           </React.Fragment>
        );
    }
}

export default Header;