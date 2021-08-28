import React from "react";
import { MDBCol, MDBIcon, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import icon from '../../assets/media/images/brand3.png'

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <span>
              <MDBIcon icon="dove" />&nbsp;
              <img src={icon} className='brand-icon' alt='logo' />
            </span>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">https://www.creatives.com/</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">https://www.instagram.com/creatives</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">https://www.facebook.com/creatives</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Creatives.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;