import { useState, useEffect } from "react";
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/BeritaPost2.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import URLChecker from '../hook/URLChecker'
import axios from 'axios';


export default function BeritaPost2 () {
	
	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_BACKEND_URL}articles`)
		.then((response)=>{
			console.log(response.data.data);
			const sortedList = response.data.data.sort((a, b) => (b.created_at = new Date(b.created_at)) - (a.created_at = new Date(a.created_at)));
			setPost(sortedList);
			setLoading(false);
		});	
	},[]); 

		return (
			<Row xs={1} md={3} className='Row'>
			{	
				loading === true ?(	<div> <span className='notFound3'>Loading...</span></div>
				):(
					<>
					{		
						post.slice(0,3).map(post => {
					
							const date = post.created_at
							
							const dt = new Date(date)
							console.log(dt);
							var statusAvatar = URLChecker(post.image);
		
							return(			
								<Col key={post.id}>
								<Link to={`/beritasingle/${post.id}`}>
									<Card className='Card' >
										<Card.Img variant="top" className='Image' src={statusAvatar} />
										<Card.Body className='Body'>
											<Card.Title variant="center" className='Subject'>{post.subject}</Card.Title>
											<Card.Text>
												<p className='Name'> {post.ukm.name}</p>
												<p className='Date'> <ReactTimeAgo date={dt} locale="en-US"/> </p>
											</Card.Text>
										</Card.Body>
									</Card>
									</Link>
								</Col>
							)			
						})
					}
					</>
				)
				
			}
			</Row>
		)
}
