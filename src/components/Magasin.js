import React from 'react'
import {Container,Row,Col,Card,CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,} from 'reactstrap'
import magasin from '../assets/img/magasin.png'
import image from '../assets/img/image.png'
import './magazin.css'
const Magasin = () => {
    return (
        <Container style={{display:"flex", justifyContent: "center",width: "1088px",marginTop:"-15%"
         } } >
            <Row>
                <Col lg={4}>
                
                   <Col className="realisationText">
                      <h> Notre magazin</h>
                   
                   </Col>
                            
                </Col>

                <Col lg={8}>
                   <img src={magasin} className="realisation"/>
                   <Col  className="panneau"lg={6}style={{top:"-50%",left:"-350px",maxWidth:"100%",width: "664px",height: "385px"}}>
                 
            <CardImg  className="cardImg"style={{maxWidth:"110%"}} top width="100% " src={image}  />
               <CardBody>
          
          <CardText>Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</CardText>
    
        </CardBody>
   
                   </Col>
                </Col>
               
            </Row>
           
        </Container>
    )
}

export default Magasin
