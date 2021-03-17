import React from 'react'
import {Container,Row,Col,Input} from 'reactstrap'
import './header.css'
import layer from '../assets/img/Layer.svg'
import location from '../assets/img/location.svg'
import fence from '../assets/img/fence.svg'
const Header = () => {
    return (
        <Container lg={12} md={12}className="header" style={{height:"70px",width:"1366px",maxWidth:"100%"}}>
            <Row style={{textAlign:"center"}} > 
            <Col   lg={4 } md={4 }  sm={2}> <h style={{color:"#7DAF3F",fontWeight:"bold",textAlign:"left"}}>Mon</h><h style={{color:"#4D302B",fontWeight:"bold"}}>Extérieur.fr</h> </Col> 
             <Col   lg={4 } sm={6}className="recherche"  md={4}><Row>  <img className="rechercheImg" src={layer} /><p>recherche </p> </Row> </Col>
            <Col md={4} sm={4} className="magazin"> 
            <Row> 
            <Col lg={1} md={1} sm={1}> <img className="magazinImg" src={location} /></Col>
            <Col lg={3} md={3} sm={3}><p>Notre magazin </p></Col>

            <Col lg={6} md={6} sm={6}className="conf" style={{background: "#7DAF3F",width:"206px",height:"70px",}}>
            <img className="fenceImg" src={fence} />
                 configurateur 
            </Col>
                 <Col lg={2} md={2}  sm={1} ></Col>
                  </Row>  </Col>
        </Row>
        </Container>
        
    )
    }    

export default Header
