import React from 'react'
import '../css/EditProfileUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import { Dropdown } from 'bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { useState } from "react";
import { useReducer } from "react";
import axios from 'axios'
import swal from 'sweetalert'
import ProfileUser from './ProfileUser'

const initialState = {
	nama: "",
	NPM: "",
	profile_pict: null,
	angkatan: "",
	fakultas: "",
	kontak: "",
	email: "",
	password: "",
};

const reducer = (currentState, action) => {
	switch (action.type) {
		case "nama":
			return { ...currentState, nama: action.payload };
		case "NPM":
			return { ...currentState, NPM: action.payload };
		case "profile_pict":
			return { ...currentState, profile_pict: action.payload };
		case "angkatan":
			return { ...currentState, angkatan: action.payload };
		case "fakultas":
			return { ...currentState, fakultas: action.payload };
		case "kontak":
			return { ...currentState, kontak: action.payload };
		case "email":
			return { ...currentState, email: action.payload };
		case "password":
			return { ...currentState, password: action.payload };
		default:
			return currentState;
	}
  };

export default function EditProfileUser (props) {
	const { id } = props.match.params;
	console.log(id);

	const [biodata, dispatch] = useReducer(reducer, initialState);
  	const [disable, setDisable] = useState(false);

	const submitProfile = (e) => {
		e.preventDefault();
		setDisable(true);
		const idUser = id;
		console.log(idUser);
		const data = new FormData();
		data.append("id", idUser);
		data.append("first_name", biodata.nama);
		data.append("last_name", biodata.fakultas);
		// data.append("profile_pict", biodata.profile_pict);
		data.append("email", biodata.email);
		axios
		  .put(`https://reqres.in/api/users/${idUser}`, data)
		  .then((response) => {
			// window.location.href = "/profileuser";
			setDisable(false);
			swal("Upload berhasil");
		  })
		  .catch((err) => {
			swal("Upload gagal");
			window.location.href = "/editprofileuser";
		  });
		console.log(biodata);
	};

    return (
	<div className='EditProfileUser_EditProfileUser'>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.EditProfileUser_Vector} />
			<img className='Vector_1' src = {ImgAsset.EditProfileUser_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.EditProfileUser_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.EditProfileUser_Vector_3} />
		</div>

		<Navbar/>
		<Link to='/profileuser'>
			<BackButton/>
		</Link>

		<img className='Rectangle21' src = {ImgAsset.EditProfileUser_Rectangle21} />
		
		<center><span className='EditProfile'>Edit Profile</span></center>
		<div className='grup1'>
			<img className='Line7' src = {ImgAsset.EditProfileUser_Line7} />
			<img className='Image' src = {ImgAsset.EditProfileUser_unsplashjmURdhtm7Ng} />

		</div>
		<div className='Group577'>
			<div className='Group575'>
				<div className='Rectangle19_1'/>
				<div className='Group313'>
					<div className='Group300_1'>
						<span className='ChangeImage'>Change Image</span>
					</div>
					<div className='bxupload'>
						<img className='Vector_7' src = {ImgAsset.EditProfileUser_Vector_7} />
						<img className='Vector_8' src = {ImgAsset.EditProfileUser_Vector_8} />
					</div>
				</div>
			</div>
		</div>
		<div className='Group317'>
			<input className='InputForm1'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "nama", payload: e.target.value })
				}
				type="text"
				id="exampleInputNama"
                aria-describedby="Name"
                placeholder="Enter Name"
			/>
			<span className='NamaLengkap'>Nama Lengkap</span>
		</div>
		<div className='Group580_1'>
			<input className='InputForm1'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "kontak", payload: e.target.value })
				}
				type="text"
				id="exampleInputKontak"
                aria-describedby="Kontak"
                placeholder="Enter Contact"
			/>
			<span className='NomorTelepon'>Kontak</span>
		</div>
		<div className='Group582'>
			<input className='InputForm1'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "fakultas", payload: e.target.value })
				}
				type="text"
				id="exampleInputFakultas"
                aria-describedby="Fakultas"
                placeholder="Enter your Faculty"
			/>
			<span className='Fakultas'>Fakultas</span>
		</div>
		<div className='Group583'>
			<input className='InputForm1'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "NPM", payload: e.target.value })
				}
				type="text"
				id="exampleInputNPM"
                aria-describedby="NPM"
                placeholder="Enter NPM"
			/>
			<span className='NPM'>NPM</span>
		</div>
		<div className='Group571'>
			{/* <DropdownButton className='Rectangle1_4'/> */}
			<input className='InputForm1'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "angkatan", payload: e.target.value })
				}
				type="text"
				id="exampleInputAngkatan"
                aria-describedby="Angkatan"
                placeholder="Enter Year"
			/>
			{/* <span className='_2019'>2019</span> */}
			<span className='Angkatan'>Angkatan</span>
			{/* <img className='Polygon2' src = {ImgAsset.EditProfileUser_Polygon2} /> */}
		</div>
		<div className='Group581'>
			<input type='password' className='InputForm2'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "password", payload: e.target.value })
				}
				id="exampleInputPassword"
                aria-describedby="Password"
                placeholder="Enter Password"
			/>
			<span className='Password'>Password</span>
		<div/>
		<div className='Group580_2'>
			<input className='InputForm1'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "email", payload: e.target.value })
				}
				type="text"
				id="exampleInputEmail"
                aria-describedby="Email"
                placeholder="Enter Email"
			/>
			<span className='Email'>Email</span>
		</div>
			
		</div>
		{/* <Link to='/profileuser'> */}
			<div className='Group319'>
				<div className='Group580'>
					<button 
						className='Rectangle19'
						disabled={disable}
						onClick={submitProfile}
					/> 
	
					<div className='Group578'>
						<div className='Group579'>
							<div className='Group320'>
								<div className='Group300'>
									<span className='Simpan'>Simpan</span>
								</div>
							</div>
							<div className='akariconsedit'>
								<div className='Group'>
									<img className='Vector_5' src = {ImgAsset.EditProfileUser_Vector_5} />
									<img className='Vector_6' src = {ImgAsset.EditProfileUser_Vector_6} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/* </Link> */}
		<Footer/>
	</div>
	)
}