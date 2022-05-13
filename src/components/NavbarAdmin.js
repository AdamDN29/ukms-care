import React from 'react'
import '../css/NavbarAdmin.css'
import * as SVGAsset from '../SVG/index'
import {Link} from 'react-router-dom'
import { loginAPI } from "../API/authAPI";
import { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import Cookies from "js-cookie";
import ImgAsset from '../resources'

export default function NavbarAdmin (props) {

    return (
		<div className='NavbarAdmin'>
			{/* 
			<div className='frame1'>
				<div className='frame2'>
					<div className='navbar1'>

						<div className='grup1'>
							<div className='pageheader1'>
								<div className='pageheader2'>
									<div className='color'>
									</div>
									<span className='guideline'>Project DESIGN Guidelines</span>
									<span className='_2020'></span>
								</div>
							</div>
						</div>
						
						<div className='frame3'>
							<Link to='/HomepageA_1'><img className='logo1' src = {ImgAsset.ukms_care_logo} /></Link>
						</div>


						<div className='frame4'>
                            <Link to='/dashboardukmb' className="link"><span className='Dashboard'>Dashboard</span></Link>
                            <Link to='/ukmunpada' className="link"><span className='UKMUnpad'>UKM Unpad</span></Link>
							<Link to='/beritaukmb' className="link"><span className='BeritaUKM'>Berita UKM</span></Link>
						</div>

						<div>

						</div>
						<div className='frame5'>
							<img className='Avatar' src = {ImgAsset.Avatar} />
						</div>
						
					</div>
				</div>
			</div>
			*/}	
		</div>
	)
}