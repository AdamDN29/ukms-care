import React from 'react'
import '../css/AturPendaftaranUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import { useState, useEffect, useReducer } from "react";
import Switch from "react-switch";
import axios from 'axios';
import { Button } from 'react-bootstrap'
import 'react-confirm-alert/src/react-confirm-alert.css';

const Swal = require('sweetalert2');

const initialState = {
    field1: "",
    field2: "",
	field3: "",
	field4: "",
	field5: "",
	file1: "",
    file2: "",
	file3: "",
    file4: "",
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case "field1":
            return { ...currentState, field1: action.upload };
        case "field2":
            return { ...currentState, field2: action.upload };
		case "field3":
            return { ...currentState, field3: action.upload };
		case "field4":
            return { ...currentState, field4: action.upload };
		case "field5":
            return { ...currentState, field5: action.upload };
		case "file1":
            return { ...currentState, file1: action.upload };
        case "file2":
            return { ...currentState, file2: action.upload };
		case "file3":
			return { ...currentState, file3: action.upload };
		case "file4":
			return { ...currentState, file4: action.upload };
		default:
            return currentState;
    }
}

export default function AturPendaftaranUKM (){

	const [userId, setUserId] = useState(() => {
		const localData = localStorage.getItem("id");
		return localData ? localData : null;
	});
	const [checked, setChecked] = useState(true);
	const [preload, setPreLoad] = useState([]);

	useEffect( () => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/status/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setChecked(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/field/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setPreLoad(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

	const [data, dispatch] = useReducer(reducer, initialState)
	console.log(data);

	function onSubmitHandler (temp){
        // e.preventDefault();
		console.log(temp);
        const dataForm = new FormData();

		dataForm.append("ukm_id", userId);

		dataForm.append("name", temp);
		console.log("Upload " + temp);

		var empty = "";

		if(temp === "field1"){
			dataForm.append("value", data.field1);
		} else{
			dataForm.append("value", empty);

		}


		if(temp === "field2"){
			dataForm.append("value", data.field2);
		}
		if(temp === "field3"){
			dataForm.append("value", data.field3);
		}
		if(temp === "field4"){
			dataForm.append("value", data.field4);
		}
		if(temp === "field5"){
			dataForm.append("value", data.field5);
		}
		if(temp === "file1"){
			dataForm.append("value", data.file1);
		}
		if(temp === "file2"){
			dataForm.append("value", data.file2);
		}
		if(temp === "file3"){
			dataForm.append("value", data.file3);
		}
		if(temp === "file4"){
			dataForm.append("value", data.file4);
		}
   
		console.log(dataForm.get('ukm_id'));
		console.log(dataForm.get('name'));
		console.log(dataForm.get('value'));

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/field/add`, dataForm
			)
            .then((response) => {
                Swal.fire("Atur Pendaftaran Berhasil")
                console.log(response)
                console.log("berhasil")
                // history.push({pathname:'/dashboardukm', state:{idUKM}})
            })
            .catch((err) => {
				if (err.response.status === 400){
					Swal.fire({
						title: "Masukkan Nama Field",
						icon: "warning",
						dangerMode: true,
					})
				}
				else{
					Swal.fire({
						title: "Gagal Mengatur Pendaftaran",
						icon: "warning",
						dangerMode: true,
					})
				}
                
                console.log(err.response.status)
            })
    }

	

	const statusHandle = () => {
		Swal.fire({
			title: 'Ubah Status Pendaftaran ?',
			// text: "Silahkan Login Untuk Melanjutkan",
			icon:'question',
			allowOutsideClick: false,
			allowEscapeKey: false,
			confirmButtonText: 'Ya',
			confirmButtonColor: '#21c177',
			showDenyButton: true,
			denyButtonText: 'Tidak',

			preConfirm: () => {
				axios
				.post(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/status/${userId}`)
				.then((response) => {
					console.log(response.data.data);
				})
				.catch((err) => {
					console.log(err);
				});
				setChecked(!checked);
				// setStatus()
				console.log(checked);
				console.log("Berhasil Diubah")
				
				

			  }
			
		  });


		
	}




    return (
	<div className='AturPendaftaranUKM_AturPendaftaranUKM'>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.AturPendaftaranUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.AturPendaftaranUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.AturPendaftaranUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.AturPendaftaranUKM_Vector_3} />
		</div>
		<Navbar/>
		
		<span className='AturPendaftaranUKM_1'>Atur Pendaftaran UKM</span>
		
		
		<span className='PendaftaranUKM'>Pendaftaran UKM</span>
		<div className='Rectangle57'>
			<Switch onChange={statusHandle} checked={checked} checkedIcon={false} height={40} width={80} className="SwitchStatus"/>
		</div>
		<span className='status'>Pendaftaran UKM</span>


		<span className='Teks'>Teks</span>
		{/* Default */}
		<img className='Rectangle54' src = {ImgAsset.AturPendaftaranUKM_Rectangle54} />
		<img className='Rectangle55' src = {ImgAsset.AturPendaftaranUKM_Rectangle55} />
		<span className='Nama'>Nama</span>

		<img className='Rectangle55_4' src = {ImgAsset.AturPendaftaranUKM_Rectangle55_4} />
		<span className='NPM'>NPM</span>
		<img className='Rectangle55_5' src = {ImgAsset.AturPendaftaranUKM_Rectangle55_5} />
		<span className='Angkatan'>Angkatan</span>
		<img className='Rectangle55_6' src = {ImgAsset.AturPendaftaranUKM_Rectangle55_6} />
		<span className='Fakultas'>Fakultas</span>
		<img className='Rectangle55_7' src = {ImgAsset.AturPendaftaranUKM_Rectangle55_7} />
		<span className='Kontak'>Kontak</span>

		{/* Change */}
		{/* Field 1 */}
		<input className='field1' 
			type="text"
			placeholder="Text 1"
			name="field1"
			defaultValue ={preload.field1}
			onBlur={(e) =>
				dispatch({ type: "field1", upload: e.target.value })
			}
		></input>
		<Button className='button1'
			onClick={() => onSubmitHandler('field1')}
		>
			<div className='dashiconsyesalt'>
				<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
			</div>
		</Button>

		<input className='field2'
			type="text"
			placeholder="Text 2"
			name="field2"
			defaultValue ={preload.field2}
			onBlur={(e) =>
				dispatch({ type: "field2", upload: e.target.value })
			}
		></input>
		<Button className='button2'
			onClick={() => onSubmitHandler('field2')}
		>
			<div className='dashiconsyesalt'>
				<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
			</div>
		</Button>

		<input className='field3'
			type="text"
			placeholder="Text 3"
			name="field3"
			defaultValue ={preload.field3}
			onBlur={(e) =>
				dispatch({ type: "field3", upload: e.target.value })
			}
		></input>
		<Button className='button3'
			onClick={() => onSubmitHandler('field3')}
		>
			<div className='dashiconsyesalt'>
				<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
			</div>
		</Button>

		<input className='field4'
			type="text"
			placeholder="Text 4"
			name="field4"
			defaultValue ={preload.field4}
			onBlur={(e) =>
				dispatch({ type: "field4", upload: e.target.value })
			}
		></input>
		<Button className='button4'
			onClick={() => onSubmitHandler('field4')}
		>
			<div className='dashiconsyesalt'>
				<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
			</div>
		</Button>

		<input className='field5'
			type="text"
			placeholder="Text 5"
			name="file5"
			defaultValue ={preload.file5}
			onBlur={(e) =>
				dispatch({ type: "file5", upload: e.target.value })
			}
		></input>
		<Button className='button5'
			onClick={() => onSubmitHandler('field5')}
		>
			<div className='dashiconsyesalt'>
				<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
			</div>
		</Button>

		
		{/* File */}
		<span className='File'>File</span>
		<img className='Rectangle55_8' src = {ImgAsset.AturPendaftaranUKM_Rectangle55_8} />
		<div className='Group570'>
			{/* File 1 */}
			<input className='File1' placeholder='File 1'
				name="file1"
				type="text"
				defaultValue ={preload.file1}
				onBlur={(e) =>
					dispatch({ type: "file1", upload: e.target.value })
				}
			></input>
			<Button className='button6'
				onClick={() => onSubmitHandler('file1')}
			>
				<div className='dashiconsyesalt'>
					<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
				</div>
			</Button>


			{/* File 2 */}
			<input className='File2' placeholder='File 2'
				name="file2"
				type="text" 
				defaultValue ={preload.file2}
				onBlur={(e) =>
					dispatch({ type: "file2", upload: e.target.value })
				}
			></input>
			<Button className='button7'
				onClick={() => onSubmitHandler('file2')}
			>
				<div className='dashiconsyesalt'>
					<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
				</div>
			</Button>


			{/* File 3 */}
			<input className='File3' placeholder='File 3'
				name="file3"
				type="text" 
				defaultValue ={preload.file3}
				onBlur={(e) =>
					dispatch({ type: "file3", upload: e.target.value })
				}
			></input>
			<Button className='button8'
				onClick={() => onSubmitHandler('file3')}
			>
				<div className='dashiconsyesalt_1'>
					<img className='Vector_9' src = {ImgAsset.AturPendaftaranUKM_Vector_9} />
				</div>
			</Button>

			{/* File 4 */}
			<input className='File4' placeholder='File 4'
				name="file4"
				type="text" 
				defaultValue ={preload.file4}
				onBlur={(e) =>
					dispatch({ type: "file4", upload: e.target.value })
				}
			></input>
			<Button className='button9'
				onClick={() => onSubmitHandler('file4')}
			>
				<div className='dashiconsyesalt_1'>
					<img className='Vector_9' src = {ImgAsset.AturPendaftaranUKM_Vector_9} />
				</div>
			</Button>

		{/* <div className='Group561'>
			<img className='Rectangle56' src = {ImgAsset.AturPendaftaranUKM_Rectangle56} />
			<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />
		</div> */}


		</div>
		
		<Footer/>
	</div>
	)
}