import React from 'react'
import '../css/Navbar.css'
import * as SVGAsset from '../SVG/index'
import {Link} from 'react-router-dom'
import UseNavbar from "../hook/UseNavbar";
import UseLogin from "../hook/UseLogin";
import SigninUser from '../pages/SigninUser'
import SignupUser from '../pages/SignupUser'
import { loginAPI } from "../API/authAPI";
import { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import swal from "sweetalert";
import Cookies from "js-cookie";
import ImgAsset from '../resources'
import { Dropdown } from 'react-bootstrap'
// import {
// 	Dropdown,
// 	DropdownToggle,
// 	DropdownMenu,
// 	DropdownItem,
//   } from "reactstrap";

export default function Navbar (props) {

    return (
		<div className='Navbar'>	

			{/*Admin*/} {/* 
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
							<Link to='/HomepageA_1'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
						</div>
						<div className='Frame238'>
							<Link to='/dashboardukmb' className="link"><span className='Dashboard'>Dashboard</span></Link>
							<Link to='/ukmunpada/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
							<Link to='/beritaukmb/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
							
						</div>
						<div>

						</div>
						

						<div className='Dropdown'>
							<Dropdown >
								<Dropdown.Toggle variant='none' id="dropdown-autoclose-true" className='Toggle'>
									
									<img className='Avatar' src = {ImgAsset.Avatar} />	
								</Dropdown.Toggle>

								
								<Dropdown.Menu align='start' className='Menu'>
									<Dropdown.Item href="/profileuser">Profile</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
								</Dropdown.Menu>
							
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
			*/}
			

			{/*User Sudah Login*/} {/*
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
							<Link to='/HomepageA_1'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
						</div>
						<div className='Frame238'>
							<Link to='/ukmunpada/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
							<Link to='/beritaukmb/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
							
						</div>
						<div>

						</div>
						

						<div className='Dropdown'>
							<Dropdown >
								<Dropdown.Toggle variant='none' id="dropdown-autoclose-true" className='Toggle'>
									
									<img className='Avatar' src = {ImgAsset.Avatar} />	
								</Dropdown.Toggle>

								
								<Dropdown.Menu align='start' className='Menu'>
									<Dropdown.Item href="/profileuser">Profile</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
								</Dropdown.Menu>
							
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
			 */}

			{/*User Belum Login*/}
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
							<Link to='/HomepageA_1'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
						</div>
						<div className='Frame238'>
							<Link to='/ukmunpada/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
							<Link to='/beritaukmb/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
							
						</div>
						<div>

						</div>
						

						<div className='Dropdown2'>
							<Dropdown >
								<Dropdown.Toggle variant='none' id="dropdown-autoclose-true" className='Toggle'>
									<div className='Rectangle1'/>
									<span className='Login'>Login</span>
								</Dropdown.Toggle>
								<div className='Rectangle2'/>
								<Link to='/SignupUser' className="link"><span className='Register'>Register</span></Link>	

								
								<Dropdown.Menu align='start' className='Menu2'>
									<Dropdown.Item href="/SigninAdmin">Admin</Dropdown.Item>
									<Dropdown.Item href="/SigninUser">Mahasiswa</Dropdown.Item>
								</Dropdown.Menu>
							
							</Dropdown>
						</div>
					</div>
				</div>
			</div>



		</div>
	)
}