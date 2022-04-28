import React from 'react'
import '../css/SigninAdmin.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
export default function SigninAdmin () {
    return (
	<div className='SigninAdmin_SigninAdmin'>
		<div className='Group220'>
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector' src = {ImgAsset.SigninAdmin_Vector} />
				<img className='Vector_1' src = {ImgAsset.SigninAdmin_Vector_1} />
			</div>
			<span className='AndaharusLoginuntukmelakukanpendaftaranUKM'>Anda harus Log in untuk melakukan pendaftaran UKM</span>
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.SigninAdmin_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.SigninAdmin_Vector_3} />
		</div>
		<Link to='/homepagea_2'>
			<div className='Loginbtn'>
				<div className='Rectangle'/>
				<span className='login'>login</span>
			</div>
		</Link>
		<div className='Password'>
			<div className='Rectangle_1'/>
			<span className='Password_1'>Password</span>
		</div>
		<div className='Username'>
			<div className='Rectangle_2'/>
			<span className='NamaUKM'>Nama UKM</span>
		</div>
		<span className='SigninAkunAdmin'>Sign in 
		Akun Admin</span>
		<div className='Group230'>
			<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
			<img className='Screenshot_20220306_161229removebgpreview1' src = {ImgAsset.NavbarSebelumLogin_Screenshot_20220306_161229removebgpreview2} />
		</div>
	</div>
	)
}