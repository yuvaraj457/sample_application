import React from 'react';
import { MDBCard, MDBIcon, MDBBtn, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtnGroup } from 'mdb-react-ui-kit';

import { apiTarget } from '../../config.json';


export default function ItemList(props) {
    const details = props.details;


    const decreaseCartCount = (id) => {
        if (details.productQuantity > 1) {
            props.cartTotal(id, details.productQuantity - 1);

        }
    }

    const increaseCartCount = (id) => {
        if (details.productQuantity < 10) {
            props.cartTotal(id, details.productQuantity + 1);
        }
    }

    return (
        <>
            <MDBRow className='g-0 cart-item-card'>

                <MDBCol md='4' className='bg-image hover-zoom '>
                    <MDBCardImage src={apiTarget + `/static/images/${details.productImage}`} alt='...' fluid />
                </MDBCol>

                <MDBCol md='4'>
                    <MDBCardBody >
                        <MDBCardText className='cart-body-text'>

                            {details.productName}</MDBCardText>

                        <MDBBtnGroup>
                            <MDBIcon icon="caret-down" size='lg' style={{ color: '#3b5998' }} onClick={() => decreaseCartCount(details.productId)} />
                            <span className="cart-data" >
                                {details.productQuantity}
                            </span>
                            <MDBIcon icon="caret-up" size='lg' style={{ color: '#3b5998' }} onClick={() => increaseCartCount(details.productId)} />

                        </MDBBtnGroup>
                    </MDBCardBody>

                </MDBCol>

                <MDBCol md='4'>
                    <MDBBtn className="btn-close" size='sm' color="none" aria-label="Close" onClick={() => props.removeItem(details)} />
                    <MDBCard shadow='0' background='white' className=' cart-price'><small>Rs {details.productPrice * details.productQuantity}/-</small></MDBCard>
                </MDBCol>
            </MDBRow>


        </>
    )
}
