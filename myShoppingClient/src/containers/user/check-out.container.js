import React, { Component } from 'react';
import { connect } from 'react-redux';


import  {CheckOut}  from '../../components/user/check-out';
import { findErrorsCheckOut } from '../../shared/utils/components/userValidation/check-out-validation';
import { checkout } from '../../core/api/user';
import { fetchbillingAddressData } from "../../action/check-out-action";
import { removeBillingAddress } from '../../core/api/user';

class CheckOutContainer extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            errors: {}
        }
    }

    componentDidMount(){
        this.reload();
    }

    reload = () => {
        this.props.fetchbillingAddressData();
    }

    setFields = (event) => {
        this.setState({
            formData: { ...this.state.formData, [event.target.name]: event.target.value }
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const newErrors = findErrorsCheckOut(this.state.formData);
        if (!Object.keys(newErrors).length) {
            this.setState({ errors: {} });
            checkout(this.state.formData)
                .then(response => this.reload())
                }
        else {
            this.setState({ errors: { ...newErrors } });
        }
        
    }

    removeBillingAddressCall = (data) => {
        removeBillingAddress(data);
        setInterval(() => {
            this.reload();
        }, 1000);
        
    }


    render() {
        return (
            <div>
                <CheckOut 
                    setFields={this.setFields} 
                    handleOnSubmit={this.handleOnSubmit} 
                    errors={this.state.errors} 
                    data = {this.props.billingDetails}
                    reload = {this.reload}
                    removeBillingAddress = {this.removeBillingAddressCall}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({billingDetails:state.billingAddress.data.data});

export default connect(mapStateToProps,{fetchbillingAddressData})(CheckOutContainer);



