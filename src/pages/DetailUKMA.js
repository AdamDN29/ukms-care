import React from 'react'
import { useState, useEffect } from "react";
import '../css/DetailUKMA.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CheckUser from '../hook/CheckUser';
import { Component } from 'react/cjs/react.production.min'
import ReactTimeAgo from 'react-time-ago'
import axios from "axios";
import { Button } from 'react-bootstrap';
import swal from "sweetalert";
import GetToken from '../API/GetToken';

function DetailUKMA (props){
	const { ukm_id } = props.match.params;
	console.log(ukm_id);

	const [ukm, setUKM] = useState([]);
	const [berita, setBerita] = useState([]);
	const [status, setStatus] = useState();

	const date = berita.created_at
	const dt = new Date(date)
	const contents = berita.content
	console.log(date);
	console.log(contents);

	const [userRole, setUserRole] = useState(() => {
		const localData = localStorage.getItem("role");
		return localData ? localData : null;
	});
	console.log(userRole);

	useEffect(() => {
		axios
		  .get(`${process.env.REACT_APP_BACKEND_URL}ukms/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });
		
		axios
		  .get(`${process.env.REACT_APP_BACKEND_URL}articles/ukm/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });

		axios
		  .get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/status/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setStatus(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });
	  }, []); 
	  console.log(berita.created_at);
	
	const StatusProfile = CheckUser();
	console.log(StatusProfile);

	const pendaftaranHandler = () => {
		
		if(userRole === null){
			swal({
				title: "Silahkan Sign In Untuk Melakukan Pendaftaran",
				icon: "warning",
				dangerMode: true,
			});
		}
		else if(userRole === '1'){
			swal({
				title: "Admin Tidak Dapat Melakukan Pendaftaran",
				icon: "warning",
				dangerMode: true,
			});
		}
		else {
			if(status === false){
				swal({
					title: "UKM Sedang Tidak Melakukan Pendaftaran",
					icon: "warning",
					dangerMode: true,
				});
				return;
			}

			if(StatusProfile === true){
				window.location.href = `/daftarukm/${ukm_id}`;
			}
			else{
				swal({
					title: "Silahkan Lengkapi Profile Terlebih Dahulu",
					icon: "warning",
					dangerMode: true,
				});
			}
			
		}
	}
	

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

		<Navbar/>
		{/* Detail UKM */}
		<div className='Group387'>
			<img className='Rectangle43' src = {ImgAsset.DetailUKMA_Rectangle43} />
			<span className='ukmName'>{ukm.name}</span>
		</div>

		<div className='grup1'>
		<img className='ukmAvatar' src = {`${process.env.REACT_APP_BACKEND_URL}${ukm.avatar}`} />

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

		{/* <Link to='/daftarukm'> */}
			<Button className='Loginbtn'
				onClick={pendaftaranHandler}
			>
				{/* <div className='Rectangle'/> */}
				<div className='akariconsedit'>
					<div className='Group'>
						<img className='Vector_4' src = {ImgAsset.DetailUKMA_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.DetailUKMA_Vector_5} />
					</div>
				</div>
				<span className='DAFTAR'>DAFTAR</span>
			</Button>
		{/* </Link> */}
		
		<div className='Group386'>
			<div className='Group355'>
				<img className='Rectangle14' src = {ImgAsset.DetailUKMA_Rectangle14} />
				<div className='Rectangle28'/>
			</div>
			<span className='ukmDesc'>
				{ukm.desc}
			</span>
		</div>

		</div>

		{/* Daftar */}

		{/* Berita */}
		<div className='Group306'>
			<div className='Rectangle8'/>
		
		<span className='Beritaterbaru'>Berita Terbaru</span>
		</div>
		
		<div>
		{	
			berita.length !== 0
			? (
				berita.slice(0,1).map((post) => {
					const date = post.created_at
					const dt = new Date(date)
					const contents = post.content
					
					return (
					<Link to={`/beritasingle/${post.id}`}>
						<div className='Group338'>
							<div className='Alltickets'>
								<div className='cardsdefault'>
									<div className='sheet'/>
									<div className='Group337'>
										<div className='Rectangle26'/>
										<img className='imgBerita' src = {`${process.env.REACT_APP_BACKEND_URL}${post.image}`} />
									</div>
								</div>
								<span className='beritaSubject'>{post.subject}</span>
								<span className='ukmName2'>{post.ukm.name}</span>
								<span className='beritaDate'><ReactTimeAgo date={dt} locale="en-US"/></span>
								<span className='beritaContent'>{contents.slice(0,500)} ... Berita Selengkapnya </span>
							</div>
						</div>
					</Link>)
				})
			)
			: (<div><span className='notFound'>Belum Ada Berita</span></div>)
					
		}
			
		</div>
		
		<Footer/>
	</div>
	)
}

export default DetailUKMA ;