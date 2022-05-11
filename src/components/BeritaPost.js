import React, { useState, useEffect } from 'react'
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/BeritaPost.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';

export default function BeritaPost (props) {

	const param = props.query;
	const [berita, setBerita] = useState([]);
	const [ukm, setUKM] = useState([]);
	var UKMName = '';
	console.log(param);
	
	useEffect(() => {
		axios
		.get(`https://api-ukmscare.herokuapp.com/${param}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

		

	},[]); 

	{
		berita.map(article => {
			
		})
	}

    return (
		<>
		{ berita.length !== 0 
			? (
				berita.map(article => {
					let date = article.created_at;
					let dt = new Date(date);
					let contents = article.content;
					

					axios
					.get(`https://api-ukmscare.herokuapp.com/ukms/${article.ukm_id}`)
					.then((response) => {
						console.log(response.data.data.name);
						UKMName = response.data.data.name;
						console.log(UKMName);
					})
					.catch((err) => {
						console.log(err);
					});	

					return (
						<Link to={`/beritasingle/${article.id}`} key={article.id}>
		
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
											<span className='Title'>{article.subject}</span>
											<span className='UKM_Name'>{UKMName}</span>
											<span className='Date'><ReactTimeAgo date={dt} locale="en-US"/></span>
											<span className='Content'>{contents.slice(0,500)} ... Berita Selengkapnya</span>
										</div>
									</div>
								</div>
							</div>
					
					</Link>
					)
				})
			)	
			: (<div> <span className='notFound'>Berita Tidak Ditemukan</span></div>)

		}
		
		</>	
    )
}

