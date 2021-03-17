import React from 'react'
import {Container,Row,Col,Input} from 'reactstrap'
import './footer.css'
import layer from '../assets/img/Layer.svg'
import location from '../assets/img/location.svg'
import fence from '../assets/img/fence.svg'

const Footer = () => {
    return (
        <Container lg={12}className="footer" >

        <Row>
        <Col  md={4} > <h style={{color:"#7DAF3F",fontWeight:"bold"}}>Mon</h><h style={{color:"#4D302B",fontWeight:"bold"}}>Extérieur.fr</h> </Col> 
        <Col>
          <h style={{font: "normal normal bold 18px/23px PT Sans"}}>liens utiles</h> <br></br>
        <h>Configurateu</h><br></br>
        <h>Notre magasin</h><br></br>
        <h>Notice & installation</h><br></br>
        <h>Livraison & transport</h><br></br>
       </Col>
       <Col>
         <h  style={{font: "normal normal bold 18px/23px PT Sans"}}>Nous contacter </h> <br></br>
        <h>3 rue du champ de verger Allonnes, Pays de la Loire, France</h><br></br>
        <h>Télephone:+33 2 43 57 00 87</h><br></br>
       
       </Col>
      </Row>
    </Container>
    
)
}  

export default Footer
