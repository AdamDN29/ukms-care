import React from 'react'
import '../css/Navbar.css'
import * as SVGAsset from '../SVG/index'
import {Link} from 'react-router-dom'
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

export default function Navbar () {

	// Navbar State Handler

	const [userRole, setUserRole] = useState(() => {
		const localData = localStorage.getItem("role");
		return localData ? localData : null;
	});
	const [userId, setUserId] = useState(() => {
		const localData = localStorage.getItem("id");
		return localData ? localData : null;
	});

	var isLoggedIn = false;
	
	// For Checking userRole
	const admin = '1';

	// Change var isLoggedIn
	if(userRole !== null){
		var isLoggedIn = true;
	}

	// logout handler
	const logoutHandler = () => {
		swal({
			title: "Anda Telah Logout",
			type: "succes",
		})
		localStorage.clear();
		window.location.href = "/homepage/";
		// Cookies.remove("jwt", { path: "" });
	  };
	
    return (
		<div className='Navbar'>	

		{isLoggedIn === false ? (
				// Navbar Sebelum Login 
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
								<Link to='/homepage'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
							</div>
							<div className='Frame238'>
								<Link to='/ukmunpad/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
								<Link to='/beritaukm/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>					
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
			):( <div>
				{ userRole === admin ? (
					<div> {/*Admin*/} 
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
										<Link to='/Homepage'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
									</div>
									<div className='Frame238'>
										<Link to='/dashboardukm' className="link"><span className='Dashboard'>Dashboard</span></Link>
										<Link to='/ukmunpad/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
										<Link to='/beritaukm/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
										
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
												<Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
											</Dropdown.Menu>
										
										</Dropdown>
									</div>
								</div>
							</div>
						</div>
					</div>
					):(
					<div>
						{/*User Sudah Login*/} 
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
										<Link to='/homepage'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
									</div>
									<div className='Frame238'>
										<Link to='/ukmunpad/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
										<Link to='/beritaukm/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
										
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
												<Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
											</Dropdown.Menu>
										
										</Dropdown>
									</div>
								</div>
							</div>
						</div>

					</div>
					)

				}
				</div>	
			)



		}
			
		</div>
	)
}