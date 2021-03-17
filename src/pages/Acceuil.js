import React from 'react'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Notice from '../components/Notice';
import Section from '../components/section';
import Magasin from '../components/Magasin';
import Footer from '../components/Footer';
import Realisation from '../components/Realisation';
import Configuration from '../components/Configuration';
const Acceuil = () => {
    return (
        <>
        <Header></Header>
    <Menu></Menu>
   <Section ></Section>
 <br></br>
   <Configuration/>
   <br></br>
 <Realisation></Realisation>

   <Notice/>

   <Magasin/>
   <Footer/>
        </>
    )
}

export default Acceuil
