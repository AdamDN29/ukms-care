import React, { useEffect } from 'react'
import '../css/BuatBeritaUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import { useReducer, useState } from "react"
import { useHistory } from "react-router-dom"
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import axios, { Axios } from 'axios'
import swal from "sweetalert"
import { Button } from 'react-bootstrap'
import BackButton from '../components/BackButton'

const Swal = require('sweetalert2');

const initialState = {
    subject: "",
    content: "",
    image: null,
}

const reducer = (currentState, action) => {
    switch (action.type) {
        case "subject":
            return { ...currentState, subject: action.upload };
        case "content":
            return { ...currentState, content: action.upload };
        case "image":
            return { ...currentState, image: action.upload };
        default:
            return currentState;
    }
}

export default function BuatBeritaUKM (props) {
	const userId = props.location.state.userId;
	console.log(userId);

	let history = useHistory();

    const [artikel, dispatch] = useReducer(reducer, initialState)
	
    const [disable, setDisable] = useState(false);
	
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const dataForm = new FormData();
		dataForm.append("ukm_id", userId);

		if(artikel.subject !== ""){
			dataForm.append("subject", artikel.subject);
		}else{
			swal({
				title: "Silahkan Isi Judul Berita",
				icon: "warning",
				dangerMode: true,
			})
			return;
		}

		if(artikel.image !== null){
			dataForm.append("image", artikel.image);
		}else{
			swal({
				title: "Silahkan Pilih Gambar Berita",
				icon: "warning",
				dangerMode: true,
			})
			return;
		}
		
		if(artikel.content !== ""){
			dataForm.append("content", artikel.content);
		}else{
			swal({
				title: "Silahkan Isi Berita",
				icon: "warning",
				dangerMode: true,
			})
			return;
		}

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}articles`, dataForm
			)
            .then((response) => {
                setDisable(false);
				console.log(response)
                console.log("berhasil")
				setDisable(true);
				Swal.fire({
					icon: 'success',
					title: 'Berita Berhasil Dibuat',
					allowOutsideClick: false,
					allowEscapeKey: false,
					confirmButtonColor: '#21c177',
					preConfirm: () => {
						history.push({pathname:'/listberitaukm', state:{userId}})
					}	  
				}) 		        
                
            })
            .catch((err) => {
                swal({
                    title: "Gagal membuat berita",
                    icon: "warning",
                    dangerMode: true,
                })
                console.log(err)
            })
    }


	return (
		
	<div className='BuatBeritaUKM_BuatBeritaUKM'>
		<Link to='/listberitaukm'>
			<BackButton/>
		</Link> 
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.BuatBeritaUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.BuatBeritaUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.BuatBeritaUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.BuatBeritaUKM_Vector_3} />
		</div>
		<Navbar/>
		

		<span className='Buatberitaukm'>Buat Berita UKM</span>
	
		<div className='Rectangle21'/>
		{/* Judul Berita */}
			
			<div className='Group314'>
				<input className='Rectangle1'
					disabled={disable}
					name="subject"
					type="text"
					value={artikel.subject}
					placeholder="Isi Judul Berita"
					onChange={(e) =>
						dispatch({ type: "subject", upload: e.target.value })
					}
				/>
				<span className='JudulBerita'>Judul Berita</span>
			</div>

		{/* Gambar Berita */}
		<span className='CoverBerita'>Gambar Berita</span>
		<div className='Group301'>
			<input className='uploadFile'
				 disabled={disable}
				 name="image"
				 accept="image/*"
				 onChange={(e) =>
					 dispatch({
						 type: "image",
						 upload: e.target.files[0],
					 })
				 }
				 type="file"
			> 
			</input>
			
		</div>
		
		
		{/* <div className='Rectangle58'/> */}
		<span className='IsiBerita'>Isi Berita</span>
		<div className='containerIsiBerita'>
			<textarea className='Rectangle59'
				disabled={disable}
				name="content" id="content" rows={30} cols={10}
				value={artikel.content}
				placeholder="Isi Berita"

				onChange={(e) =>
					dispatch({ type: "content", upload: e.target.value })
				
				}
				style={{whiteSpace: "pre-line"}}
			/>
		</div>
		
		
		
		<div className='Group239'>
			<div className='Group294'>
				<div className='Group293'>
					<Button className='Rectangle13' 
						disabled={disable} onClick={onSubmitHandler}
					> 
						<div className='Group291'>
							<span className='PostBerita'>Post Berita</span>
							<div className='akariconsedit'>
								<div className='Group'>
									<img className='Vector_11' src = {ImgAsset.BuatBeritaUKM_Vector_11} />
									<img className='Vector_12' src = {ImgAsset.BuatBeritaUKM_Vector_12} />
								</div>
							</div>
						</div>
					</Button>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
	)

}
