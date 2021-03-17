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
          <ul style={{font: "normal normal bold 18px/23px PT Sans"}}>liens utiles</ul> 
        <ul>Configurateu</ul>
        <ul>Notre magasin</ul>
        <ul>Notice & installation</ul>
        <ul>Livraison & transport</ul>
       </Col>
       <Col>
         <ul  style={{font: "normal normal bold 18px/23px PT Sans"}}>Nous contacter </ul> 
        <ul>3 rue du champ de verger Allonnes, Pays de la Loire, France</ul>
        <ul>Télephone:+33 2 43 57 00 87</ul>
       
       </Col>
      </Row>
    </Container>
    
)
}  

export default Footer
