import React from 'react'
import { useState, useEffect } from "react";
import '../css/DetailUKMA.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import axios from "axios";

function DetailUKMA (props){
	const { ukm_id } = props.match.params;
	console.log(ukm_id);

	const [ukm, setUKM] = useState([]);
	const [berita, setBerita] = useState([]);

	useEffect(() => {
		axios
		  .get(`https://api-ukmscare.herokuapp.com/ukms/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });
		
		axios
		  .get(`https://api-ukmscare.herokuapp.com/articles/ukm/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });


	  }, []); 
	const date = berita.created_at
	const dt = new Date(date)
	const contents = berita.content

    return (
	<div className='DetailUKMA_DetailUKMA'>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.DetailUKMA_Vector} />
			<img className='Vector_1' src = {ImgAsset.DetailUKMA_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.DetailUKMA_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.DetailUKMA_Vector_3} />
		</div>

		<NavbarUser/>
		{/* Detail UKM */}
		<div className='Group387'>
			<img className='Rectangle43' src = {ImgAsset.DetailUKMA_Rectangle43} />
			<span className='ukmName'>{ukm.name}</span>
		</div>
		<img className='ukmAvatar' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />

		<div className='Group339'>
			<div className='bxscontact'>
				<img className='Vector_6' src = {ImgAsset.DetailUKMA_Vector_6} />
			</div>
			<div className='carbonmap'>
				<img className='Vector_7' src = {ImgAsset.DetailUKMA_Vector_7} />
				<img className='Vector_8' src = {ImgAsset.DetailUKMA_Vector_8} />
				<img className='Vector_9' src = {ImgAsset.DetailUKMA_Vector_9} />
			</div>
			<div className='fluentpeopleaudience24filled'>
				<img className='Vector_10' src = {ImgAsset.DetailUKMA_Vector_10} />
			</div>
			<div className='antdesigncalendartwotone'>
				<img className='Vector_11' src = {ImgAsset.DetailUKMA_Vector_11} />
				<img className='Vector_12' src = {ImgAsset.DetailUKMA_Vector_12} />
			</div>
			<span className='ukmDate'>{ukm.date}</span>
			<span className='ukmMember'>{ukm.member}</span>
			<span className='ukmLocation'>{ukm.location}</span>
			<span className='ukmContact'>{ukm.contact}</span>
		</div>
		
		<div className='Group386'>
			<div className='Group355'>
				<img className='Rectangle14' src = {ImgAsset.DetailUKMA_Rectangle14} />
				<div className='Rectangle28'/>
			</div>
			<span className='ukmDesc'>
				{ukm.desc}
			</span>
		</div>


		{/* Daftar */}
		<Link to='/daftarukm'>
			<div className='Loginbtn'>
				<div className='Rectangle'/>
				<div className='akariconsedit'>
					<div className='Group'>
						<img className='Vector_4' src = {ImgAsset.DetailUKMA_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.DetailUKMA_Vector_5} />
					</div>
				</div>
				<span className='DAFTAR'>DAFTAR</span>
			</div>
		</Link>



		{/* Berita */}
		<div className='Group306'>
			<div className='Rectangle8'/>
		</div>
		<span className='Beritaterbaru'>Berita Terbaru</span>

		{
			berita.slice(0,1).map((post) => {
				
				<Link to={`/beritasingle/${post.id}`}>
					<div className='Group338'>
						<div className='Alltickets'>
							<div className='cardsdefault'>
								<div className='sheet'/>
								<div className='Group337'>
									<div className='Rectangle26'/>
									<img className='imgBerita' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
								</div>
							</div>
							<span className='beritaSubject'>{post.subject}</span>
							<span className='ukmName2'>{post.ukm.name}</span>
							<span className='beritaDate'>{post.created_at}</span>
							<span className='beritaContent'>{contents} ... Berita Selengkapnya </span>
						</div>
					</div>
				</Link>
			})
		}
		
		
		<Footer/>
	</div>
	)
}

export default DetailUKMA ;