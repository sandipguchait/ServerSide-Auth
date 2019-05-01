import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/index';

class SignIn extends Component {

    state= {
        email: '',
        password: '',
        errors: [],
        loading: false
    };

    //Redirect User on submit if fetch a token 
    componentWillReceiveProps(nextProps) {
        if(nextProps.token){
            this.props.history.push('/feature')
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    isformvalid = () => {
        let errors = [];
        let error;
    
        if(this.isFormEmpty(this.state)){
          //throw error
          error = { message: 'Fill in all fields' };
          this.setState({ errors: errors.concat(error) });
          return false;
    
        } else if (!this.isPasswordValid(this.state)){
          //throw error
          error = { message: 'Password should have 6 character minimum'};
          this.setState({ errors: errors.concat(error) });
          return false;
    
        } else {
          //form valid 
          return true;
        }
      };

      // Checking If form is empty
        isFormEmpty = ({ email, password }) => {
            return !email.length || !password.length ;
        };

        //Checking if the password is valid
        isPasswordValid = ({ password }) => {
            if( password.length < 6) {
            return false;
            } else {
            return true;
            }
        };

        //DISPLAY THE ERRORS
        displayErrors = errors => {
            return errors.map(( error , i) => (
            <p key={i}>{error.message}</p>
            ))
        };

        handleSubmit = (event) => {
            event.preventDefault();
            if(this.isformvalid()) {
                this.setState({ errors: [], loading: true });
                this.props.signIn(this.state)
            }

        };


    render() {
        return (
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="email"
                    name="email"
                    autoComplete="false"
                    value={this.state.email}
                    placeholder="Enter your email"
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    autoComplete="false"
                    value={this.state.password}
                    placeholder="Enter your Password"
                    onChange={this.handleChange}
                 />
                 <button type="submit">SignIn</button>
            </form>
            {this.state.errors.length > 0 && (
                <div>
                  {this.displayErrors(this.state.errors)}
                </div>
              )}
              <div>{this.props.error}</div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        token: state.auth.authenticated
    }
}

export default connect(mapStateToProps, { signIn })(SignIn);