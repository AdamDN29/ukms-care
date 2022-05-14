import React from 'react'
import '../css/SignupUser.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import UseRegister from '../hook/UseRegister'
import { registerAPI } from '../API/authAPI'
import { confirmAlert } from 'react-confirm-alert'; 
import swal from "sweetalert";
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function SignupUser () {
	const [
		usernameReg,
		passwordReg,
		confirmPass,
		usernameHandler,
		passwordHandler,
		confirmPassHandler,
	] = UseRegister();
	
	// Post Register

	const register = () => {
		if (confirmPass !== passwordReg) {
			swal({
				title: "Password Tidak Sesuai",
				icon: "warning",
				dangerMode: true,
			  });
		} else {
		  const payload = {
			email: usernameReg,
			password: passwordReg,
			password_confirmation: confirmPass
		  };
		  registerAPI
			.post("register", payload)
			.then((response) => {
			  console.log(response);
			  console.log(usernameReg);
			  if (response.status === 200) {
					confirmAlert({
						title: 'Silahkan Cek Email Anda Untuk Konfirmasi Email',
						message: 'Click Resend Jika Anda Belum Mendapat Email',
						buttons: [
						{
							label: 'Resend',
							onClick: () => {
								alert('Kami Telah Mengirim Ulang Email')
				
							}
						},
						{
							label: 'Oke',
							onClick: () => alert('Click Ok')
						}
						]
					});
			// 	swal({
			// 	  title: "Email Yang Kamu Masukan Sudah Terdaftar:)",
			// 	  icon: "warning",
			// 	  dangerMode: true,
			// 	});
			//   } else {
			// 	swal({
			// 	  title:
			// 		"Akun Kamu Sudah Terdaftar, Silahkan Login Terlebih Dahulu",
			// 	  icon: "success",
			// 	  button: "Aww yiss!",
			// 	});
			  }
			})
			.catch((err) => {
			  console.log(err);
			  confirmAlert({
				title: 'Silahkan Cek Email Anda Untuk Konfirmasi Email',
				message: 'Click Resend Jika Anda Belum Mendapat Email',
				buttons: [
				{
					label: 'Resend',
					onClick: () => {
						alert('Kami Telah Mengirim Ulang Email')
		
					}
				},
				{
					label: 'Oke',
					onClick: () => alert('Click Ok')
				}
				]
			});
			});
		}
	  };
	
	  const enterSumbit = (e) => {
		  console.log("enter");
		  register();
	  };


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
		
			
		<div className='Username'>
			<input className='Input_Form' placeholder='Enter Email Unpad'
				value={usernameReg}
				onChange={usernameHandler}
				type="email"
			> 	
			</input>
		</div>
		<div className='Password'>
			<input className='Input_Form' placeholder='Enter Password'
				value={passwordReg}
                onChange={passwordHandler}
                type="password"
			> 	
			</input>
		</div>

		<div className='Password_2'>
			<input className='Input_Form' placeholder='Re-Enter Password'
				value={confirmPass}
                onChange={confirmPassHandler}
                type="password"
			> 	
			</input>
		</div>

		{/* <Link to='/homepagea_1'> */}
			<div className='Loginbtn'>
				<Button className='Button1'
					    type="submit"
						onClick={() => {
						  register();
						}}
				> <span className='Register1'>Register</span>	
				</Button>
				
			</div>
		{/* </Link> */}
		
		<span className='Signup'>Sign Up</span>
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