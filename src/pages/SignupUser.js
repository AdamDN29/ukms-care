import React from 'react'
import '../css/SignupUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
export default function SignupUser () {
    return (
	<div className='SignupUser_SignupUser'>
		<div className='Group220'>
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector' src = {ImgAsset.SignupUser_Vector} />
				<img className='Vector_1' src = {ImgAsset.SignupUser_Vector_1} />
			</div>
			<span className='LakukanLoginuntukmelakukanpendaftaranUKM'>Lakukan Log in untuk melakukan pendaftaran UKM</span>
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.SignupUser_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.SignupUser_Vector_3} />
		</div>
		<Link to='/homepagea_1'>
			<div className='Loginbtn'>
				<div className='Rectangle'/>
				<span className='login'>login</span>
			</div>
		</Link>
		<div className='Password'>
			<div className='Rectangle_1'/>
			<span className='Password_1'>Password</span>
		</div>
		<div className='Password_2'>
			<div className='Rectangle_2'/>
			<span className='KonfirmasiPassword'>Konfirmasi Password</span>
		</div>
		<div className='Username'>
			<div className='Rectangle_3'/>
			<span className='EmailUnpad'>Email Unpad</span>
		</div>
		<span className='Signup'>Sign up</span>
		<span className='Sudahpunyaakun'>Sudah punya akun?</span>
		<Link to='/signinuser'>
			<span className='Signin'>Sign in!</span>
		</Link>
		<div className='Group228'>
			<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
			<img className='Screenshot_20220306_161229removebgpreview1' src = {ImgAsset.NavbarSebelumLogin_Screenshot_20220306_161229removebgpreview2} />
		</div>
	</div>
	)
}