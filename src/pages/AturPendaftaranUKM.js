import React from 'react'
import '../css/AturPendaftaranUKM.css'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect, useReducer } from "react";
import Switch from "react-switch";
import axios from 'axios';
import BackButton from '../components/BackButton'
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
		const localData = sessionStorage.getItem("id");
		return localData ? localData : null;
	});
	const [checked, setChecked] = useState(true);
	const [preload, setPreLoad] = useState([]);
	const [disabled, setDisabled] = useState(true);

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

	var statusfield1 = false;
	var statusfield2 = false;
	var statusfield3 = false;
	var statusfield4 = false;
	var statusfield5 = false;
	var statusfile1 = false;
	var statusfile2 = false;
	var statusfile3 = false;
	var statusfile4 = false;

	if (preload.field1 !== null){statusfield1 = true;}
	if (preload.field2 !== null){statusfield2 = true;}
	if (preload.field3 !== null){statusfield3 = true;}
	if (preload.field4 !== null){statusfield4 = true;}
	if (preload.field5 !== null){statusfield5 = true;}
	if (preload.file1 !== null){statusfile1 = true;}
	if (preload.file2 !== null){statusfile2 = true;}
	if (preload.file3 !== null){statusfile3 = true;}
	if (preload.file4 !== null){statusfile4 = true;}

	const [data, dispatch] = useReducer(reducer, initialState)
	console.log(data);

	var clearing = "";

	const getPostAPI = () => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/field/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setPreLoad(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});
	}

	function deletePost (namaField){
		Swal.fire({
			icon: "question",
			title: 'Apakah Anda Ingin Menghapus Field Ini ?',
			allowOutsideClick: false,
			allowEscapeKey: false,
			confirmButtonText: 'Ya',
			confirmButtonColor: '#dc3741',
			showDenyButton:true,
			denyButtonText:'Tidak',
			denyButtonColor: '#21c177',
			preConfirm: () => {
				const dataForm = new FormData();
				dataForm.append("ukm_id", userId);
				dataForm.append("name", namaField);
				axios
				.post(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/field/delete`, dataForm)
				.then((response) => {
					console.log(response);
					console.log("Data Dihapus")
					Swal.fire({
							icon: 'success',
							title: 'Field ' + namaField + ' Berhasil Dihapus',
							allowOutsideClick: false,
							allowEscapeKey: false,
							confirmButtonText: 'OK',
							confirmButtonColor: '#21c177',
						});
					getPostAPI();
				})
				.catch((err) => {
					console.log(err);
					Swal.fire({
						title: "Gagal Menghapus Field",
						icon: "warning",
						dangerMode: true,
				})				
				})	
			},
			preDeny: () => {
				console.log("Data Tidak Dihapus")
				return;
			}
		});	
	}

	function failFill (){
		Swal.fire({
			icon: 'warning',
			title: 'Isi Nama Field !',
			allowOutsideClick: false,
			allowEscapeKey: false,
			confirmButtonText: 'OK',
			confirmButtonColor: '#21c177',
		});
	}

	function onSubmitHandler (temp){
        // e.preventDefault();
		console.log(temp);
        const dataForm = new FormData();

		dataForm.append("ukm_id", userId);

		dataForm.append("name", temp);
		console.log("Upload " + temp);

		if(temp === "field1"){
			if(data.field1 !== ""){
				dataForm.append("value", data.field1);
			}else{failFill(); return;}		
		} 

		if(temp === "field2"){
			if(data.field2 !== ""){
				dataForm.append("value", data.field2);
			}else{failFill(); return;}
		}

		if(temp === "field3"){
			if(data.field3 !== ""){
				dataForm.append("value", data.field3);
			}else{failFill(); return;}
		}
		if(temp === "field4"){
			if(data.field4 !== ""){
				dataForm.append("value", data.field4);
			}else{failFill(); return;}
		}
		if(temp === "field5"){
			if(data.field5 !== ""){
				dataForm.append("value", data.field5);
			}else{failFill(); return;}
		}
		if(temp === "file1"){
			if(data.file1 !== ""){
				dataForm.append("value", data.file1);
			}else{failFill(); return;}
		}
		if(temp === "file2"){
			if(data.file2 !== ""){
				dataForm.append("value", data.file2);
			}else{failFill(); return;}
		}
		if(temp === "file3"){
			if(data.file3 !== ""){
				dataForm.append("value", data.file3);
			}else{failFill(); return;}
		}
		if(temp === "file4"){
			if(data.file4 !== ""){
				dataForm.append("value", data.file4);
			}else{failFill(); return;}
		}

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/field/add`, dataForm
			)
            .then((response) => {
				console.log(response)
                Swal.fire({
					icon: 'success',
					title: 'Atur Pendaftaran Berhasil',
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonText: 'OK',
					confirmButtonColor: '#21c177',
				});
				getPostAPI();
                
                console.log("berhasil")
            })
            .catch((err) => {
				console.log(err);
				Swal.fire({
						title: "Gagal Mengatur Pendaftaran",
						icon: "warning",
						dangerMode: true,
				})
				
            })
    }

	const statusHandle = () => {
		Swal.fire({
			title: 'Ubah Status Pendaftaran ?',
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
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
				setChecked(!checked);
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
		
		<Link to='/listpendaftarukm'>
			<BackButton/>
		</Link> 
		<span className='AturPendaftaranUKM_1'>Atur Pendaftaran UKM</span>
		
		
		<span className='PendaftaranUKM'>Pendaftaran UKM</span>
		<div className='Rectangle57'>
			<Switch onChange={statusHandle} checked={checked} checkedIcon={false} height={40} width={80} className="SwitchStatus"/>
		</div>
		<span className='status'>{checked === true ?("Aktif"):("Tidak Aktif")}</span>


		<span className='Teks'>Text</span>
		
		{/* Default */}
		
		<div className='grup1'>
		
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
			disabled={statusfield1}
			type="text"
			placeholder="Text 1"
			name="field1"
			Value ={preload.field1}
			onBlur={(e) =>
				dispatch({ type: "field1", upload: e.target.value })
			}
		></input>

		{statusfield1 === true ?(
				<Button className='btnDel button1'
				onClick={() => deletePost('field1')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button1'
					onClick={() => onSubmitHandler('field1')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
			)
		}


	
		{/* Field 2 */}

		<input className='field2'
			disabled={statusfield2}
			type="text"
			placeholder="Text 2"
			name="field2"
			defaultValue ={preload.field2}
			onBlur={(e) =>
				dispatch({ type: "field2", upload: e.target.value })
			}
		></input>

		{statusfield2 === true ?(
				<Button className='btnDel button2'
				onClick={() => deletePost('field2')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button2'
					onClick={() => onSubmitHandler('field2')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
			)
		}

		{/* Field 3 */}

		<input className='field3'
			disabled={statusfield3}
			type="text"
			placeholder="Text 3"
			name="field3"
			defaultValue ={preload.field3}
			onBlur={(e) =>
				dispatch({ type: "field3", upload: e.target.value })
			}
		></input>
		{/* <Button className='button3'
			onClick={() => onSubmitHandler('field3')}
		>
			<div className='dashiconsyesalt'>
				<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
			</div>
		</Button>
		 */}
		{statusfield3 === true ?(
				<Button className='btnDel button3'
				onClick={() => deletePost('field3')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button3'
					onClick={() => onSubmitHandler('field3')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
			)
		}


		<input className='field4'
			disabled={statusfield4}
			type="text"
			placeholder="Text 4"
			name="field4"
			defaultValue ={preload.field4}
			onBlur={(e) =>
				dispatch({ type: "field4", upload: e.target.value })
			}
		></input>

		{statusfield4 === true ?(
				<Button className='btnDel button4'
				onClick={() => deletePost('field4')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button4'
					onClick={() => onSubmitHandler('field4')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
			)
		}

		<input className='field5'
			disabled={statusfield5}
			type="text"
			placeholder="Text 5"
			name="field5"
			defaultValue ={preload.field5}
			onBlur={(e) =>
				dispatch({ type: "field5", upload: e.target.value })
			}
		></input>
		{statusfield5 === true ?(
				<Button className='btnDel button5'
				onClick={() => deletePost('field5')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button5'
					onClick={() => onSubmitHandler('field5')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
			)
		}

		</div>

		
		{/* File */}
		<span className='File'>Image</span>
		
	
		<img className='Rectangle55_8' src = {ImgAsset.AturPendaftaranUKM_Rectangle55_8} />
		<div className='Group570'>
			{/* File 1 */}
			<input className='File1' placeholder='Image 1'
				disabled={statusfile1}
				name="file1"
				type="text"
				defaultValue ={preload.file1}
				onBlur={(e) =>
					dispatch({ type: "file1", upload: e.target.value })
				}
			></input>
			{statusfile1 === true ?(
				<Button className='btnDel button6'
				onClick={() => deletePost('file1')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button6'
					onClick={() => onSubmitHandler('file1')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
				)
			}


			{/* File 2 */}
			<input className='File2' placeholder='Image 2'
				disabled={statusfile2}
				name="file2"
				type="text" 
				defaultValue ={preload.file2}
				onBlur={(e) =>
					dispatch({ type: "file2", upload: e.target.value })
				}
			></input>
			{statusfile2 === true ?(
				<Button className='btnDel button7'
				onClick={() => deletePost('file2')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button7'
					onClick={() => onSubmitHandler('file2')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
				)
			}


			{/* File 3 */}
			<input className='File3' placeholder='Image 3'
				disabled={statusfile3}	
				name="file3"
				type="text" 
				defaultValue ={preload.file3}
				onBlur={(e) =>
					dispatch({ type: "file3", upload: e.target.value })
				}
			></input>
			{statusfile3 === true ?(
				<Button className='btnDel button8'
				onClick={() => deletePost('file3')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button8'
					onClick={() => onSubmitHandler('file3')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
				)
			}

			{/* File 4 */}
			<input className='File4' placeholder='Image 4'
				disabled={statusfile4}
				name="file4"
				type="text" 
				defaultValue ={preload.file4}
				onBlur={(e) =>
					dispatch({ type: "file4", upload: e.target.value })
				}
			></input>
			{statusfile4 === true ?(
				<Button className='btnDel button9'
				onClick={() => deletePost('file4')}
				>		
					<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />			
				</Button>
			):(
				<Button className='button9'
					onClick={() => onSubmitHandler('file4')}
				>
					<div className='dashiconsyesalt'>
						<img className='Vector_6' src = {ImgAsset.AturPendaftaranUKM_Vector_6} />
					</div>
				</Button>
				)
			}

		{/* <div className='Group561'>
			<img className='Rectangle56' src = {ImgAsset.AturPendaftaranUKM_Rectangle56} />
			<img className='Vector_5' src = {ImgAsset.AturPendaftaranUKM_Vector_5} />
		</div> */}


		</div>
		
		<Footer/>
	</div>
	)
}