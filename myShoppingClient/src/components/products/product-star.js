import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

export const ProductStar = (props) => {
    let starCount;
    if (props.star === 5) {
        starCount = [
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />
        ]
    }

    if (props.star === 4.5) {
        starCount = [
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star-half-alt" />
        ]
    }

    if (props.star === 4) {
        starCount = [
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon far icon="star" />
        ]
    }

    if (props.star === 3.5) {
        starCount = [
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star-half-alt" />,
            <MDBIcon far icon="star" />
        ]
    }

    if (props.star === 3) {
        starCount = [
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon far icon="star" />,
            <MDBIcon far icon="star" />
        ]
    }

    if (props.star === 2.5) {
        starCount = [
            <MDBIcon icon="star" />,
            <MDBIcon icon="star" />,
            <MDBIcon icon="star-half-alt" />,
            <MDBIcon far icon="star" />,
            <MDBIcon far icon="star" />
        ]
    }


    return (
        <>
            {starCount && starCount.map((item, index) => <span key={index} className='product-star'> {item} </span>)}
        </>
    )
}
