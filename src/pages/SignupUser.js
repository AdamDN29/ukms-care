import React from 'react'
import '../css/SignupUser.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'



export default function SignupUser () {
    return (
	<div className='SignupUser_SignupUser'>
		<div className='Group220'>
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector' src = {ImgAsset.SignupUser_Vector} />
				<img className='Vector_1' src = {ImgAsset.SignupUser_Vector_1} />
			</div>
			<span className='Text1'>Lakukan Sign In untuk melakukan pendaftaran UKM</span>
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.SignupUser_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.SignupUser_Vector_3} />
		</div>
		<Link to='/homepagea_1'>
			<div className='Loginbtn'>
				<Button className='Button1'/> 	
				<span className='Register1'>Register</span>	
			</div>
		</Link>
			
		<div className='Username'>
			<input className='Input_Form' type='text' placeholder='Enter Email Unpad'> 	
			</input>
		</div>
		<div className='Password'>
			<input className='Input_Form' type='password' placeholder='Enter Password'> 	
			</input>
		</div>

		<div className='Password_2'>
			<input className='Input_Form' type='password' placeholder='Re-Enter Password'> 	
			</input>
		</div>
		
		<span className='Signup'>Sign up</span>
		<span className='Sudahpunyaakun'>Sudah punya akun?</span>
		<Link to='/signinuser'>
			<span className='Signin'>Sign In!</span>
		</Link>
		<div className='Group228'>
			<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
			<img className='logo' src = {ImgAsset.ukms_care_logo} />
		</div>
	</div>
	)
}