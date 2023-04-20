import { Container, Row, Col } from "react-bootstrap";
import  MailchimpForm from "./MailchimpForm";
import logo from "./assets/img/logo.jpeg";
import navicon1 from "./assets/img/nav-icon1.png";
import navicon2 from "./assets/img/nav-icon2.png";
import navicon3 from "./assets/img/nav-icon3.png";
 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} style={{height:'300px',width:'300px'}} alt="Logo"  />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/"><img src={navicon1} style={{height:'30px',width:'30px'}} alt="Icon" /></a>
              <a href="https://www.facebook.com/"><img src={navicon2} style={{height:'30px',width:'30px'}} alt="Icon" /></a>
              <a href="https://twitter.com/settings/account?lang=en"><img src={navicon3} style={{height:'30px',width:'30px'}} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;