import React, { useEffect } from 'react'
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/UKMPost.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap';

const UKMPost = (props) => {

	
	// axios.get(`https://api-ukmscare.herokuapp.com/ukms/${props.ukm_id}`)
	// .then((response)=>{
	// 	console.log(response.data.data);
	// 	// ukm_ids = response.data.data;
	// 	// this.setState({
	// 	// 	post: response.data.data
	// 	// })
	// })
    console.log(props.ukm_id);

    return (

 
        
        <Col >
            <Link to={`/detailukma/${props.ukm_id}`}>
            <Card className='UKMCard'>
                <Card.Img variant="top" className='UKMImg' src={ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
                <Card.Body >
                <Card.Title variant="center" className='UKMName'>{props.ukm_name}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </Col>
       

       
        
 
  
		// <Link to={`/detailukma/${props.ukm_id}`}>
			
               
        //             <div className='container'>
        //                 {/* <img className='Rectangle8' src = {ImgAsset.UKMUnpadA_Rectangle8} /> */}
        //                 <img className='taekwondoremovebgpreview3' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
        //                 <span className='UNITTaekwondoUnpad'>{props.ukm_name} </span>
        //             </div>
             
				
		// </Link>
    )
}

export default UKMPost;

