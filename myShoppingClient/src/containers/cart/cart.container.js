import React, { Component } from 'react';


import Cart from '../../components/cart/cart';
import { cartTotalPrice, removeFromCart } from '../../core/api/product';
import { user } from '../../core/api/user';
import { connect } from 'react-redux'; 
import { removeProduct} from '../../action/user-data-action';

class CartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userCartProducts: [],
            message : false
        }
    }

    componentDidMount() {
        this.getUserData();
    }

    removeItem = (data) => {
        removeFromCart(data.productId)
            .then(() => {
                this.getUserData();
                this.props.removeProduct();
                this.setState({message:true});
                setTimeout(() => {
                    this.setState({message:false});
                }, 2000);
            })
    }


    getUserData = () => {
        user()
            .then((res) => {
                this.setState({
                    userCartProducts: res.data
                })
            })
    }

    cartTotal = (id,quantity) => {
        cartTotalPrice(id,quantity);
        this.getUserData();
    }

    render() {
        return (

                <Cart 
                products   =  {this.state.userCartProducts.cartTotalPrice} 
                removeItem =  {this.removeItem} 
                cartTotal  =  {this.cartTotal}
                message    =  {this.state.message}
                />

        )
    }
}

const mapStateToProps = (state) => ({cartCount:state});

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: () => dispatch(removeProduct())
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)
