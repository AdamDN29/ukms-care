import React, { useEffect } from 'react'
import '../css/EditProfileUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import { Dropdown } from 'bootstrap'
import { Button, DropdownButton } from 'react-bootstrap'
import { useState } from "react";
import { useReducer } from "react";
import axios from 'axios'
import swal from 'sweetalert'
import ProfileUser from './ProfileUser'

const initialState = {
	name: "",
	npm: "",
	avatar: null,
	year: "",
	faculty: "",
	phone_number: "",
	email: "",
};

const reducer = (currentState, action) => {
	switch (action.type) {
		case "name":
			return { ...currentState, name: action.payload };
		case "npm":
			return { ...currentState, npm: action.payload };
		case "avatar":
			return { ...currentState, avatar: action.payload };
		case "year":
			return { ...currentState, year: action.payload };
		case "faculty":
			return { ...currentState, faculty: action.payload };
		case "phone_number":
			return { ...currentState, phone_number: action.payload };
		case "email":
			return { ...currentState, email: action.payload };
		default:
			return currentState;
	}
  };

export default function EditProfileUser (props) {
	const { id } = props.match.params;
	console.log(id);

	const [userProfile, setUserProfile] = useState([]);

	useEffect(()=>{
	    axios.get(`${process.env.REACT_APP_BACKEND_URL}profiles/${id}`)
	    .then((response)=> {
	   	    setUserProfile(response.data.data);
			console.log(response.data.data);
		})
		.catch((err) => {
			console.log(err);
		});
	},[])

	const [biodata, dispatch] = useReducer(reducer, initialState);
  	const [disable, setDisable] = useState(false);

	console.log(biodata);

	const submitProfile = (e) => {
		e.preventDefault();
		setDisable(true);
		const idUser = id;
		console.log(idUser);
		const data = new FormData();
		data.append("id", idUser);
		data.append("name", biodata.name);
		data.append("npm", biodata.npm);
		
		data.append("email", biodata.email);
		data.append("year", biodata.year);
		data.append("faculty", biodata.faculty);
		data.append("phone_number", biodata.phone_number);

		console.log(data.get('id'));
		console.log(data.get('name'));
		console.log(data.get('npm'));
		console.log(data.get('email'));
		console.log(data.get('year'));
		console.log(data.get('faculty'));
		console.log(data.get('phone_number'));

		axios
		  .post(`${process.env.REACT_APP_BACKEND_URL}profiles/${idUser}`, data)
		  .then((response) => {
			setDisable(false);
			swal("Edit Profile Berhasil berhasil");
			console.log(response)
			console.log("berhasil")
			window.location.href = "/profileuser";
		  })
		  .catch((err) => {
			swal({
				title: "Edit Profile Gagal",
				icon: "warning",
				dangerMode: true,
			})
			// window.location.href = `/editprofileuser/${idUser}`;
		  });
		
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
				name='name'
				type="text" 
				defaultValue ={userProfile.name}
				onBlur={(e) =>
				  dispatch({ type: "name", payload: e.target.value })
				}
                placeholder="Enter Name"
			/>
			<span className='NamaLengkap'>Nama Lengkap</span>
		</div>
		<div className='Group580_1'>
			<input className='InputForm1'
				disabled={disable}
				name='phone_number'
				type="text"
				defaultValue ={userProfile.phone_number}
				onBlur={(e) =>
				  dispatch({ type: "phone_number", payload: e.target.value })
				}
                placeholder="Enter Contact"
			/>
			<span className='NomorTelepon'>Kontak</span>
		</div>
		<div className='Group582'>
			<input className='InputForm1'
				disabled={disable}
				name='faculty'
				type="text" 
				defaultValue ={userProfile.faculty}
				onChange={(e) =>
				  dispatch({ type: "faculty", payload: e.target.value })
				}
                placeholder="Enter your Faculty"
			/>
			<span className='Fakultas'>Fakultas</span>
		</div>
		<div className='Group583'>
			<input className='InputForm1'
				disabled={disable}
				name='npm'
				type="text" 
				defaultValue ={userProfile.npm}
				onChange={(e) =>
				  dispatch({ type: "npm", payload: e.target.value })
				}
                placeholder="Enter NPM"
			/>
			<span className='NPM'>NPM</span>
		</div>
		<div className='Group571'>
			{/* <DropdownButton className='Rectangle1_4'/> */}
			<input className='InputForm1'
				disabled={disable}
				name='year'
				type="text" 
				defaultValue ={userProfile.year}
				onChange={(e) =>
				  dispatch({ type: "year", payload: e.target.value })
				}
                placeholder="Enter Year"
			/>
			{/* <span className='_2019'>2019</span> */}
			<span className='Angkatan'>Angkatan</span>
			{/* <img className='Polygon2' src = {ImgAsset.EditProfileUser_Polygon2} /> */}
		</div>
		<div className='Group581'>
			{/* <input type='password' className='InputForm2'
				disabled={disable}
				onChange={(e) =>
				  dispatch({ type: "password", payload: e.target.value })
				}
				id="exampleInputPassword"
                aria-describedby="Password"
                placeholder="Enter Password"
			/>
			<span className='Password'>Password</span> */}
		<div/>
		<div className='Group580_2'>
			<input className='InputForm1'
				disabled={disable}
				name='email'
				type="text" 
				defaultValue ={userProfile.email}
				onBlur={(e) =>
				  dispatch({ type: "email", payload: e.target.value })
				}
                placeholder="Enter Email"
			/>
			<span className='Email'>Email</span>
		</div>
			
		</div>
		{/* Submit Button */}
			<div className='Group319'>
				<div className='Group580'>
					<Button 
						variant='primary'
						className='ButtonSubmit'
						disabled={disable}
						onClick={submitProfile}
					>
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
					</Button> 
				</div>
			</div>
		<Footer/>
	</div>
	)
}