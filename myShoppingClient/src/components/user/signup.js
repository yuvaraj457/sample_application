import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { Link } from "react-router-dom";


const Signup = (props) => {
    return (
        <div className='signup-page'>
            <MDBContainer>
                <MDBRow className='signup-container' >
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody >
                                <form method='POST' onSubmit={e => props.handleSubmit(e)}>
                                    <p className="h4 text-center py-4" >Sign up</p>
                                    <div className="grey-text">

                                        <MDBInput
                                            label="Your name"
                                            name="userName"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={e => props.setFields(e)}
                                        />
                                        <span className='error-handle'>{props.errors.userName}</span>

                                        <MDBInput
                                            label="Your email"
                                            name="userEmail"
                                            icon="envelope"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={e => props.setFields(e)}
                                        />
                                        <span className='error-handle'>{props.errors.userEmail}</span>

                                        <MDBInput
                                            label="Your password"
                                            name="userPassword"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                            onChange={e => props.setFields(e)}
                                        />
                                        <span className='error-handle-password'>{props.errors.userPassword}</span>

                                        <MDBInput
                                            label="Confirm your password"
                                            name="userConfirmPassword"
                                            icon="exclamation-triangle"
                                            group
                                            type="password"
                                            validate
                                            error="wrong"
                                            success="right"
                                            onChange={e => props.setFields(e)}
                                        />
                                        <span className='error-handle-confirm-password'>{props.errors.userConfirmPassword}</span>

                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="cyan" type="submit">
                                            Register
                                        </MDBBtn>
                                        <div>
                                        <Link to="/login" color="dark"><MDBIcon icon="angle-double-left" /> Back to Login</Link>
                                        </div>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Signup;