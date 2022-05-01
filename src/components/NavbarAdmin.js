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
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
  } from "reactstrap";

export default function NavbarAdmin (props) {

    return (
		<div className='Navbar'>	
			<div className='Frame382'>
				<div className='Frame368'>
					<div className='Navbar1'>

						<div className='Group222'>
							<div className='PageHeaderSecondary_1'>
								<div className='PageHeader_1'>
									<div className='ColorsSecondary_1'>
									</div>
									<span className='ProjectBrandGuidelines_1'>Project DESIGN Guidelines</span>
									<span className='_2020_1'></span>
								</div>
							</div>
						</div>
						
						<div className='Frame375'>
							{/* <img className='logo' src = {ImgAsset.ukms_care_logo} /> */}
							<Link to='/HomepageA_1'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
						</div>


						<div className='Frame238'>
                            <Link to='/dashboardukmb' className="link"><span className='Dashboard'>Dashboard</span></Link>
                            <Link to='/ukmunpada' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
							<Link to='/beritaukmb' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
						</div>

						<div>

						</div>
						<div className='Frame376'>
							<img className='Avatar' src = {ImgAsset.Avatar} />
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}