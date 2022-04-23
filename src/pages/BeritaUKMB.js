import React from 'react'
import { useState, useEffect } from "react";
import '../css/BeritaUKMB.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min'
import NavbarSetelahLogin from '../components/NavbarSetelahLogin'
import Footer from '../components/Footer'
import BeritaPost from '../components/BeritaPost'
import SeacrhBerita from '../components/SearchBerita'
import axios from 'axios';


// X-CSRF-Token: RRhCuLSfxCWxubAbBVk5U0sGCrxwrWPAb4rs6fsl
//axios.defaults.headers.common['X-CSRF-TOKEN'] = axios.get('https://api-ukmscare.herokuapp.com/csrf-token')

class BeritaUKMB extends Component {
	state = {
		post: []
		
	}



	
	componentDidMount(){
		axios.get('https://api-ukmscare.herokuapp.com/articles')
		.then((response)=>{
			console.log(response.data.data);
			this.setState({
				post: response.data.data
			})
		})

		// axios.get(`https://api-ukmscare.herokuapp.com/${props.id}`)	
		// .then((response)=>{
		// 	console.log(response.data.data);
		// 	this.setState2({
		// 		post2: response.data.data
		// 	})
		// })

	}

	// const [Berita, setBerita] = useState([])

	
	
	// useEffect(() => {
	// 	// BaseURL = "https://api-ukmscare.herokuapp.com/";
	// 	axios.get('https://api-ukmscare.herokuapp.com/articles')
	// 	.then((response) => {
	// 		setBerita(response.data);
	// 		console.log(response);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
	// }, [])

    render() {
		return (
			<div>
				<div className='BeritaUKMB_BeritaUKMB'>
					<NavbarSetelahLogin />
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
					
					<SeacrhBerita/>

					{/* {Berita.map((list) => (
							<BeritaPost key={list.id} id={list.id} subject={list.subject} content={list.content} created_at={list.created_at} />
					))} */}

					



					

					{
						this.state.post.map(post => {
							return <BeritaPost key={post.id} ukm_id={post.ukm_id} subject={post.subject} content={post.slug} created_at={post.created_at} />
						})
					}


				

					
					{/* <Link to='/beritasingle'>
						<div className='Frame338_2'>
							<div className='Alltickets_3'>
								<div className='cardsdefault_3'>
									<div className='sheet_3'/>
									<div className='Group362_3'>
										<div className='Group337_3'>
											<div className='Group361_3'>
												<div className='Rectangle26_3'/>
												<img className='JuaraTaekwondo1_3' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
											</div>
										</div>
										<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_3'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
										<span className='UnitTaekwondoUnpad_3'>Unit Taekwondo Unpad</span>
										<span className='Jumat25Maret2022_3'>Jumat, 25 Maret 2022</span>
										<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya_3'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
									</div>
								</div>
							</div>
						</div>
					</Link> */}
					
					<Footer />
				</div>
			</div>	
		)

	}

	
}


export default BeritaUKMB;