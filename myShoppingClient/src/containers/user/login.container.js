// import axios from 'axios';
import React, { Component } from 'react';

// import { url } from '../../config.json';
import { setAuthToken } from '../../shared/utils/session-storage';
import { findErrorsLogin } from '../../shared/utils/components/userValidation/login-validation';
import Login from '../../components/user/login';
import { login } from '../../core/api/user';

export default class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            formData: {},
            errors: {}
        }
    }

    handleOnChange = (event) => {
        this.setState({
            formData: { ...this.state.formData, [event.target.name]: event.target.value }
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const newErrors = findErrorsLogin(this.state.formData);
        if (!Object.keys(newErrors).length) {
            login(this.state.formData)
                .then((response) => {
                        this.setState({ errors: {} });
                        setAuthToken(response.data.token);
                        this.props.history.push('/');
                })
                .catch(() => this.setState({ errors: { authFail: 'Invaild email or password' } }));
        }
        else {
            this.setState({ errors: { ...newErrors } });
        }
    }


    render() {
        return (
            <Login handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}  errors={this.state.errors} />
        )
    }
}