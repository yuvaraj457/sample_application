import React, { Component } from 'react';


import { connect } from 'react-redux';
import { fetchUserData } from '../../action/user-data-action';
import NavbarPage from '../../shared/utils/top-nav';


class NavBar extends Component {
   constructor(props) {
      super(props);
      this.state = { userDetails: [] };
   }

   componentDidMount() {
      this.fetchUserData()
   }

   fetchUserData = () => {
      this.props.fetchUserData()
   }

   render() {
      return (
         <>
            <NavbarPage userDetails={this.props.userData} />
         </>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      userData: state.userData
   }
};

const mapDispatchToProps = dispatch => {
   return {
      fetchUserData: () => dispatch(fetchUserData())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);