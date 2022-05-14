import React from 'react'
import '../css/SigninUser.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { loginAPI } from "../API/authAPI";
import { useState, useEffect } from "react";
import UseLogin from "../hook/UseLogin";

export default function SigninUser (props) {

	const [username, password, usernameHandler, passwordHandler] = UseLogin();
	const [userId, setUserId] = useState(() => {
		const localData = localStorage.getItem("id");
		return localData ? JSON.parse(localData) : null;
	});

	// post login
	const login = () => {
		const payload = {
		email: username,
		password: password,
		};
		loginAPI
		.post("login", payload)
		.then((response) => {
			const passErr = response.data.passwordErrors;
			if (response.data.user) {
			if (passErr) {
				console.log(passErr);
				alert(passErr);
			} else {
				alert("Selamat anda berhasil login!!!");
				console.log(response);
				setUserId(response.data.user);
			}
			} else {
			console.log(response.data.emailErrors);
			alert(response.data.emailErrors);
			}
		})
		.catch((err) => {
			console.log(err);
		});
		};
		useEffect(() => {
			props.getId(userId);
			localStorage.setItem("id", JSON.stringify(userId));
	}, [userId, props]);

	return (
	<div className='SigninUser_SigninUser'>
		<div className='carbonuseravatarfilledalt'>
			<img className='Vector' src = {ImgAsset.SigninUser_Vector} />
			<img className='Vector_1' src = {ImgAsset.SigninUser_Vector_1} />
		</div>

		<div className='Group220'>
			{/*Atas*/}
			<div className='Rectangle6'/>
			<div className='Vectors'>
				<img className='Vector_2' src = {ImgAsset.SigninUser_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.SigninUser_Vector_3} />
			</div>
			<span className='Text1'>Anda harus SigIn untuk 
			melakukan pendaftaran UKM</span>
		</div>
		
		{/*Bawah*/}
		<div className='Vectors_1'>
			<img className='Vector_4' src = {ImgAsset.SigninUser_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.SigninUser_Vector_5} />
		</div>
		
		{/*Lupa password*/}
		<div className='SectionForgot'>
			<span className='Forgotpassword'>Forgot password?</span>
			<span className='Rememberme'>Remember me</span>
			<div className='Rectangle1'/>
		</div>

		{/*Button Login*/}
		{/* <Link to='/homepagea_1'> */}
			<Button className='Loginbtn'> 
				<div className='Rectangle'/>
				<span className='login'>login</span>
			</Button>
		{/* </Link> */}

		{/*Email,Password*/}
		<div className='Username'>
			<input className='Input_Form' type='text' placeholder='Enter Email Unpad'> 	
			</input>
		</div>
		<div className='Password'>
			<input className='Input_Form' type='password' placeholder='Enter Password'> 	
			</input>
		</div>
		
		<span className='Signin'>Sign in</span>
		<span className='Belumpunyaakun'>Belum punya akun? </span>
		<Link to='/signupuser'>
			<span className='Signup'>Sign up!</span>
		</Link>
		
		<div className='Group229'>
			<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
			<img className='logo' src = {ImgAsset.ukms_care_logo} />		
		</div>
	</div>
	)
}