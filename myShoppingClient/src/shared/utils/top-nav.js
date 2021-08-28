import React, { Component } from "react";
import {
    MDBNavbar, MDBBadge, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBBtnGroup,
} from "mdbreact";

import icon from '../../assets/media/images/brand3.png'
import { clearAuthToken, getAuthToken } from "./session-storage";

class NavbarPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
          };
          
}       
   

    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }

    
    render() {
        const user = getAuthToken() && this.props.userDetails;
        return (
            <MDBNavbar color="black" dark expand="md" fixed="top">
                <MDBNavLink to="/">
                <MDBNavbarBrand >
                    <span>
                        <MDBIcon icon="dove" />&nbsp;
                        <img src={icon} className='brand-icon' alt='logo' />
                    </span>
                </MDBNavbarBrand>
                </MDBNavLink>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen}  navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem >
                            <MDBNavLink to="/mens-product"><strong>Mens</strong></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem >
                            <MDBNavLink to="/womens-product"><strong>Womens</strong></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>

                        {/* <MDBNavItem> */}
                            <MDBBtnGroup className='nav-group'>
                                {
                                    user  ?

                                        <>
                                            <MDBNavItem>
                                                <MDBNavLink to="/about"><strong>About</strong></MDBNavLink>
                                            </MDBNavItem>

                                            <MDBNavItem>
                                                <MDBNavLink to="/cart">
                                                    <MDBBadge color="danger" className="ml-2">
                                                        {
                                                        user.cartCount 
                                                        }
                                                    </MDBBadge>
                                                    <MDBIcon icon="shopping-cart" />&nbsp;Cart</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                            <img
                                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                                                            alt=""
                                                            className="rounded-circle z-depth-1-half size="
                                                        /> 
                                            </MDBNavItem>
                                            <MDBNavItem>
                                
                                                       
                                                <MDBNavLink to="#?"><strong>Hi, {user.userName}</strong></MDBNavLink>
                                           
                                            </MDBNavItem>

                                            <MDBNavItem>
                                                <MDBNavLink to="/login" onClick={() => { clearAuthToken() }}><strong>LogOut</strong></MDBNavLink>
                                            </MDBNavItem>

                                        </> :

                                        <MDBNavItem>
                                            <MDBNavLink to="/login"><MDBIcon icon="user" />&nbsp;Login</MDBNavLink>
                                        </MDBNavItem>
                                }
                            </MDBBtnGroup>
                        {/* </MDBNavItem> */}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
                            }
}


export default NavbarPage;