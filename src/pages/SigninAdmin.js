import React from 'react'
import '../css/SigninAdmin.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function SigninAdmin () {
    return (

	<div className='SigninAdmin_SigninAdmin'>
		<div className='Group220'>
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector' src = {ImgAsset.SigninAdmin_Vector} />
				<img className='Vector_1' src = {ImgAsset.SigninAdmin_Vector_1} />
			</div>
			<span className='AndaharusLoginuntukmelakukanpendaftaranUKM'>Anda harus Log in untuk melakukan pengeditan informasi UKM</span>
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.SigninAdmin_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.SigninAdmin_Vector_3} />
		</div>
		<Link to='/homepagea_1'>
			<div className='Loginbtn'>
				<div className='Rectangle'/>
				<span className='login'>login</span>
			</div>
		</Link>

		{/*Email,Password*/}
		<div className='Username'>
			<input className='Input_Form' type='text' placeholder='Enter Email Unpad'> 	
			</input>
		</div>
		<div className='Password'>
			<input className='Input_Form' type='password' placeholder='Enter Password'> 	
			</input>
		</div>

		<span className='SigninAkunAdmin'>Sign in 
		Akun Admin</span>
		
		<div className='Group230'>
			<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
			<img className='logo' src = {ImgAsset.ukms_care_logo} />
		</div>
	</div>
	)
}