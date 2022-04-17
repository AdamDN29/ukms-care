import React from 'react'
import '../css/SigninUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
export default function SigninUser () {
    return (
	<div className='SigninUser_SigninUser'>
		<div className='carbonuseravatarfilledalt'>
			<img className='Vector' src = {ImgAsset.SigninUser_Vector} />
			<img className='Vector_1' src = {ImgAsset.SigninUser_Vector_1} />
		</div>
		<div className='Group220'>
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector_2' src = {ImgAsset.SigninUser_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.SigninUser_Vector_3} />
			</div>
			<span className='AndaharusLoginuntukmelakukanpendaftaranUKM'>Anda harus Log in untuk melakukan pendaftaran UKM</span>
		</div>
		<div className='Vectors_1'>
			<img className='Vector_4' src = {ImgAsset.SigninUser_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.SigninUser_Vector_5} />
		</div>
		<div className='SectionForgot'>
			<span className='Forgotpassword'>Forgot password?</span>
			<span className='Rememberme'>Remember me</span>
			<div className='Rectangle1'/>
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
		<div className='Username'>
			<div className='Rectangle_2'/>
			<span className='Email'>Email</span>
		</div>
		<span className='Signin'>Sign in</span>
		<span className='Belumpunyaakun'>Belum punya akun? </span>
		<Link to='/signupuser'>
			<span className='Signup'>Sign up!</span>
		</Link>
		<div className='Group229'>
			<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
			<img className='Screenshot_20220306_161229removebgpreview1' src = {ImgAsset.NavbarSebelumLogin_Screenshot_20220306_161229removebgpreview2} />
		</div>
	</div>
	)
}