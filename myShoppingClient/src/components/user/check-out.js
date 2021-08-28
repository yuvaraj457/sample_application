import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import UserData from "../../containers/user/user-data.container";


export const CheckOut = (props) => {
    const [radio, setRadio] = useState('');
    const data = props.data ? props.data : [];
    return (
        <>
            <UserData />
            <div className="page-container">
                <MDBContainer className='mt-4'>
                    <MDBRow>
                        <MDBCol md="6">
                            <form onSubmit={e => props.handleOnSubmit(e)}>
                                <p className="h4 text-center mb-4">Check Out</p>
                                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="defaultFormContactNameEx"
                                    className="form-control"
                                    name="userName"
                                    onChange={e => props.setFields(e)}
                                />
                                <br />
                                <div className='error-handle'>{props.errors.userName}</div>
                                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="defaultFormContactEmailEx"
                                    className="form-control"
                                    name="email"
                                    onChange={e => props.setFields(e)}
                                />
                                <br />
                                <div className='error-handle'>{props.errors.email}</div>
                                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="888 888 8888"
                                    maxLength="10"
                                    className="form-control"
                                    name="phoneNumber"
                                    onChange={e => props.setFields(e)}
                                />
                                <br />
                                <div className='error-handle'>{props.errors.phoneNumber}</div>
                                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                    Address
                                </label>
                                <textarea
                                    type="text"
                                    id="defaultFormContactMessageEx"
                                    className="form-control"
                                    rows="3"
                                    name="billingAddress"
                                    onChange={e => props.setFields(e)}
                                />
                                <br />
                                <div className='error-handle'>{props.errors.billingAddress}</div>
                                <div className="text-center mb-4">
                                    <MDBBtn color="primary" outline type="submit">
                                        Add To Billing Address
                                        <MDBIcon far icon="paper-plane" className="ml-2" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBTable >
                                <MDBTableHead color="primary-color" textWhite>
                                    <tr><th>Billing Address</th></tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>
                                            {data.map((item, index) =>
                                                <div key={index}>
                                                    <MDBInput
                                                        gap
                                                        onClick={e => setRadio(item)}
                                                        checked={radio.billingAddress === item.billingAddress}
                                                        value={item.billingAddress}
                                                        label={
                                                            <>
                                                                <span title={
                                                                    item.userName + '\n'
                                                                    + item.phoneNumber + '\n'
                                                                    + item.email + '\n'
                                                                    + item.billingAddress
                                                                }>
                                                                    {item.billingAddress}
                                                                </span>
                                                                {radio.billingAddress === item.billingAddress &&
                                                                    <span className='billing-trash' onClick={() => { props.removeBillingAddress(radio.billingAddress) }}>
                                                                        <MDBIcon icon="trash-alt" />
                                                                    </span>
                                                                }
                                                            </>
                                                        }
                                                        type="radio"
                                                        id="radio2"
                                                    />
                                                </div>
                                            )
                                            }
                                        </td>
                                    </tr>
                                    {
                                        radio &&
                                        <>
                                            <tr>
                                                <td>
                                                    <MDBContainer>
                                                        <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
                                                            <MDBCardHeader color="primary-color" tag="h5">
                                                                Shipping To
                                                            </MDBCardHeader>
                                                            <MDBCardBody>
                                                                {
                                                                    Object.keys(radio).map((item, index) => <div key={index}>{radio[item]}</div>)
                                                                }
                                                                <MDBBtn color="primary">proceed to Payment</MDBBtn>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                    </MDBContainer>
                                                </td>
                                            </tr>
                                        </>
                                    }
                                </MDBTableBody>
                            </MDBTable>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </>
    );
};

