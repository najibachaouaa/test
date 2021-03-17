import React from 'react'
import {Container,Row,Col,Input} from 'reactstrap'
import img from '../assets/img/img.png'
import img1 from '../assets/img/img1.png'
import img2 from '../assets/img/img2.png'
import './section.css'

const Section = () => {
    return (
        // <Container className="container"  >
        //    
    
        // </Container>
        <Container style={{position:"relative",display:"flex", justifyContent: "center",top:"10%"}}>
          <Row >
             <Col lg={3} md={3} sm={8} className="container"  >
                 <img src={img} className="image" />
              <div className="overlay">
                  <h className="centered" > lame composite</h>
                  </div>
                  </Col>
              <Col  lg={3} md={3} sm={8} className="container"  ><img src={img1} className="image" /><div className="overlay" ><h className="centered">lame composite</h></div></Col>
              <Col  lg={3} md={3} sm={8} className="container" ><img src={img2} className="image" /><div className="overlay"><h className="centered">lame en bois</h></div></Col>
               <Col   lg={3} md={3} sm={8} className="container" ><img src={img} className="image" /><div className="overlay"><h className="centered">panneau bois</h></div></Col>
           </Row>
 
</Container>
    )
}

export default Section
