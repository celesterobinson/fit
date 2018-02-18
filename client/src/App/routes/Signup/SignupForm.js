import React, { Component } from 'react';
import { connect } from "react-redux";
import { signup } from "../../redux/auth";
import "../../styles/Signup.css";

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }

    render() {
        let { username, password } = this.state.inputs;
        return (
            <div className="signup-form-wrapper">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <h1>Sign Up</h1>
                    <input onChange={this.handleChange} name="username" value={username} placeholder="Username" type="text" />
                    <input onChange={this.handleChange} name="password" value={password} placeholder="password" type="password" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { signup })(SignupForm);
