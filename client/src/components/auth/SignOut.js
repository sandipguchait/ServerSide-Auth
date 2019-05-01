import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/index';


class SignOut extends Component {

    componentDidMount() {
        this.props.signOut();
    };
    
    render() {
        return (
            <div> Sorry To See You Go </div>
        );
    }
}

export default connect(null, {signOut})(SignOut);