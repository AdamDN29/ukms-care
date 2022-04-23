import React, { useEffect } from 'react'
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/BeritaPost.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';

const BeritaPost = (props) => {
	// const ukm_ids = props.ukm_id
	const date = props.created_at
  	const dt = new Date(date)
	const ukm_ids = []

	
	axios.get(`https://api-ukmscare.herokuapp.com/ukms/${props.ukm_id}`)
	.then((response)=>{
		console.log(response.data.data);
		// ukm_ids = response.data.data;
		// this.setState({
		// 	post: response.data.data
		// })
	})

    return (
		<Link to={`/BeritaSingle/${props.ukm_id}`}>
			<div className='BeritaPost'>
				<div className='Frame338_2'>
					<div className='Alltickets_3'>
						<div className='cardsdefault_3'>
							<div className='sheet_3'/>
							<div className='Group362_3'>
								<div className='Group337_3'>
									<div className='Group361_3'>
										<div className='Rectangle26_3'/>
										<img className='Image' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
									</div>
								</div>
								<span className='Title'>{props.subject}</span>
								<span className='UKM_Name'>{props.ukm_id}</span>
								<span className='Date'><ReactTimeAgo date={dt} locale="en-US"/></span>
								<span className='Content'>{props.content} </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
    )
}

export default BeritaPost;

