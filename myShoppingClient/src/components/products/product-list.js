import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';
import { MDBContainer, MDBAlert } from 'mdbreact';
import { useState } from 'react';

import { ProductStar } from './product-star';
import { apiTarget } from '../../config.json';
import { Link } from 'react-router-dom';
import { getAuthToken } from '../../shared/utils/session-storage';

export const ProductList = (props) => {
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false); 
    const [text, setText] = useState('Added to cart')

    let show;
    if (successMessage && getAuthToken()) {
        show = <MDBContainer>
            <MDBAlert color="success" className="cart-alert" dismiss>
                <strong>{text}</strong>
            </MDBAlert>
        </MDBContainer>
    }
    else if(errorMessage && !getAuthToken()){
        show = <MDBAlert color="danger" dismiss>
            <strong>Unable to add </strong>
      </MDBAlert>
    }

    return (
        <>
            <MDBCol>
                <MDBCard className='product-card product-position card-position '>
                    <div className='bg-image hover-zoom'>
                        <Link to={`/product-view/${props.data._id}`}>
                            <MDBCardImage
                                src={apiTarget + `/static/images/${props.data.productImage}`}
                                alt='...'
                                position='top'
                            />
                        </Link>

                    </div>
                    <MDBCardBody>
                        <MDBCardTitle>{props.data.productName}</MDBCardTitle>
                        <ProductStar star={props.data.productStar} id={props.data._id} />
                        <MDBCardText>
                            <del>Rs {props.data.productMrp}/-</del>&nbsp;
                            Rs {props.data.productPrice}/-

                        </MDBCardText>

                        <div className='button-container'>
                            <button className="cart-button1" color="unique" onClick={() => {
                                if (!successMessage) {
                                    setSuccessMessage(true);
                                    setErrorMessage(true);
                                    props.addProductToCart(props.data, successMessage);
                                }
                                else {
                                    setText('Already added to cart')
                                }
                            }}>Add to cart</button>&nbsp;
                            <Link to='/check-out'>
                                <button className="cart-button2" color="primary" >Buy now</button>
                            </Link>
                        </div>


                    </MDBCardBody>
                </MDBCard>
                {show}
            </MDBCol>

        </>
    )
}
