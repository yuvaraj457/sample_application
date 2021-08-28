import React, { Component } from 'react';

import { ProductList } from '../../components/products/product-list';
import { addToCart } from '../../core/api/product';
import { connect } from 'react-redux'; 
import {addProduct} from '../../action/user-data-action';


 class ProductListContainer extends Component {
     constructor(props){
         super(props)
         this.setState({
            products : []
         })
     }

     
    addProductToCart = (data) => {
        addToCart(data)
        .then(() => {
            this.props.addProduct();
        })
        .catch(() => {});
        
    }

    render() {
        
        return (
            <ProductList  data={this.props.data} addProductToCart={this.addProductToCart} />
        )
    }
}

const mapStateToProps = (state) => ({cartCount:state});

const mapDispatchToProps = dispatch => {
        return {
            addProduct : () => dispatch(addProduct())
        }
    }
    
export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer)