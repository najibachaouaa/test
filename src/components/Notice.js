import React from 'react'
import {Container,Row,Input} from 'reactstrap'

import notice1 from '../assets/img/notice1.png'
import notice2 from '../assets/img/notice2.png'
import notice3 from '../assets/img/notice3.png'
import notice4 from '../assets/img/notice4.png'
import notice5 from '../assets/img/notice5.png'
import './notice.css'
const Notice = () => {
    return (
        <Container style={{width:"1380px",display:"flex",flexWrap:"wrap",top:"-400px" }} >
            
             
                <div   style={{margin:"5px",background:"#4D302B",justifyContent:"center",textAlign:"center"}} className="firstBox" ><h> Notice & Installation </h>
                 <p>Avant de commencer, calculez la quantité de bois,
                     de béton et de quincaillerie dont vous aurez besoin.</p></div>
                <div  style={{margin:"5px"}}   className="box" ><img src={notice1}/></div>
                <div    className="box"><img src={notice2}/></div>
             
                
                <div   style={{margin:"5px"}}  className="box" ><img src={notice3}/></div>
                <div   style={{margin:"5px"}}  className="box"><img src={notice4}/></div>
             
                
                <div  style={{margin:"5px"}}><img src={notice5}/></div>
               
         
    
        </Container>
    )
}

export default Notice
