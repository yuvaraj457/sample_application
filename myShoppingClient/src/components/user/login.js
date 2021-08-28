import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBAlert } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Login = (props) => {
    const successMessage = useSelector(state => state.alert.success);
    let showMessage;
    if (successMessage) {
        showMessage = <MDBAlert color="success" className="text-center" dismiss>
            Registered Successfully
        </MDBAlert>
    }
    return (
        <div className='login-page'>
            <MDBContainer>
                <MDBRow className='signup-container'>
                    <MDBCol md="6">
                        {showMessage}
                        <MDBCard>
                            <div className="header pt-3 grey lighten-2">
                                <MDBRow className="d-flex justify-content-start">
                                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                                        Log in
                                    </h3>
                                </MDBRow>
                            </div>

                            <MDBCardBody className="mx-4 mt-4">
                                <form method='POST' onSubmit={e => props.handleOnSubmit(e)}>
                                    {props.errors.authFail && <MDBAlert color="danger" className="text-center mb-2" dismiss>
                                        {props.errors.authFail}
                                    </MDBAlert>}
                                    <MDBInput
                                        label="Your email"
                                        group type="text"
                                        validate
                                        name="email"
                                        onChange={e => props.handleOnChange(e)}
                                    />
                                    <span className='error-handle'>{props.errors.email}</span>

                                    <MDBInput
                                        label="Your password"
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                        name="password"
                                        onChange={e => props.handleOnChange(e)}
                                    />
                                    <span className='error-handle'>{props.errors.password}</span>

                                    <div className="text-center mb-4 mt-5">
                                        <MDBBtn
                                            color="cyan"
                                            type="submit"
                                            className="btn-block z-depth-2"
                                        >
                                            Log in
                                        </MDBBtn>
                                    </div>
                                    <p className="font-small grey-text d-flex justify-content-center">
                                        Don't have an account?
                                        <Link className="dark-grey-text font-weight-bold ml-1" to='/signup'>Sign up</Link>
                                    </p>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Login;