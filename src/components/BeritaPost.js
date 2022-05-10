import React, { useState, useEffect } from 'react'
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/BeritaPost.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';

const BeritaPost = (props) => {
	const date = props.created_at
  	const dt = new Date(date)
	const contents = props.content

	const [ukm, setUKM] = useState([]);

	useEffect(() => {
		axios
		.get(`https://api-ukmscare.herokuapp.com/ukms/${props.ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});
	

	},[]); 

    return (
		<Link to={`/beritasingle/${props.articles_id}`}>
		
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
								<span className='UKM_Name'>{ukm.name}</span>
								<span className='Date'><ReactTimeAgo date={dt} locale="en-US"/></span>
								<span className='Content'>{contents.slice(0,500)} ... Berita Selengkapnya</span>
							</div>
						</div>
					</div>
				</div>
		
		</Link>
    )
}

export default BeritaPost;

