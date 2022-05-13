import React from 'react'
import { useState, useEffect } from "react";
import '../css/DashboardUKMB.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import axios from 'axios';
import BeritaPost3 from '../components/BeritaPost3';

function DashboardUKMB (props){

	const [ukm, setUKM] = useState([]);


	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/5`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

	const idUKM = ukm.id;



	
    return (
	<div className='DashboardUKMB_DashboardUKMB'>
	<NavbarAdmin />

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
		<img className='Rectangle12' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />

		{/*Keterangan UKM*/}
		<div className='Group307'>
			
			<div className='Rectangle8'><span className='Deskripsi'>{ukm.desc}{ukm.desc}</span> </div>
			<div className='Recname'><span className='UKMName'>{ukm.name}</span></div>
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
		<Link to='/editprofileukm'>
			<div className='Group239'>
				<div className='Group294'>
					<div className='Group293'>
						<div className='Rectangle13'/>
					</div>
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
		
		<div className='grup2'>
		{/*Berita UKM*/}
		<span className='BeritaUKM_Dash'>Berita UKM</span>

		{/*Berita UKM 1*/}
		{/* <div className='Group302'>
			<div className='Rectangle20'/>
			<div className='Group390'>
				<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2013</span>
				<img className='JuaraTaekwondo1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
				<span className='UnitTaekwondoUnpad'>Unit Taekwondo Unpad</span>
				<span className='Jumat25Maret2022'>Jumat, 25 Maret 2022</span>
			</div>
		</div>
			
		<div className='Group390_1'>
			<div className='Rectangle20_1'/>
			<div className='Group390_2'>
				<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013_1'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2013</span>
				<img className='JuaraTaekwondo1_1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
				<span className='UnitTaekwondoUnpad_1'>Unit Taekwondo Unpad</span>
				<span className='Jumat25Maret2022_1'>Jumat, 25 Maret 2022</span>
			</div>
		</div> */}

		<BeritaPost3 ukm_id={idUKM} />

		{/*Tanda Atas Bawah*/}
		<div className='akariconscircletriangleupfill'>
			<img className='Vector_13' src = {ImgAsset.DashboardUKMB_Vector_13} />
		</div>
		<div className='akariconscircletriangledownfill'>
			<img className='Vector_14' src = {ImgAsset.DashboardUKMB_Vector_14} />
		</div>
		
		{/*List Berita*/}
		<Link to={{pathname:'/listberitaukm', state:{idUKM}}}>
			<div className='Group354'>
				<div className='Group309'>
					<div className='Group293_1'>
						<div className='Rectangle13_1'/>
					</div>
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
		<div className='Rectangle15'/>
		
		{/*Nomor*/}
		<span className='No'>No</span>
		<div className='Group240'>
			<div className='Rectangle16'/>
		</div>
		<div className='Group278'>
			<div className='Rectangle16_1'/>
		</div>
		<div className='Group279'>
			<div className='Rectangle16_2'/>
		</div>
		<div className='Group282'>
			<div className='Rectangle16_3'/>
		</div>
		<div className='Group280'>
			<div className='Rectangle16_4'/>
		</div>

		{/*Tanggal*/}			
		<div className='Rectangle18'/>
		<span className='Tanggal'>Tanggal</span>
		<div className='Group285'>
			<div className='Rectangle18_1'/>
		</div>
		<div className='Group299'>
			<div className='Rectangle18_3'/>
		</div>
		<div className='Group298'>
			<div className='Rectangle18_4'/>
		</div>
		<div className='Group297'>
			<div className='Rectangle18_5'/>
		</div>
		<div className='Group296'>
			<div className='Rectangle18_6'/>
		</div>

		{/*Nama*/}			
		<div className='Group391'>
			<div className='Rectangle17'/>
			<span className='Nama'>Nama</span>
		</div>
		<div className='Group357'>
			<div className='Group283'>
				<div className='Rectangle18_7'/>
			</div>
			<div className='Group284'>
				<div className='Rectangle18_8'/>
				<div className='Group283_1'>
					<div className='Rectangle18_9'/>
					<div className='Group283_2'>
						<div className='Rectangle18_10'/>
						<div className='Group283_3'>
							<div className='Rectangle18_11'/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Link to='/listpendaftarukmadminukm'>
			<div className='Group352'>
				<div className='Group309_1'>
					<div className='Group293_2'>
						<div className='Rectangle13_2'/>
					</div>
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