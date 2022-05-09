import React from 'react'
import '../css/BeritaUKMB.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import { Component } from 'react/cjs/react.production.min'
import { useState, useEffect } from "react";
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/Footer'
import BeritaPost from '../components/BeritaPost'
import SearchBerita from '../components/SearchBerita'
import axios from 'axios';


// X-CSRF-Token: RRhCuLSfxCWxubAbBVk5U0sGCrxwrWPAb4rs6fsl
//axios.defaults.headers.common['X-CSRF-TOKEN'] = axios.get('https://api-ukmscare.herokuapp.com/csrf-token')

export default function BeritaUKMB (props) {
	const { query } = props.match.params;
	console.log(query);
	
	const [berita, setBerita] = useState([]);
	// state = {
	// 	post: []
		
	// }

	// componentDidMount(){
	// 	axios.get('https://api-ukmscare.herokuapp.com/articles')
	// 	.then((response)=>{
	// 		console.log(response.data.data);
	// 		this.setState({
	// 			post: response.data.data
	// 		})
	// 	})

	// }
	useEffect(() => {
		axios
		.get(`https://api-ukmscare.herokuapp.com/${query}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});
	

	},[]); 


		return (
			<div className='BeritaUKMB_BeritaUKMB'>
				<NavbarUser />
				<img className='Rectangle40' src = {ImgAsset.BeritaUKMB_Rectangle40} />
				<div className='Vectors'>
					<img className='Vector' src = {ImgAsset.BeritaUKMB_Vector} />
					<img className='Vector_1' src = {ImgAsset.BeritaUKMB_Vector_1} />
				</div>
				<div className='Vectors_1'>
					<img className='Vector_2' src = {ImgAsset.BeritaUKMB_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.BeritaUKMB_Vector_3} />
				</div>
				<span className='beritaukm'>BERITA UKM</span>
				
				<SearchBerita/>
				
				{
					berita.map(post => {
						return <BeritaPost key={post.id} articles_id={post.id} ukm_id={post.ukm_id} subject={post.subject} content={post.content} created_at={post.created_at} ukm_name={post.ukm.name} />
					})
				}
					
				<Footer />
			</div>
		)
	
}