import React,{useState} from 'react'
import {Container,Row,Col,Input} from 'reactstrap'
import { ReactComponent as CloseMenu } from "../assets/img/x.svg";
import { ReactComponent as MenuIcon } from "../assets/img/icon.svg";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import './menu.css'

const Menu = () => {
    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    return (
       <Container lg={12}  className="menu"  style={{position:"relative",display:"flex", justifyContent: "center", width:"1366px",
      }}  >
           <Row  >
               <Col   className={click ? "nav-options active" : "nav-options"}lg={3} md={3} className="acceuil"  onClick={closeMobileMenu} > Acceuil</Col>
               <Col  className={click ? "nav-options active" : "nav-options"} lg={3} md={3}className="boutique"  onClick={closeMobileMenu}>Boutique</Col>
               <Col  className={click ? "nav-options active" : "nav-options"} lg={3}md={3} className="realisations"  onClick={closeMobileMenu}>Nos réalisations</Col>
               <Col  className={click ? "nav-options active" : "nav-options"} lg={3} md={3} className="contact"   onClick={closeMobileMenu}>Contactez nous</Col>
           </Row>
            <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
          
           <br></br>
          
       </Container>
    )
}

export default Menu
