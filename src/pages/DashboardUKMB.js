import React from 'react'
import { useState, useEffect } from "react";
import '../css/DashboardUKMB.css'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import BeritaPost3 from '../components/BeritaPost3';
import { Table } from 'react-bootstrap';
import TableScrollbar from 'react-table-scrollbar';
import URLChecker from '../hook/URLChecker'
import moment from 'moment'
import 'moment/locale/id'
import ReactTimeAgo from 'react-time-ago'

function DashboardUKMB (props){

	const [ukm, setUKM] = useState([]);
	const [pendaftar, setPendaftar]= useState([]);
	const [berita, setBerita] = useState([]);

	const [userId, setUserId] = useState(() => {
		const localData = sessionStorage.getItem("id");
		return localData ? localData : null;
	});

	const query = 'ukms/' + userId;
	const [imageHolder1, setImageHolder1] = useState('');
	const [imageHolder2, setImageHolder2] = useState('');
	const [imageHolder3, setImageHolder3] = useState('');

	const [dt1, setDT1] = useState('');
	const [dt2, setDT2] = useState('');
	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}${query}`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
			var statusAvatar = URLChecker(response.data.data.avatar);
			setImageHolder1(statusAvatar);
		  })
		.catch((err) => {
			console.log(err);
		});

		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/ukm/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			const sortedList = response.data.data.sort((a, b) => (b.created_at = new Date(b.created_at)) - (a.created_at = new Date(a.created_at)));
			setPendaftar(sortedList);
		  })
		.catch((err) => {
			console.log(err);
		});

		axios
        .get(`${process.env.REACT_APP_BACKEND_URL}articles/ukm/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
			var statusAvatar2 = URLChecker(response.data.data[0].image);
				setImageHolder2(statusAvatar2);
			
			var statusAvatar3 = URLChecker(response.data.data[1].image);
			setImageHolder3(statusAvatar3);
		  })
		  .catch((err) => {
			console.log(err);
		  });


	},[]); 
	console.log(dt1);


	const ukm_id = ukm.id;
	console.log(ukm_id);
	var status = true;
	var status2 = true;

	if(berita.length !== 0){
		status = true;
		if(berita.length === 1){
			status2 = false;
		}
	}
	else{
		status = false;
	}
	
    return (
	<div className='DashboardUKMB_DashboardUKMB'>
	<Navbar />

		{/*Kanan*/}
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.DashboardUKMB_Vector} />
			<img className='Vector_1' src = {ImgAsset.DashboardUKMB_Vector_1} />
		</div>
		{/*Kiri*/}
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.DashboardUKMB_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.DashboardUKMB_Vector_3} />
		</div>

		<div className='grup1'>

		{/*Logo*/}
		<img className='Rectangle12' src = {imageHolder1} />

		{/*Keterangan UKM*/}
		<div className='Group307'>
			
			
			<div className='Rectangle01'><span className='UKMName'>{ukm.name}</span></div>
			<div className='Rectangle8'><textarea disabled={true} defaultValue={ukm.desc} className='Deskripsi' textarea/> </div>
			
			{/* <div className='Group397'>
				<span className='UNITTaekwondounpad'>{ukm.name}</span>
				
			</div> */}
		</div>
		
		{/*Jadwal,anggota,dkk*/}
		<div className='Group396'>
			{/*Kalender*/}
			<div className='Group392'>
				<div className='antdesigncalendartwotone'>
					<img className='Vector_4' src = {ImgAsset.DashboardUKMB_Vector_4} />
					<img className='Vector_5' src = {ImgAsset.DashboardUKMB_Vector_5} />
				</div>
				<span className='SetiapHari1600WIB'>{ukm.date}</span>
			</div>
			{/*Anggota*/}
			<div className='Group393'>
				<div className='fluentpeopleaudience24filled'>
					<img className='Vector_6' src = {ImgAsset.DashboardUKMB_Vector_6} />
				</div>
				<span className='_56Anggota'>{ukm.member}</span>
			</div>
			{/*Tempat*/}
			<div className='Group394'>
				<div className='carbonmap'>
					<img className='Vector_7' src = {ImgAsset.DashboardUKMB_Vector_7} />
					<img className='Vector_8' src = {ImgAsset.DashboardUKMB_Vector_8} />
					<img className='Vector_9' src = {ImgAsset.DashboardUKMB_Vector_9} />
				</div>
				<span className='BaleSantika'>{ukm.location}</span>
			</div>
			{/*Email*/}
			<div className='Group395'>
				<div className='bxscontact'>
					<img className='Vector_10' src = {ImgAsset.DashboardUKMB_Vector_10} />
				</div>
				<span className='TaekwondoUnpadgmailcom'>{ukm.contact}</span>
			</div>
		</div>

		{/*Edit Profile*/}
		<Link to={{pathname:`/editprofileukm/${ukm_id}`}}>
			<div className='Group239'>
				<div className='Group294'>
					{/* <div className='Group293'>
						<div className='Rectangle13'/>
					</div> */}
					<div className='Group291'>
						<span className='EditProfile'>Edit Profile</span>
						<div className='akariconsedit'>
							<div className='Group'>
								<img className='Vector_11' src = {ImgAsset.DashboardUKMB_Vector_11} />
								<img className='Vector_12' src = {ImgAsset.DashboardUKMB_Vector_12} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
		</div>
		
		{/*Berita UKM 1*/}
		<div className='grup3'>
		{ 

		status === true ? (
			
			<div className='BeritaContainer'>
				<>
				<div className='Group302'>
					<div className='Rectangle20'/>
					<div className='Group390'>
						<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013'>{berita[0].subject}</span>
						<img className='JuaraTaekwondo1' src = {imageHolder2} />
						<span className='UnitTaekwondoUnpad'>{berita[0].ukm.name}</span>
						<span className='Jumat25Maret2022'><ReactTimeAgo date={new Date(berita[0].created_at)} locale="en-US"/></span>
					</div>
				</div>
				</>
			
				<>
				{
					status2 === true ?(
					<div className='Group390_1'>
						<div className='Rectangle20_1'/>
						<div className='Group390_2'>
							<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013_1'>{berita[1].subject}</span>
							<img className='JuaraTaekwondo1_1' src = {imageHolder3} />
							<span className='UnitTaekwondoUnpad_1'>{berita[1].ukm.name}</span>
							<span className='Jumat25Maret2022_1'><ReactTimeAgo date={new Date(berita[1].created_at)} locale="en-US"/></span>
						</div>
					</div>
					):(<></>)
				}		
				</>
				
			</div>
			) : (
				<div><span className='BeritaTidakAda'>Belum Ada Berita</span></div>
			)

		}

		</div>
		

		<div className='grup2'>
		{/*Berita UKM*/}
		<span className='BeritaUKM_Dash'>Berita UKM</span>



		

		{/* <div className='BeritaPost3'>
			<BeritaPost3 idUKM={ukm_id} />


		</div> */}
		
		{/*Tanda Atas Bawah*/}
		{/* <div className='akariconscircletriangleupfill'>
			<img className='Vector_13' src = {ImgAsset.DashboardUKMB_Vector_13} />
		</div>
		<div className='akariconscircletriangledownfill'>
			<img className='Vector_14' src = {ImgAsset.DashboardUKMB_Vector_14} />
		</div> */}
		
		{/*List Berita*/}
		<Link to={{pathname:'/listberitaukm', state:{ukm_id}}}>
			<div className='Group354'>
				<div className='Group309'>
					{/* <div className='Group293_1'>
						<div className='Rectangle13_1'/>
					</div> */}
				</div>
				<div className='Group353'>
					<div className='Group291_1'>
						<span className='ListBerita'>List Berita</span>
					</div>
					<div className='bilistul'>
						<img className='Vector_15' src = {ImgAsset.DashboardUKMB_Vector_15} />
					</div>
				</div>
			</div>
		</Link>

		{/*List Pendaftar*/}
		<span className='PendaftarUKM'>Pendaftar UKM</span>

		<div className='TableContainer'>
		<TableScrollbar height="390px"> 
			<Table striped bordered hover variant="light" style={{width:463}}>
				<thead>
					<tr style={{borderColor:'black'}}>
					<th style={{width:10, textAlign:'center', backgroundColor:'#224957', color:'white'}}>No</th>
					<th style={{width:280, textAlign:'center', backgroundColor:'#224957', color:'white'}}>Nama</th>
					<th style={{textAlign:'center', backgroundColor:'#224957', color:'white'}}>Tanggal</th>
					{/* <th>Username</th> */}
					</tr>
				</thead>
				<tbody style={{borderColor:'#224957', backgroundColor:'white'}}>
					
					{
						pendaftar.map((post, i) =>{
							const date = new Date(post.created_at)
							i *= 1;
					
							return (
								<tr >
									<td style={{textAlign:'center'}}>{i + 1}</td>
									<td style={{textAlign:'center'}}>{post.user.name}</td>
									<td style={{textAlign:'center'}}>{moment(date).format("DD-MM-YYYY")}</td>
								</tr>
							)
			
						})
				
					}

				</tbody>
				</Table>
			</TableScrollbar>

		</div>

		<Link to='/listpendaftarukm'>
			<div className='Group352'>
				<div className='Group309_1'>
					{/* <div className='Group293_2'>
						<div className='Rectangle13_2'/>
					</div> */}
					<div className='Group291_2'>
						<div className='akariconsedit_1'>
						</div>
					</div>
				</div>
				<div className='Group351'>
					<span className='ListPendaftar'>List Pendaftar</span>
					<div className='bilistul_1'>
						<img className='Vector_16' src = {ImgAsset.DashboardUKMB_Vector_16} />
					</div>
				</div>
			</div>
		</Link>
		</div>


		<Footer/>
	</div>
	)

}
export default DashboardUKMB;