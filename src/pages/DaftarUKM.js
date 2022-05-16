import React from 'react'
import { useState, useEffect, useReducer } from "react";
import '../css/DaftarUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import axios from "axios";
import swal from "sweetalert"
import { Button } from 'react-bootstrap'

const initialState = {
    field1: "",
    field2: "",
	field3: "",
	field4: "",
	field5: "",
	file1: null,
    file2: null,
	file3: null,
    file4: null,
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


export default function DaftarUKM (props) {

	const ukm_id = props.match.params.ukm_id;
	console.log(ukm_id);

	const [ukm, setUKM] = useState([]);
	const [user, setUser] = useState([]);
	const [field, setField] = useState([]);
	
	const [userId, setUserId] = useState(() => {
		const localData = localStorage.getItem("id");
		return localData ? localData : null;
	});

	const textField = [];
	const fileField = [];
	var statusText = false;
	var statusFile = false;

	// Checking Status
	let statusField1 = false;
	let statusField2 = false;
	let statusField3 = false;
	let statusField4 = false;
	let statusField5 = false;

	let statusFile1 = false;
	let statusFile2 = false;
	let statusFile3 = false;
	let statusFile4 = false;

	useEffect(() => {
		axios
		  .get(`${process.env.REACT_APP_BACKEND_URL}ukms/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });
		
		axios
		  .get(`${process.env.REACT_APP_BACKEND_URL}profiles/${userId}`)
		  .then((response) => {
			console.log(response.data.data);
			setUser(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });

		axios
		  .get(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations/field/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setField(response.data.data);


		  })
		  .catch((err) => {
			console.log(err);
		  });
		
	  }, []); 

	  function Capitalize(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	

	if(field.field1 !== null){
		statusField1 = true;
	}
	if(field.field2 !== null){
		statusField2 = true;
	}
	if(field.field3 !== null){
		statusField3 = true;
	}
	if(field.field4 !== null){
		statusField4 = true;
	}
	if(field.field5 !== null){
		statusField5 = true;
	}
	

	if(field.file1 !== null){
		statusFile1 = true;
	}
	if(field.file2 !== null){
		statusFile2 = true;
	}
	if(field.file3 !== null){
		statusFile3 = true;
	}
	if(field.file4 !== null){
		statusFile4 = true;
	}

	useEffect(() => {

			console.log(field.field1)
		
		

		
	  }); 
	  console.log(statusField1);

	const [daftar, dispatch] = useReducer(reducer, initialState)
	const [disable, setDisable] = useState(true);
	
	const onSubmitHandler = (e)=> {
		e.preventDefault();
        setDisable(true);
		const dataForm = new FormData();

		dataForm.append("ukm_id", ukm.id);
		dataForm.append("user_id", user.id);

		if(daftar.field1 !== ""){
			dataForm.append("field1", daftar.field1);
		}
		if(daftar.field2 !== ""){
			dataForm.append("field2", daftar.field2);
		}
		if(daftar.field3 !== ""){
			dataForm.append("field3", daftar.field3);
		}
		if(daftar.field4 !== ""){
			dataForm.append("field4", daftar.field4);
		}
		if(daftar.field5 !== ""){
			dataForm.append("field5", daftar.field5);
		}
		if(daftar.file1 !== null){
			dataForm.append("file1", daftar.file1);
		}
		if(daftar.file2 !== null){
			dataForm.append("file2", daftar.file2);
		}
		if(daftar.file3 !== null){
			dataForm.append("file3", daftar.file3);
		}
		if(daftar.file4 !== null){
			dataForm.append("file4", daftar.file4);
		}

		console.log(dataForm.get('ukm_id'));
		console.log(dataForm.get('user_id'));
		console.log(dataForm.get('field1'));
		console.log(dataForm.get('field2'));
		console.log(dataForm.get('field3'));
		console.log(dataForm.get('field4'));
		console.log(dataForm.get('field5'));
		console.log(dataForm.get('file1'));
		console.log(dataForm.get('file2'));
		console.log(dataForm.get('file3'));
		console.log(dataForm.get('file4'));

		axios
            .post(`${process.env.REACT_APP_BACKEND_URL}ukms/registrations`, dataForm
			)
            .then((response) => {
                setDisable(false);
                swal("Pendaftaran Berhasil")
                console.log(response)
                console.log("Daftar Berhasil")
                window.location.href = "/detailukm/" + ukm_id;
            })
            .catch((err) => {
                swal({
                    title: "Pendaftaran Gagal",
                    icon: "warning",
                    dangerMode: true,
                })
                console.log(err)
            })



	}

    return (
		<div className='DaftarUKM_DaftarUKM'>
		<img className='Rectangle21' src = {ImgAsset.DaftarUKM_Rectangle21} />
		<span className='PendaftaranUnitTaekwondoUnpad'>Pendaftaran {ukm.name}</span>
		<div className='Line7'/>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.DaftarUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.DaftarUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.DaftarUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.DaftarUKM_Vector_3} />
		</div>

		<Navbar/>
		<span className='daftarukm'>DAFTAR UKM</span>

		<div className='grup1'>

			{/* Nama Lengkap */}
			<div className='Group317'>
				<span className='NamaLengkap'>Nama Lengkap</span>
				<input className='InputForm1'
					disabled={true}
					name='name'
					type="text" 
					defaultValue ={user.name}
				/>
			</div>

			{/* NPM */}
			<div className='Group315'>
				<input className='InputForm1'
					disabled={true}
					name='npm'
					type="text" 
					defaultValue ={user.npm}
				/>
				<span className='NPM'>NPM</span>
			</div>

			{/* Angkatan */}
			<div className='Group571'>
				<input className='InputForm1'
				disabled={true}
				name='year'
				type="text" 
				defaultValue ={user.year}
				/>
				<span className='Angkatan'>Angkatan</span>
			</div>

			{/* Fakultas */}
			<div className='Group318'>
				<input className='InputForm1'
					disabled={true}
					name='faculty'
					type="text" 
					defaultValue ={user.faculty}
				/>
				<span className='Fakultas'>Fakultas</span>
			</div>

			{/* Kontak */}
			<div className='Group572'>
				<input className='InputForm1'
				disabled={true}
				name='phone_number'
				type="text" 
				defaultValue ={user.phone_number}
				/>
				<span className='Kontak'>Kontak</span>
			</div>

			{/* Text1 */}
			<div className='formText1'>
				<input className='InputForm1'
					disabled={!statusField1}
					name="field1"
					type="text" 
					placeholder={field.field1 !== null ?("Masukkan " + field.field1):("Tidak Ada")}
					value ={daftar.field1}
					onChange={(e) =>
						dispatch({ type: "field1", upload: e.target.value })
					}
				/>
				<span className='formTitle'>{field.field1 !== null ?(field.field1):("Text 1")}</span>
			</div>

			{/* Text2 */}
			<div className='formText2'>
				<input className='InputForm1'
					disabled={!statusField2}
					placeholder={field.field2 !== null ?("Masukkan " + field.field2):("Tidak Ada")}
					name="field2"
					type="text" 
					value ={daftar.field2}
					onChange={(e) =>
						dispatch({ type: "field2", upload: e.target.value })
					}
				/>
				<span className='formTitle'>{field.field2 !== null ?(field.field2):("Text 2")}</span>
			</div>

			{/* Text3 */}
			<div className='formText3'>
				<input className='InputForm1'
					disabled={!statusField3}
					placeholder={field.field3 !== null ?("Masukkan " + field.field3):("Tidak Ada")}
					name="field3"
					type="text" 
					value ={daftar.field3}
					onChange={(e) =>
						dispatch({ type: "field3", upload: e.target.value })
					}
				/>
				<span className='formTitle'>{field.field3 !== null ?(field.field3):("Text 3")}</span>
			</div>

			{/* Text4 */}
			<div className='formText4'>
				<input className='InputForm1'
					disabled={!statusField4}
					placeholder={field.field4 !== null ?("Masukkan " + field.field4):("Tidak Ada")}
					name="field4"
					type="text" 
					value ={daftar.field4}
					onChange={(e) =>
						dispatch({ type: "field4", upload: e.target.value })
					}
				/>
				<span className='formTitle'>{field.field4 !== null ?(field.field4):("Text 4")}</span>
			</div>

			{/* Text5 */}
			<div className='formText5'>
				<input className='InputForm1'
					disabled={!statusField5}
					placeholder={field.field5 !== null ?("Masukkan " + field.field5):("Tidak Ada")}
					name="field5"
					type="text" 
					value ={daftar.field5}
					onChange={(e) =>
						dispatch({ type: "field5", upload: e.target.value })
					}
				/>
				<span className='formTitle'>{field.field5 !== null ?(field.field5):("Text 5")}</span>
			</div>

			{/* Input File */}

			{/* File1 */}
			<div className='formFile1'>
				<div className='fileContainer'>
					<input className='InputFile'
						disabled={!statusFile1}
						name="file1"
						type="file" 
						accept="image/*"
						onChange={(e) =>
							dispatch({
								type: "file1",
								upload: e.target.files[0],
							})
						}
					/>
				</div>				
				<span className='formTitle'>{field.file1 !== null ?(field.file1):("File 1")}</span>
			</div>

			{/* File2 */}
			<div className='formFile2'>
				<div className='fileContainer'>
					<input className='InputFile'
						disabled={!statusFile2}
						name="file2"
						type="file" 
						accept="image/*"
						onChange={(e) =>
							dispatch({ type: "file2", upload: e.target.files[0], })
						}
					/>
				</div>				
				<span className='formTitle'>{field.file2 !== null ?(field.file2):("File 2")}</span>
			</div>

			{/* File3 */}
			<div className='formFile3'>
				<div className='fileContainer'>
					<input className='InputFile'
						disabled={!statusFile3}
						name="file3"
						type="file" 
						accept="image/*"
						onChange={(e) =>
							dispatch({ type: "file3", upload: e.target.files[0], })
						}
					/>
				</div>				
				<span className='formTitle'>{field.file3 !== null ?(field.file3):("File 3")}</span>
			</div>

			{/* File4 */}
			<div className='formFile4'>
				<div className='fileContainer'>
					<input className='InputFile'
						disabled={!statusFile3}
						name="file4"
						type="file" 
						accept="image/*"
						onChange={(e) =>
							dispatch({ type: "file4", upload: e.target.files[0], })
						}
					/>
				</div>				
				<span className='formTitle'>{field.file4 !== null ?(field.file4):("File 4")}</span>
			</div>

			{/*Input Tambahan */}
			{/* <div className='textFieldContainer'>
			{statusText === true
				? (	textField.map(post => {
					console.log("test")
					return (
						<div className='Frame338_2'>
							<div className='Alltickets_3'>
								<div className='cardsdefault_3'>
									
										<span className='formName'>Angkatan</span>
										<input className='TextForm'
										
										name='year'
										type="text" 
										defaultValue ={user.year}
										/>
										
									
									<div className='Group362_3'>
									
									</div>
								</div>
							</div>
						</div>
					)

				})		
			
			):(<></>)
			
			}
			</div> */}
{/* 
			<div className='Group574'>
				<input className='InputForm2'/>
				<span className='AlasanMasuk'>Alasan Masuk</span>
			</div> */}

			{/* Input File */}

			{/* <div className='Group576'>
				<div className='Group301'>
					<div className='Rectangle19'/>
					<div className='Group313'>
					<div className='Group300'>
						<span className='PilihFile'>Pilih File</span>
					</div>
					<div className='bxupload'>
						<img className='Vector_5' src = {ImgAsset.DaftarUKM_Vector_5} />
						<img className='Vector_6' src = {ImgAsset.DaftarUKM_Vector_6} />
					</div>
					</div>
				</div>
				<span className='ScanKTM'>Scan KTM</span>
			</div>

			<div className='Group577'>
				<div className='Group575'>
					<div className='Rectangle19_1'/>
					<div className='Group313_1'>
						<div className='Group300_1'>
							<span className='PilihFile_1'>Pilih File</span>
						</div>
						<div className='bxupload_1'>
							<img className='Vector_7' src = {ImgAsset.DaftarUKM_Vector_7} />
							<img className='Vector_8' src = {ImgAsset.DaftarUKM_Vector_8} />
						</div>
					</div>
				</div>
				<span className='BuktiPembayaran'>Bukti Pembayaran</span>
		</div> */}


		</div>

		<Link to={`/detailukm/${ukm_id}`}>
			<div className='Group319'>
				<div className='Group580'>
					<Button className='Rectangle19_2'
						disabled={!disable} onClick={onSubmitHandler}
					>
						<div className='Group578'>
							<div className='Group579'>
								<div className='Group320'>
									<div className='Group300_2'>
										<span className='Daftar'>Daftar</span>
									</div>
								</div>
								<div className='akariconsedit'>
									<div className='Group'>
										<img className='Vector_9' src = {ImgAsset.DaftarUKM_Vector_9} />
										<img className='Vector_10' src = {ImgAsset.DaftarUKM_Vector_10} />
									</div>
								</div>
							</div>
						</div>	
					</Button>
					
				</div>
			</div>
		</Link>

		<Link to={`/detailukm/${ukm_id}`}>
			<div className='Group323'>
				<div className='Group384'>
					<div className='Group385'>
						<div className='Group239'>
							<div className='Group294'>
								<div className='Group293'>
									<Button className='Rectangle13'>
										<div className='Group322'>
											<div className='Group321'>
												<span className='Kembali'>Kembali</span>
											</div>
											<img className='Vector_11' src = {ImgAsset.DaftarUKM_Vector_11} />
										</div>
									</Button>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</Link>
		<Footer/>
	</div>
	)

}

