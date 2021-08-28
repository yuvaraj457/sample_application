import React, { Component } from 'react';
import { connect } from 'react-redux';

import { findErrors } from '../../shared/utils/components/userValidation/signup-validations';
import Signup from '../../components/user/signup';
import { signup } from '../../core/api/user';
import { signupAlert } from '../../action/alert-action';

class SignupContainer extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            errors: {}
        }
    }

    setFields = (event) => {
        this.setState({
            formData: { ...this.state.formData, [event.target.name]: event.target.value }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = findErrors(this.state.formData);
    

        if (Object.keys(newErrors).length <= 3 && newErrors.isValid) {
            this.setState({ errors: {} });
            signup(this.state.formData)
                .then(res => {
                    this.props.signupAlert();
                    this.props.history.push('/login');
                })
        }

        else {
            this.setState({
                errors: { ...newErrors }
            })
        }
    }

    render() {
        return (
            <div>
                <Signup setFields={this.setFields} handleSubmit={this.handleSubmit} errors={this.state.errors} />
            </div>
        )
    }
}

const mapStateToProps = state => ({alert : state.alert})

const mapDispatchToProps = dispatch => {
    return{
        signupAlert : () => dispatch(signupAlert())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupContainer)