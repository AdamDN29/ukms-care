import { useState, useEffect } from "react";
import '../css/BeritaSingle.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarSetelahLogin from '../components/NavbarSetelahLogin.js'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import { Button } from 'bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import axios from "axios";

function BeritaSingle (props) {
	const { articles_id } = props.match.params;
	console.log(articles_id);

	const [single, setSingle] = useState([]);
	const [ukm, setUKM] = useState([])

	useEffect(() => {
		axios
		  .get(`https://api-ukmscare.herokuapp.com/articles/${articles_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setSingle(response.data.data);
			console.log(response.data.data.ukm);
			setUKM(response.data.data.ukm);
		  })
		  .catch((err) => {
			console.log(err);
		  });
	  }); 



		return (
			<div className='BeritaSingle_BeritaSingle'>
				<NavbarSetelahLogin />
				<div className='Vectors'>
					<img className='Vector' src = {ImgAsset.BeritaSingle_Vector} />
					<img className='Vector_1' src = {ImgAsset.BeritaSingle_Vector_1} />
				</div>
				<div className='Vectors_1'>
					<img className='Vector_2' src = {ImgAsset.BeritaSingle_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.BeritaSingle_Vector_3} />
				</div>
				<div className='Frame367'>
					<span className='Subject'>{single.subject}</span>
				</div>
				<div className='Frame369'>
					<span className='UKM_Name'>{ukm.name}</span>
				</div>
				<div className='Frame370'>
					<span className='Time'>{single.created_at} </span>
				</div>
				<div className='Frame371'>
					<img className='Image' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
				</div>
				<div className='Frame372'>
					<span className='content'>
						{single.content}
					</span>
				</div>
				
				{/* <div className='Group385'>
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
						<img className='Vector_4' src = {ImgAsset.BeritaSingle_Vector_4} />
					</div>
				</div> */}
				
				<Link to='/beritaukmb'>
					<div className='Frame323'>
						<div className='Group384'>
							<div className='Group385_1'>
								<div className='Group239_1'>
									<div className='Group294_1'>
										<div className='Group293_1'>
											<div className='Rectangle13_1'/>
										</div>
									</div>
								</div>
								<ButtonGroup className='Group322_1'>
									<div className='Group321_1'>
										<span className='Kembali_1'>Kembali</span>
									</div>
									<img className='Vector_6' src = {ImgAsset.BeritaSingle_Vector_6} />
								</ButtonGroup>
							</div>
						</div>
					</div>
				</Link>


				< Footer />
			</div>

		)
	
}

export default BeritaSingle;