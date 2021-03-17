import React from 'react'
import {Container,Row,Col,Input} from 'reactstrap'
import groupe from '../assets/img/Groupe.svg'
import fence from '../assets/img/fence.svg'
import arrow from '../assets/img/arrow.svg'
import './configuration.css'
const Configuration = () => {
    return (
        <Container   sm={12} className="containerC" style={{position:"relative",display:"flex", justifyContent: "center",background: "#653D36",width: "1088px",
        height: "170px"  } }>
            <Row className="configuration">
                <Col lg={2} className="imgR">
                <img className="E" src={groupe} />
                </Col>
                <Col  lg={2}  style={{display:"flex"}}>
                <img  className="fence" src={fence} />
                </Col>
                <Col  className="confText">
                  Configurez votre espace 
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu.</p>
                </Col>
                <Col  style={{display:"flex"}}lg={1} >
                <img  className="arrow" src={arrow} />
                </Col>
            </Row>
        </Container>
    )
}

export default Configuration
