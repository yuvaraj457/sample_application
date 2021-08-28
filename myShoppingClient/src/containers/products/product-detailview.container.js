import React, { Component } from 'react';

import ProductDetailView from '../../components/products/product-detailview';
import { addToCart, productDetails} from '../../core/api/product';
import NavBar from '../user/user-data.container';



export default class ProductDetailViewContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: false,
            product: {}
        }
    }

    componentDidMount() {
        productDetails(this.props.match.params.id )
            .then((response) => this.setState({ product: response.data }))
    }

    addProductToCart = (data) => {
        addToCart(data)
            .then(() => this.props.history.push('/cart'))
    }

    render() {
        return (
            <>
                <NavBar/>
                <ProductDetailView product={this.state.product} addProductToCart={this.addProductToCart} />
            </>
        )
    }
}
