import React from 'react'
import {Container,Row,Col,Input} from 'reactstrap'
import './realisation.css'
import realisation from '../assets/img/realisation.png'
import notice1 from '../assets/img/notice1.png'
import notice2 from '../assets/img/notice2.png'
import notice3 from '../assets/img/notice3.png'
import notice4 from '../assets/img/notice4.png'
import notice5 from '../assets/img/notice5.png'
const Realisation = () => {
    return (
        <Container style={{position:"relative",display:"flex", justifyContent: "center",width: "1088px",
         } } >
            <Row>
                <Col lg={4} sm={12}>
                
                   <Col  className="realisationText">
                      <h> Nos réalizations</h>
                   
                   </Col>
                            
                </Col>

                <Col lg={8} sm={12}>
                   <img src={realisation} className="realisation"/>
                   <Col  className="panneau"lg={6}style={{border: "1px solid #E2E2E2",top:"-50%",left:"-350px",maxWidth:"100%",width: "424px",height: "425px"}}>
                     <div >
                      Panneau en bois
                      <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdundefined
                      </p>
                     </div>
                   </Col>
                </Col>
               
            </Row>
           
        </Container>
    )
}

export default Realisation
