import React from 'react'
import '../css/SigninAdmin.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { loginAPI } from "../API/authAPI";
import UseLogin from "../hook/UseLogin";
import swal from "sweetalert";

export default function SigninAdmin (props) {

	const [username, password, usernameHandler, passwordHandler] = UseLogin();

	const login = () => {
		const payload = {
		  username: username,
		  password: password,
		};
		console.log(payload);
		loginAPI
		  .post("login-admin", payload)
		  .then((response) => {
			console.log(response);
			console.log(response.status)
			if (response.status === 200) {
				swal({title: "Selamat Anda Berhasil Login", type: "succes"});
				let getID = '';
				let getUser = '';
				const temp = response.data.data;
				temp.slice(0,1).map((data)=> {
					getID = data.id
					getUser = data.name
				});

				localStorage.setItem("id", JSON.stringify(getID));
				localStorage.setItem("user", JSON.stringify(getUser));
      			localStorage.setItem("role", JSON.stringify(1));

				window.location.href = '/homepagea_1';
			} 
		  })
		  .catch((err) => {
			console.log(err);
			swal({
				title: "Login Gagal ",
				icon: "warning",
				dangerMode: true,
			  });
		  });
	  };

	const enterSumbit = (e) => {
		console.log("enter login");
		login();	
	};

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
		<div className='Group230'>
			<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
			<img className='logo' src = {ImgAsset.ukms_care_logo} />
		</div>

		<span className='SigninAkunAdmin'>Sign in 
		Akun Admin</span>
		

		{/*Email,Password*/}
		<div className='Username'>
			<input className='Input_Form' placeholder='Enter Username'
			value={username}
			onChange={usernameHandler}
			type="email"
			> 	
			</input>
		</div>
		<div className='Password'>
			<input className='Input_Form' type='password' placeholder='Enter Password'
			value={password}
			onChange={passwordHandler}
			> 	
			</input>
		</div>

	

		<Button className='Loginbtn'
			onClick={() => {
				login();
              }}
		>
			{/* <div className='Rectangle'/> */}
			<span className='login'>login</span>
		</Button>
		
	</div>
	)
}