import React from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBIcon, MDBCol, MDBCardHeader, MDBCardFooter, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

import ItemList from './item-list';
import { Link } from 'react-router-dom';
import { MDBAlert } from 'mdbreact';


export default function Cart(props) {
    const products = props.products;
    let showSuccessMessage;
    if (props.message) {
        showSuccessMessage = <MDBAlert color="success" className='text-center' dismiss>
            Item removed
        </MDBAlert>
    }

    return (
        <div className="content nav-container page-container">
            <MDBCard alignment='center' border='primary' background='white' style={{ width: '400px' }}>
                <MDBCardHeader background='primary' style={{ color: 'white' }}><MDBIcon icon="shopping-cart" />&nbsp;<strong>My Cart</strong></MDBCardHeader>
                <div className='px-2'>
                    {showSuccessMessage}
                    <MDBContainer>
                        {products && products.map((item, index) => <ItemList
                            key={index}
                            details={item}
                            removeItem={props.removeItem}
                            cartTotal={props.cartTotal}
                        />)
                        }
                    </MDBContainer>
                </div>

                {products && products.length > 0 ?
                <>

                <MDBCardBody>
                    <MDBRow className='g-0' style={{ borderTop: '1px solid rgba(0,0,0,.125)' }}>
                        <MDBCol md='8' style={{ textAlign: 'right', paddingRight: '20px' }}>
                            Cart Total :
                        </MDBCol>
                        <MDBCol md='4' style={{ textAlign: 'right', paddingRight: '20px' }}>

                            Rs : {products && products.reduce((accumulator, current) =>
                                accumulator + current['productPrice'] * current['productQuantity'], 0)
                            }

                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                
                    <MDBCardFooter>
                        <Link to="/check-out">
                            <MDBBtn rounded color='primary'>
                                Proceed to checkout
                            </MDBBtn>
                        </Link>
                    </MDBCardFooter> 
                    </>
                    
                    :

                    <MDBAlert color="danger" className='text-center' >
                        Your cart is empty
                    </MDBAlert>

                }
            </MDBCard>

        </div>
    )
}
