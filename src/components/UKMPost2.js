import { useState, useEffect } from "react";
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/UKMPost2.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import axios from 'axios';


class UKMPost2 extends Component {
	state = {
		post: []
		
	}

	componentDidMount(){
		axios.get('https://api-ukmscare.herokuapp.com/ukms')
		.then((response)=>{
			console.log(response.data.data);
			this.setState({
				post: response.data.data
			})
		})

	}

    render() {
		return (
			<Row xs={1} md={3} className='Row2'>
			{	
				this.state.post.slice(0,3).map(post => {
					const date = post.created_at;
					const dt = new Date(date);
					return(
					
						<Col key={post.id}>
						<Link to={`/ukms/${post.id}`} >
						    
                                {/* <Card.Img variant="top" className='Image' src={ImgAsset.HomepageA_JuaraTaekwondo1} />
                                <Card.Body className='Body'>
                                    <Card.Title variant="center" className='Subject'>{post.subject}</Card.Title>
                                    <Card.Text>
                                        <p className='Name'> {post.ukm.name}</p>
                                        <p className='Date'> <ReactTimeAgo date={dt} locale="en-US"/> </p>
                                    </Card.Text>
                                </Card.Body> */}
                            <Card className='Card2'>
                                <Card.Img variant="top" className='Image2' src={ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
                                <Card.Body className='Body2'>
                                    <Card.Title variant="center" className='Subject2'>{post.name}</Card.Title>
                                </Card.Body>
                            </Card>
						
						</Link>
						</Col>
					)
						
					
				})
			}
			</Row>

		)
	}
}

export default UKMPost2;

			// <Link to={`/beritasingle/${post.id}`}>
					
					
						
					// 	<div className='Group327'>
					// 		<div className='Rectangle25'/>
					// 		<div className='Group325_1'>
					// 			<img className='JuaraTaekwondo1_2' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
					// 			<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_2'>{post.subject}</span>
					// 			<span className='UnitTaekwondoUnpad_2'>{post.ukm.name}</span>
					// 			<span className='Jumat25Maret2022_2'>{post.created_at}</span>
					// 		</div>
					// 	</div>
					// </Link>	
