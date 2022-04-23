import React from 'react'
import '../css/ProfileUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarSetelahLogin from '../components/NavbarSetelahLogin'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'

export default function ProfileUser () {
    return (
	<div className='ProfileUser_ProfileUser'>
		<div className='charmphonecall'>
			<img className='Vector' src = {ImgAsset.ProfileUser_Vector} />
		</div>
		<div className='Vectors'>
			<img className='Vector_1' src = {ImgAsset.ProfileUser_Vector_1} />
			<img className='Vector_2' src = {ImgAsset.ProfileUser_Vector_2} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_3' src = {ImgAsset.ProfileUser_Vector_3} />
			<img className='Vector_4' src = {ImgAsset.ProfileUser_Vector_4} />
		</div>

		<NavbarSetelahLogin/>


		<img className='Image' src = {ImgAsset.ProfileUser_unsplashjmURdhtm7Ng} />
		<span className='Name'>Chandra Wijaya</span>
		<span className='Email'>Chandraw314@gmail.com</span>
		<img className='Line8' src = {ImgAsset.ProfileUser_Line8} />
		<div className='carbonphonevoice'>
			<img className='Vector_6' src = {ImgAsset.ProfileUser_Vector_6} />
			<img className='Vector_7' src = {ImgAsset.ProfileUser_Vector_7} />
		</div>
		<span className='Kontak'>Kontak</span>
		<span className='kontak_user'>081320938490</span>
		
		<div className='makicollege'>
			<img className='Vector_9' src = {ImgAsset.ProfileUser_Vector_9} />
		</div>
		<span className='Fakultas'>Fakultas</span>
		<span className='Fakultas_User'>FMIPA</span>
		
		<div className='faregularaddressbook'>
			<img className='Vector_8' src = {ImgAsset.ProfileUser_Vector_8} />
		</div>
		<span className='NPM'>NPM</span>
		<span className='NPM_User'>140810190033</span>

		<img className='Vector_13' src = {ImgAsset.ProfileUser_Vector_13} />
		<span className='Angkatan'>Angkatan</span>
		<span className='_2019'>2019</span>
		
		

		<Link to='/editprofileuser'>
			<div className='Group239'>
				<div className='Group294'>
					<div className='Group293'>
						<div className='Rectangle13'/>
					</div>
					<div className='Group291'>
						<span className='EditProfile'>Edit Profile</span>
						<div className='akariconsedit'>
							<div className='Group'>
								<img className='Vector_10' src = {ImgAsset.ProfileUser_Vector_10} />
								<img className='Vector_11' src = {ImgAsset.ProfileUser_Vector_11} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>

		<Link to='/homepagea_1'>
			{/* <div className='Group323'>
				<div className='Group384'>
					<div className='Group385'>
						<div className='Group239_1'>
							<div className='Group294_1'>
								<div className='Group293_1'>
									<div className='Rectangle13_1'/>
								</div>
							</div>
						</div>
						<div className='Group322'>
							<div className='Group321'>
								<span className='Kembali'>Kembali</span>
							</div>
							<img className='Vector_12' src = {ImgAsset.ProfileUser_Vector_12} />
						</div>
					</div>
				</div>
			</div> */}
			<BackButton/>
		</Link>
		

		<Footer />
	</div>
	)
}