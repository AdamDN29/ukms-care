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
import swal from "sweetalert";
import Cookies from "js-cookie";

export default function SigninUser (props) {

	const [username, password, usernameHandler, passwordHandler] = UseLogin();
	// const [userRole, setUserRole] = useState(() => {
	// 	const localData = localStorage.getItem("role");
	// 	console.log(localData);
	// 	// if (localData !== null){
	// 	// 	return localData ? JSON.parse(localData) : null; 
	// 	// }
		
	// });
	// const [userId, setUserId] = useState(() => {
	// 	const localData = localStorage.getItem("id");
	// 	// if (localData !== null){
	// 	// 	return localData ? JSON.parse(localData) : null;
	// 	// }
	// });
	// const [email, setEmail] = useState();
	// // const [email, setEmail] = useState(() => {
	// // 	// const localData = localStorage.getItem("email");
	// // 	// if (localData !== null){
	// // 	// 	return localData ? JSON.parse(localData) : null;
	// // 	// }
	// // });
	// const [jwt, setJwt] = useState(() => {
	// 	const cookie = Cookies.get("jwt");
	// 	return cookie ? cookie : false;
	// });

	// post login
	const login = () => {
		const payload = {
		  email: username,
		  password: password,
		};
		console.log(payload);
		loginAPI
		  .post("login", payload)
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
					getUser = data.email
				});
				// setEmail(response.data.data.email);
				// setJwt(response.data.jwt);
				// setUserRole(2);
				// setUserId(3);
				// console.log(email);
				// console.log(jwt);
				// console.log(userRole);
				// console.log(userId);

				localStorage.setItem("id", JSON.stringify(getID));
				localStorage.setItem("user", JSON.stringify(getUser));
      			localStorage.setItem("role", JSON.stringify(2));

				window.location.href = '/homepage';
				
			//   if (response.data.errors.message == "Email belum terdaftar") {
			// 	swal({
			// 	  title: "Email belum terdaftar",
			// 	  icon: "warning",
			// 	  dangerMode: true,
			// 	});
			//   } else if (
			// 	response.data.errors.message == "Email dan password tidak cocok"
			//   ) {
			// 	swal({
			// 	  title: "Email dan password tidak cocok",
			// 	  icon: "warning",
			// 	  dangerMode: true,
			// 	});
			//   } else {
			// 	swal({
			// 	  title: "Harap Isi Data Terlebih Dahulu",
			// 	  icon: "warning",
			// 	  dangerMode: true,
			// 	});
			//   }
			} 
			// else {
			//   swal("Selamat Anda Berhasil Login");
			//   console.log(response);
			//   setEmail(response.data.email);
			//   setJwt(response.data.jwt);
			//   setUserRole(response.data.role);
			//   setUserId(response.data.user);
			//   console.log(email);
			//   console.log(jwt);
			//   console.log(userRole);
			//   console.log(userId);
			// }
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
		
	    // if (e.keyCode === 13) {
			console.log("enter login");
			login();
		
		//   }
	};

	// useEffect(() => {
	// 	// props.idUser(userId);
	// 	if (jwt === false && userId == null && email == null) {
	// 	  Cookies.remove("jwt", { path: "" });
	// 	  localStorage.clear();
	// 	} else {
	// 	  Cookies.set("jwt", jwt, { path: "" });
	// 	  localStorage.setItem("id", JSON.stringify(userId));
	// 	  localStorage.setItem("email", JSON.stringify(email));
	// 	  localStorage.setItem("role", JSON.stringify(userRole));
	// 	}
	//   }, [userId, props, jwt, email, userRole]);

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
			<span className='Text1'>Silahkan Sign In untuk 
			melakukan pendaftaran UKM</span>
		</div>
		
			<div className='Group229'>
				<span className='PlatformUKMUnpad'>=Platform UKM Unpad=</span>
				<img className='logo' src = {ImgAsset.ukms_care_logo} />		
			</div>
		
		
		{/*Bawah*/}
		<div className='Vectors_1'>
			<img className='Vector_4' src = {ImgAsset.SigninUser_Vector_4} />
			<img className='Vector_5' src = {ImgAsset.SigninUser_Vector_5} />
		</div>
		
		{/*Lupa password*/}
		{/* <div className='SectionForgot'>
			<span className='Forgotpassword'>Forgot password?</span>
			<span className='Rememberme'>Remember me</span>
			<div className='Rectangle1'/>
		</div> */}

		{/*Email,Password*/}
		<div className='Username'>
			<input className='Input_Form' placeholder='Enter Email Unpad'
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
				// onKeyDown={(e) => enterSumbit(e)}
			> 	
			</input>
		</div>

		{/*Button Login*/}
		{/* <Link to='/homepagea_1'> */}
		<Button className='Loginbtn'
			onClick={() => {
				login();
              }}
		> 
			{/* <div className='Rectangle'/> */}
			<span className='login'>Login</span>
		</Button>
		{/* </Link> */}
		
		<span className='Signin'>Sign in</span>
		<span className='Belumpunyaakun'>Belum punya akun? </span>
		<Link to='/signupuser'>
			<span className='Signup'>Sign up!</span>
		</Link>
		
		
	</div>
	)
}