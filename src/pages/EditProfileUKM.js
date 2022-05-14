import React, { useEffect } from 'react'
import '../css/EditProfileUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import { useReducer, useState } from "react"
import { useHistory } from "react-router-dom"
import axios, { Axios } from 'axios'
import swal from "sweetalert"
import { Button } from 'react-bootstrap'

const initialState = {
    name: "",
    desc: "",
	date: "",
	member: "",
	location: "",
	contact: "",
    avatar: null,
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case "name":
            return { ...currentState, name: action.upload };
        case "desc":
            return { ...currentState, desc: action.upload };
		case "date":
            return { ...currentState, date: action.upload };
		case "member":
            return { ...currentState, member: action.upload };
		case "location":
            return { ...currentState, location: action.upload };
		case "contact":
            return { ...currentState, desc: action.upload };
        case "avatar":
            return { ...currentState, avatar: action.upload };
        default:
            return currentState;
    }
}



export default function EditProfileUKM (props){

    const idUKM = props.match.params.ukm_id;
	console.log(idUKM);

	let history = useHistory();

    const [preload, setPreLoad] = useState([]);

    useEffect( () => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/${idUKM}`)
		  .then((response) => {
			console.log(response.data.data);
			setPreLoad(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

    const [ukm, dispatch] = useReducer(reducer, initialState)
    console.log(ukm);
	
    const [disable, setDisable] = useState(false);
	
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setDisable(true);
        const dataForm = new FormData();
		dataForm.append("id", idUKM);
        dataForm.append("name", ukm.name);
        dataForm.append("desc", ukm.desc);
        dataForm.append("date", ukm.date);
		dataForm.append("member", ukm.member);
		dataForm.append("location", ukm.location);
		dataForm.append("contact", ukm.contact);
		dataForm.append("avatar", ukm.avatar);

		console.log(dataForm.get('id'));
		console.log(dataForm.get('name'));
		console.log(dataForm.get('desc'));
		console.log(dataForm.get('date'));
		console.log(dataForm.get('member'));
		console.log(dataForm.get('location'));
		console.log(dataForm.get('contact'));
		console.log(dataForm.get('avatar'));

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}ukms/edit/${idUKM}`, dataForm
			)
            .then((response) => {
                setDisable(false);
                swal("Profile UKM berhasil diedit")
                console.log(response)
                console.log("berhasil")
                history.push({pathname:'/dashboardukmb', state:{idUKM}})
            })
            .catch((err) => {
                swal({
                    title: "Gagal mengedit profile",
                    icon: "warning",
                    dangerMode: true,
                })
                console.log(err)
            })
    }




    return (
	<div className='EditProfileUKM_EditProfileUKM'>
		<Navbar/>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.EditProfileUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.EditProfileUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.EditProfileUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.EditProfileUKM_Vector_3} />
		</div>

		<div className='grup1'>
		<div className='Rectangle21'/>
		<span className='EditProfileUKM_1'>Edit Profile UKM</span>
		<div className='Group382'>
			<div className='Group301'>
				<input className='uploadFile' 
					disabled={disable}
					name="avatar"
					accept="image/*"
					onBlur={(e) =>
						dispatch({
							type: "avatar",
							upload: e.target.files[0],
						})
					}
					type="file"
				/>
				{/* <div className='Group313'>
					<div className='Group300'>
						<span className='UploadGambar'>Upload Gambar</span>
					</div>
					<div className='bxupload'>
						<img className='Vector_4' src = {ImgAsset.EditProfileUKM_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.EditProfileUKM_Vector_5} />
					</div>
				</div> */}
			</div>
			<div className='Group381'>
				{/* Input Name */}
				<div className='Group314'>
					<input className='Rectangle1'
						disabled={disable}
						name="name"
						type="text" 
						defaultValue ={preload.name}
						onBlur={(e) =>
							dispatch({ type: "name", upload: e.target.value })
						}
					/>
					{/* <span className='UnitTaekwondoUnpadUTKD'>Unit Taekwondo Unpad (UTKD)</span> */}
					<span className='NamaUKM'>Nama UKM</span>
				</div>
				{/* Input Date */}
				<div className='Group314_1'>
					<input className='Rectangle1_1'
						disabled={disable}
						name="date"
						type="text" 
						defaultValue ={preload.date}
						onBlur={(e) =>
							dispatch({ type: "date", upload: e.target.value })
						}
					/>
					{/* <span className='SelasaJumat1600WIB'>Selasa & Jumat, 16.00 WIB</span> */}
					<span className='JadwalKegiatan'>Jadwal Kegiatan</span>
				</div>
				{/* Input Member */}
				<div className='Group314_2'>
					<input className='Rectangle1_2'
						disabled={disable}
						name="member"
						type="text" 
						defaultValue ={preload.member}
						onBlur={(e) =>
							dispatch({ type: "member", upload: e.target.value })
						}
					/>
					{/* <span className='_70Anggota'>70 Anggota</span> */}
					<span className='JumlahAnggota'>Jumlah Anggota</span>
				</div>
				{/* Input Location */}
				<div className='Group314_3'>
					<input className='Rectangle1_3'
						disabled={disable}
						name="location"
						type="text" 
						defaultValue ={preload.location}
						onBlur={(e) =>
							dispatch({ type: "location", upload: e.target.value })
						}
					/>
					{/* <span className='KompleksUKMBaratJatinangor'>Kompleks UKM Barat, Jatinangor</span> */}
					<span className='AlamatUKM'>Alamat UKM</span>
				</div>
				{/* Input Contact */}
				<div className='Group309'>
					<div className='Group314_4'>
						<input className='Rectangle1_4'
							disabled={disable}
							name="contact"
							type="text" 
							defaultValue ={preload.contact}
							onBlur={(e) =>
								dispatch({ type: "contact", upload: e.target.value })
							}
						/>
						{/* <span className='TaekwondoUnpadgmailcom'>Taekwondo.Unpad@gmail.com</span> */}
						<span className='Kontak'>Kontak</span>
					</div>
				</div>
			</div>

			<div className='Group349'>
				<div className='Rectangle22'/>
				<img className='Rectangle12' src = {`${process.env.REACT_APP_BACKEND_URL}${preload.avatar}`} />
			</div>
		</div>
		{/* Input Desc */}
		<div className='Group316'>
			<div className='Group314_5'>
				<textarea className='Rectangle1_5'
					disabled={disable}
					name="desc" id="desc" cols="30" rows="10"
					defaultValue ={preload.desc}
					onBlur={(e) =>
						dispatch({ type: "desc", upload: e.target.value })
					}
				/>
				{/* <span className='deskripsi'>Unit Taekwondo Unpad (UTKD) didirikan pada tanggal 16 September 1982. UTKD mengadakan latihan rutin setiap hari Senin & Kamis di Pelataran Taman Fakultas Hukum Unpad (Dipati Ukur Bandung) dan Selasa & Jumat di Bale Santika atau di Stadion Jati Padjadjaran (Jatinangor) mulai pukul 16.00 WIB.
				
				Sejumlah prestasi yang pernah diraih antara lain: 
				
				Ganesha Cup 2013 (1 Perunggu ) 
				Walikota Cup 2013 (1 Emas , 5 perak 2 perunggu) 
				Kejuaraan Nasional IT Telkom Cup 2013 (1 Perak, 3 Perunggu) 
				Kejuaraan Nasional FEUI Cup 2013 (2 Perak , 2 Perunggu) 
				Metro Open 2013 (5 Perak , 5 Perunggu ) 
				KTB Cup Bogor Se Jawa Barat (1 Perak, 7 Perunggu) 
				Walikota Cup Bandung 2012 (3 Perak , 4 Perunggu ) 
				Polban Kyorugi Championship 2012 (2 emas, 8 Perak, 6 perunggu) 
				Walikota Bandung Cup 2011 (2 emas, 2 Perak, 4 perunggu) 
				UPI Challenge 2011 (1 perak, 6 perunggu) Walikota 
				Bandung Cup 2010 (2 emas, 1 perak, 4 Perunggu) 
				Kejurnas ITTelkom 2010 (1 Perunggu)
				
				
				Media Sosial 
				
				Line         : @cgk2038x
				
				Instagram : taekwondo_unpad
				
				Twitter     : @TaekwondoUnpad</span> */}
				{/* <div className='Group317'>
					<img className='Line2' src = {ImgAsset.EditProfileUKM_Line2} />
					<img className='Line3' src = {ImgAsset.EditProfileUKM_Line3} />
				</div> */}
			</div>
		</div>
		<div className='Group383'>
			<div className='Group311'>
				<div className='Group314_6'>
					<span className='Deskripsi'>Deskripsi</span>
				</div>
			</div>
		</div>
		<Button className='Group319'
			disabled={disable} onClick={onSubmitHandler}
		>
			{/* <div className='Rectangle19_1'/> */}
			<div className='Group320'>
				<div className='Group300_1'>
					<span className='SaveProfile'>Save Profile</span>
				</div>
				<div className='bxssave'>
					<img className='Vector_6' src = {ImgAsset.EditProfileUKM_Vector_6} />
				</div>
			</div>
		</Button>
		<div className='Group323'>
			<div className='Group384'>
				<div className='Group385'>
					<div className='Group239'>
						<div className='Group294'>
							<div className='Group293'>
								<div className='Rectangle13'/>
							</div>
						</div>
					</div>
					<div className='Group322'>
						<div className='Group321'>
							<span className='Kembali'>Kembali</span>
						</div>
						<img className='Vector_7' src = {ImgAsset.EditProfileUKM_Vector_7} />
					</div>
				</div>
			</div>
		</div>
		</div>

		<Footer/>
	</div>
	)

}