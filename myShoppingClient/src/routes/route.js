import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import { Home } from '../components/home/home-page';
import { AboutPage } from '../components/about/about';
import { getAuthToken } from '../shared/utils/session-storage';
import LoginContainer from '../containers/user/login.container';
import SignupContainer from '../containers/user/signup.container';
import { CartPageProducts, MensProduct, WomensProduct } from '../containers/products/product-data';
import ProductDetailViewContainer from '../containers/products/product-detailview.container';
import CheckOutContainer from '../containers/user/check-out.container'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            getAuthToken() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};
export const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />

                <ProtectedRoute path='/cart' component={CartPageProducts}/>

                <ProtectedRoute path='/about' component={AboutPage}/>

                <Route path='/signup' component={SignupContainer} />

                <Route path='/login' component={LoginContainer} />

                <Route path='/product-view/:id'  component={ProductDetailViewContainer}/>

                <Route  path='/mens-product'  component={MensProduct}/>

                <Route  path='/womens-product'  component={WomensProduct}/>

                <ProtectedRoute path='/check-out' component={CheckOutContainer}/>

                
            </Switch>
        </>
    )
}

