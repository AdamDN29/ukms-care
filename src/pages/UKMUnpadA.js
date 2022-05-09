import React from 'react'
import '../css/UKMUnpadA.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarUser from '../components/NavbarUser.js'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import UKMPost from '../components/UKMPost'
import SearchBerita from '../components/SearchBerita'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import axios from 'axios';

class UKMUnpadA extends Component{
	state = {
		post: []
		
	}

	componentDidMount(){
		axios.get('https://api-ukmscare.herokuapp.com/ukms')
		.then((response)=>{
			console.log(response.data.data);
			this.setState({
				post: response.data.data
			})
		})

	}


render() {
    return (
	<div className='UKMUnpadA_UKMUnpadA'>
		<NavbarUser />
		{/*Sisi Kiri*/}
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.UKMUnpadA_Vector} />
			<img className='Vector_1' src = {ImgAsset.UKMUnpadA_Vector_1} />
		</div>
		{/*Sisi Kanan*/}
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.UKMUnpadA_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.UKMUnpadA_Vector_3} />
		</div>

		{/*pilih kategori*/}
		<div className='Group365'>
			<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic" className='Group359'>
							<div className='Group358'>
								<div className='Rectangle30'/>
								<div className='Rectangle31'/>
								<div className='Rectangle32'/>
								<div className='Rectangle33'/>
								<div className='Rectangle34'/>
								<div className='Rectangle35'/>
								<div className='Rectangle36'/>
								<div className='Rectangle37'/>
								<div className='Rectangle38'/>
							</div>
							<span className='Kategori'>Kategori</span>
							<img className='Icon1' src={ImgAsset.SegitigaSearch}/>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Olahraga</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Beladiri</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			
			{/* search */}
		{/* <div className='Group2'>
			<div className='Rectangle3'/>
				<span className='Search'>Search</span>
				<div className='evasearchoutline'>
					<img className='Vector_4' src = {ImgAsset.UKMUnpadA_Vector_4} />
				</div>
			</div>
			<div className='Group360'>
				<div className='Rectangle39'/>
				<span className='Search_1'>Search</span>
			</div> */}
			<input className='Frame2' placeholder='Search'></input>
				
			<Button className='Frame360' placeholder='Search'>
				<p className='searchText'>Search</p>
			</Button>	
		</div>

		
		{/* <SearchBerita/> */}

		<span className='UNITKEGIATANMAHASISWA'>UNIT KEGIATAN MAHASISWA</span>
		{/* <div classname="row">
			<div classname="col-sm-12">
				<div classname="card-deck">
				<div classname="card">
					<img src={ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} classname="card-img-top" alt="gambar" />
					<div classname="card-body">
					<h5 classname="card-title">Card title</h5>
					<p classname="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
					</div>
					<div classname="card-footer">
					<small classname="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
				<div classname="card">
					<img src={ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} classname="card-img-top" alt="gambar" />
					<div classname="card-body">
					<h5 classname="card-title">Card title</h5>
					<p classname="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
					</div>
					<div classname="card-footer">
					<small classname="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
				<div classname="card">
					<img src={ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} classname="card-img-top" alt="gambar" />
					<div classname="card-body">
					<h5 classname="card-title">Card title</h5>
					<p classname="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
					</div>
					<div classname="card-footer">
					<small classname="text-muted">Last updated 3 mins ago</small>
					</div>
				</div>
				</div>
			</div>
		</div> */}

		<Row xs={1} md={3} className="UKMRow">
		{
			this.state.post.map(post => {
				return <UKMPost key={post.id} ukm_id={post.id} ukm_name={post.name} />
			})
		}
		</Row>

		{/*UKM 1*/}
		{/* <div className='Group309'>
			<img className='Rectangle8' src = {ImgAsset.UKMUnpadA_Rectangle8} />
			<img className='taekwondoremovebgpreview3' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
			<span className='UNITTaekwondoUnpad'>Unit Taekwondo Unpad </span>
		</div> */}


		{/*UKM 2*/}
		{/* <div className='Group310'>
			<img className='Rectangle9' src = {ImgAsset.UKMUnpadA_Rectangle9} />
			<span className='UKMBridgeUnpad'>Bridge Unpad</span>
		</div> */}

		{/*UKM 3*/}
		{/* <img className='Rectangle8_1' src = {ImgAsset.UKMUnpadA_Rectangle8_1} />
		<span className='PALAWAUNPAD'>Palawa Unpad</span>
		<img className='bridgeremovebgpreview3' src = {ImgAsset.UKMUnpadB_bridgeremovebgpreview5} /> */}
		
		{/*UKM 4*/}
		{/* <div className='Group311'>
			<img className='Rectangle8_2' src = {ImgAsset.UKMUnpadA_Rectangle8_2} />
			<img className='Rectangle9_1' src = {ImgAsset.UKMUnpadA_Rectangle9_1} />
			<span className='UNITTaekwondoUnpad_1'>Unit Taekwondo Unpad </span>
		</div> */}

		{/*UKM 5*/}
		{/* <div className='Group312'>
			<span className='UKMBridgeUnpad_1'>Bridge Unpad</span>
		</div>
		<img className='taekwondoremovebgpreview6' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
		<img className='bridgeremovebgpreview4' src = {ImgAsset.UKMUnpadB_bridgeremovebgpreview5} /> */}
		
		{/*UKM 6*/}
		{/* <div className='Group313'>
		<img className='Rectangle8_3' src = {ImgAsset.UKMUnpadA_Rectangle8_3} />
		<img className='Rectangle9_2' src = {ImgAsset.UKMUnpadA_Rectangle9_2} />
		<span className='UNITTaekwondoUnpad_2'>Unit Taekwondo Unpad </span>
		</div> */}

		{/*UKM 7*/}
		{/* <div className='Group314'>
			<span className='UKMBridgeUnpad_2'>Bridge Unpad</span>
		</div>
		<img className='taekwondoremovebgpreview8' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
		<img className='bridgeremovebgpreview5' src = {ImgAsset.UKMUnpadB_bridgeremovebgpreview5} /> */}
		
		{/*UKM 9*/}
		{/* 
		<img className='palawa1' src = {ImgAsset.UKMUnpadB_palawa2} />
		<img className='Rectangle12' src = {ImgAsset.UKMUnpadA_Rectangle12} />
		<span className='PALAWAUNPAD_1'>Palawa Unpad</span>
		<img className='palawa2' src = {ImgAsset.UKMUnpadB_palawa2} /> */}

		
		{/*Footer*/}
		<Footer/>

	</div>
	)
}
}

export default UKMUnpadA;