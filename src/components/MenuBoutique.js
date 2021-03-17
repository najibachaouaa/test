import React ,{useState}from 'react'
import {Container,Row,Col,Input} from 'reactstrap'
import { ReactComponent as CloseMenu } from "../assets/img/x.svg";
import { ReactComponent as MenuIcon } from "../assets/img/icon.svg";
import './menB.css'
const MenuBoutique = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <Container   className="menuB"  style={{position:"relative",display:"flex", justifyContent: "center",flexWrap:"wrap" ,width:"1366px",maxWidth:"100%"
    }}  >
         <Row >
             <Col className={click ? "nav-options active" : "nav-options"} lg={3} className="acceuilB" onClick={closeMobileMenu}> Acceuil</Col>
             <Col className={click ? "nav-options active" : "nav-options"} lg={3}className="boutiqueB" onClick={closeMobileMenu}>Boutique</Col>
             <Col className={click ? "nav-options active" : "nav-options"} lg={3} className="realisationsB" onClick={closeMobileMenu}>Nos réalisations</Col>
             <Col className={click ? "nav-options active" : "nav-options"} lg={3} className="contactB" onClick={closeMobileMenu}>Contactez nous</Col>
             <h className="Produit">  Nos Produits</h>
         </Row>
         <br></br>
         <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
          
        
     </Container>
    )
}

export default MenuBoutique
