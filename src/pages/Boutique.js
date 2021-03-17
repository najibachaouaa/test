import React ,{useState, useEffect}from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col, Row,Container, CardFooter
  } from 'reactstrap';
  import axios from 'axios'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuBoutique from '../components/MenuBoutique';
import './boutique.css'

const Boutique = () => {
    const [data, setData] = useState( [] );
 
  useEffect(async () => {
    const result = await axios(
      'https://api.mocki.io/v1/af37df01',
    );
 
    setData(result.data);
  });
 

    return (
        <>
        <Header></Header>
        <MenuBoutique></MenuBoutique>
        
     <Container>
       <Row >
       <Col lg={2}>
       <ul>
     <li><h>categories</h></li>
    <br></br>
  <li><a class="active" href="#home">Lame bois</a></li>
  <li><a href="#news">lame composite</a></li>
  <li><a href="#contact">Panneau bois</a></li>
  <li><a href="#about">Grille rigide</a></li>
</ul>
       </Col>
       <Col lg={8}>
       <Row lg={3}> 
       {data.map(item => (
         
  <Col  className="produits" >
 <Card >
<CardImg top  src={item.picture} />
<CardBody>

<CardText>{item.product_name}</CardText>
</CardBody>

<h className="price">{item.price}</h>
</Card>
</Col>
       



))}
  </Row>
       </Col>
       </Row>
 
     </Container>
        
       
    </>
    )
}

export default Boutique
