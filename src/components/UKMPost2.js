import { useState, useEffect } from "react";
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/UKMPost2.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import Card from 'react-bootstrap/Card'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import URLChecker from '../hook/URLChecker'
import axios from 'axios';


class UKMPost2 extends Component {
	state = {
		post: [],
		loading : true,
	}

	componentDidMount(){
		axios.get(`${process.env.REACT_APP_BACKEND_URL}ukms`)
		.then((response)=>{
			console.log(response.data.data);

			this.setState({
				post: response.data.data,
				loading: false,
			})
			console.log(this.state.loading);
		})

	}
	

    render() {
		return (
			<Row xs={1} md={3} className='Row2'>
			{	
				this.state.loading === true ?(<div> <span className='notFound'>Loading...</span></div>
				):(
					<>
					{
						this.state.post.slice(0,3).map(post => {
							const date = post.created_at;
							const dt = new Date(date);
							var statusAvatar = URLChecker(post.avatar);
							return(
							
								<Col key={post.id}>
								<Link to={`/detailukm/${post.id}`} >
									<Card className='Card2'>
										<Card.Img variant="top" className='Image2' src={statusAvatar} />
										<Card.Body className='Body2'>
											<Card.Title variant="center" className='Subject2'>{post.name}</Card.Title>
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
}

export default UKMPost2;