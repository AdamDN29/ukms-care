import React from 'react'
import '../css/HomepageA_1.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import UKMPost2 from '../components/UKMPost2'
import BeritaPost2 from '../components/BeritaPost2'

class HomepageA_1 extends Component{
	
render() {
    return (
	<div className='HomepageA_1_HomepageA'>
		<NavbarUser />
		{/*Sisi Kiri*/}
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.HomepageA_1_Vector} />
			<img className='Vector_1' src = {ImgAsset.HomepageA_1_Vector_1} />
		</div>
		{/*Sisi Kanan*/}
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.HomepageA_1_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.HomepageA_1_Vector_3} />
		</div>

		{/*Penjelasan UKM*/}
		<img className='Image' src = {ImgAsset.HomepageB_humasunpad2020123Baseball1} />
		<div className='Group306'>
			<div className='Rectangle8'/>
			<span className='UKMsCare'>UKM's Care</span>
		</div>
		<span className='text1'>UKM’s Care merupakan website yang menaungi UKM di Universitas 
		Padjajaran, yang mana di dalam website ini berisi banyak informasi seputar ukm di unpad 
		jadi mahasiswa Unpad yang selama ini kesulitan mendapat informasi dan mendaftar ke UKM 
		pilihan mereka dapat dengan mudah dilakukan di website ini </span>
		

		{/*Kata Pembuka*/}
		<div className='Group386'>
			<div className='Group355'>
				<img className='Rectangle14' src = {ImgAsset.HomepageA_1_Rectangle14} />
				<div className='Rectangle28'/>
			</div>
			<span className='text2'>Sebagai mahasiswa, aktif dalam kegiatan kemahasiswaan itu 
			penting banget, Quipperian! Selain kamu mendapat pengetahuan soal kegiatan yang 
			sedang digeluti, mahasiswa yang ikut kegiatan kemahasiswaan juga bisa meningkatkan 
			kemampuan sosial dan organisasinya. Jadi, kamu makin punya banyak teman baru dari 
			berbagai jurusan yang ada di kampus deh! Sebagai mahasiswa, aktif dalam kegiatan 
			kemahasiswaan itu penting banget, Quipperian! Selain kamu mendapat pengetahuan soal 
			kegiatan yang sedang digeluti, mahasiswa yang ikut kegiatan kemahasiswaan juga bisa 
			meningkatkan kemampuan sosial dan organisasinya. Jadi, kamu makin punya banyak teman 
			baru dari berbagai jurusan yang ada di kampus deh!</span>
		</div>

		

		{/*Fitur UKM's Care (daftar,info,berita*/}
		<span className='UKMSCARE'>UKM'S CARE?</span>
		<div className='Line4'/>
		<div className='Group335'>
			<div className='Group326_2'>
				<div className='Rectangle23_1'/>
				<div className='Rectangle24_1'/>
				<div className='Group326_3'>
					<span className='InformasiterbaruseputarUKMfavoritkamu'>Informasi terbaru 
					seputar UKM favorit kamu</span>
				</div>
				<div className='Group325_2'>
					<span className='LangsungdaftarkeUKMfavoritkamutanparibet'>Langsung daftar ke 
					UKM favorit kamu tanpa ribet </span>
				</div>
			</div>
			<div className='Group327_1'>
				<div className='Rectangle25_1'/>
				<div className='Group325_3'>
					<span className='BeritaterkinitentangUKMfavoritkamudariaktivitaskegiatanhinggakehuaraan'>Berita 
					terkini tentang UKM favorit kamu, dari aktivitas, kegiatan hingga kejuaraan</span>
				</div>
			</div>
		</div>
		<span className='BeritaUKM_Home'> Berita UKM</span>
		<span className='InformasiUKM'>Informasi  UKM</span>
		<span className='PendaftaranOnline'>Pendaftaran Online</span>
		<div className='Group'>
			<img className='Vector_4' src = {ImgAsset.HomepageA_1_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.HomepageA_1_Vector_5} />
		</div>
		<div className='etnewspaper'>
			<div className='Group_1'>
				<img className='Vector_6' src = {ImgAsset.HomepageA_1_Vector_6} />
				<img className='Vector_7' src = {ImgAsset.HomepageA_1_Vector_7} />
			</div>
		</div>
		<div className='tablerspeakerphone'>
			<div className='Group_2'>
				<img className='Vector_8' src = {ImgAsset.HomepageA_1_Vector_8} />
				<img className='Vector_9' src = {ImgAsset.HomepageA_1_Vector_9} />
			</div>
		</div>

		{/*List UKM*/}
		<span className='ukmunpad'>UKM UNPAD</span>
		<div className='Line6'/>

		<div className='UKMPost2'>
			<UKMPost2 />
		</div>

		{/* <div className='Group317'>
			<img className='Rectangle8_1' src = {ImgAsset.HomepageA_1_Rectangle8_1} />
			<img className='Rectangle9' src = {ImgAsset.HomepageA_1_Rectangle9} />
			</div>
			<img className='taekwondoremovebgpreview11' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
			<img className='Rectangle15' src = {ImgAsset.HomepageA_1_Rectangle15} />
			<img className='bridgeremovebgpreview7' src = {ImgAsset.UKMUnpadB_bridgeremovebgpreview5} />
			<img className='palawa5' src = {ImgAsset.UKMUnpadB_palawa2} />
			<div className='Group388'>
				<img className='Rectangle8_2' src = {ImgAsset.HomepageA_1_Rectangle8_2} />
				<img className='Rectangle9_1' src = {ImgAsset.HomepageA_1_Rectangle9_1} />
			</div>
			<img className='taekwondoremovebgpreview13' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
			<img className='bridgeremovebgpreview9' src = {ImgAsset.UKMUnpadB_bridgeremovebgpreview5} />
			<div className='akariconscircletriangleupfill'>
		</div> */}

		

		<Link to='/ukmunpada/ukms'>
			<span className='UKMSelengkapnya'>UKM Selengkapnya  ➝</span>
		</Link>

		{/*Berita UKM*/}
		<span className='beritaukm'>BERITA UKM</span>
		<div className='Line5'/>
		<div className='BeritaPost2'>
			<BeritaPost2 />
		</div>

		<Link to='/beritaukmb/articles'>
			<span className='BeritaSelengkapnya'>Berita Selengkapnya  ➝</span>
		</Link>
		
		{/*Footer */}
	<Footer/>		
	</div>
	)
}
}

export default HomepageA_1;