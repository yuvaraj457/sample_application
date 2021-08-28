import React, { Component } from 'react';

import ProductDetails from '../../components/products/product-details';
import { Mens } from '../../components/products/productCategory/product-mens';
import { Womens } from '../../components/products/productCategory/product-womens';
import { getProduct } from '../../core/api/product';
import CartContainer from '../cart/cart.container';
import NavBar from '../user/user-data.container';



const HigherOrderComponent = (WrappedComponent) => {
    return class CartData extends Component {
        constructor(props) {
            super(props);
            this.state = { productDetails: [], reload: false };
        }

        componentDidMount() {
            getProduct().then(res =>
                this.setState({ productDetails: res })
            )
        }

        

        render() {
            return (
                <div>
                        <NavBar/>
                        <WrappedComponent products={this.state.productDetails} />
                </div>
            )
        }
    }
}



export const CartPageProducts = HigherOrderComponent(CartContainer);
export const HomePageProducts = HigherOrderComponent(ProductDetails);
export const MensProduct = HigherOrderComponent(Mens);
export const WomensProduct = HigherOrderComponent(Womens);