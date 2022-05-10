import React from 'react'
import '../css/NavbarUser.css'
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

export default function NavbarUser (props) {
	// const [appState, toggles, modal] = UseNavbar();
	// const [dropdownOpenProfile, setDropdownOpenProfile] = useState(false);
	// const [toggleNav, setToggleNav] = useState(false);
	// const toggleProfile = () => setDropdownOpenProfile((prevState) => !prevState);
	// const [modalLogin, setModalLogin] = useState(false);
	// const [username, password, usernameHandler, passwordHandler] = UseLogin();
	// const [userRole, setUserRole] = useState(() => {
	// 	const localData = localStorage.getItem("role");
	// 	return localData ? JSON.parse(localData) : null;
	// });
	// const [userId, setUserId] = useState(() => {
	// 	const localData = localStorage.getItem("id");
	// 	// return localData ? JSON.parse(localData) : null;
	// });
	//   const [email, setEmail] = useState(() => {
	// 	const localData = localStorage.getItem("email");
	// 	return localData ? JSON.parse(localData) : null;
	//  });
	//   const [jwt, setJwt] = useState(() => {
	// 	const cookie = Cookies.get("jwt");
	// 	return cookie ? cookie : false;
	//  });
	//   const toggleLogin = () => {
	// 	setModalLogin(!modalLogin);
	//  };
	
	//   const login = () => {
	// 	const payload = {
	// 	  email: username,
	// 	  password: password,
	// 	};
	// 	loginAPI
	// 		.post("/login", payload,{
	// 			withCredentials: true
	// 		})
	// 		.then((response) => {
	// 			console.log(response);
	// 			if (response.status === 200) {
	// 				if (response.data.errors.message == "Email belum terdaftar") {
	// 					swal({
	// 					title: "Email belum terdaftar",
	// 					icon: "warning",
	// 					dangerMode: true,
	// 				});
	// 			} else if (
	// 				response.data.errors.message == "Email dan password tidak cocok"
	// 			) {
	// 				swal({
	// 					title: "Email dan password tidak cocok",
	// 					icon: "warning",
	// 					dangerMode: true,
	// 				});
	// 			} else {
	// 				swal({
	// 					title: "Harap Isi Data Terlebih Dahulu",
	// 					icon: "warning",
	// 					dangerMode: true,
	// 				});
	// 			}
	// 		} else {
	// 		  swal("Selamat Anda Berhasil Login");
	// 			console.log(response);
	// 			setEmail(response.data.email);
	// 			setJwt(response.data.jwt);
	// 			setUserRole(response.data.role);
	// 			setUserId(response.data.user);
	// 		}
	// 	  })
	// 	  .catch((err) => {
	// 		console.log(err);
	// 	  });
	//   };
	
	// const enterSumbit = (e) => {
	// 	if (e.keyCode === 13) {
	// 	  console.log("enter login");
	// 	  login();
	// 	  toggleLogin();
	// 	}
	// };

	// useEffect(() => {
	// 	const userId = props.idUser;
	// 	console.log(props.idUser);
	// 	if (jwt === false && userId == null && email == null) {
	// 	  Cookies.remove("jwt", { path: "" });
	// 	  localStorage.clear();
	// 	} else {
	// 	  Cookies.set("jwt", jwt, { path: "" });
	// 	  localStorage.setItem("id", JSON.stringify(userId));
	// 	  localStorage.setItem("email", JSON.stringify(email));
	// 	  localStorage.setItem("role", JSON.stringify(userRole));
	// 	}
	// }, [userId, props, jwt, email, userRole]);
	
	// const logoutHandler = () => {
	// 	localStorage.clear();
	// 	window.location.href = "/";
	// 	Cookies.remove("jwt", { path: "" });
	// }; 

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
							<Link to='/HomepageA_1'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
						</div>
						<div className='Frame238'>
							<Link to='/ukmunpada/ukms' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
							{/* <Link to='/beritaukmb/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link> */}
							<Link to='/beritaukmb/articles' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
							
						</div>
						<div>
							{/* {userId === null ? (
								
								<div className='Group235'>
									<div className='Loginbtn'>
										<div className='Rectangle'/>
										<span className='login'>login</span>
									</div>
									<div className='Loginbtn_1'>
										<div className='Rectangle_1'/>
										<span className='Register'>Register</span>
									</div>
								</div>
								<div className="nav-item">
								  <div className="udlite-btn ">
									<button
									  className="btn btn-login mx-1 "
									  onClick={toggleLogin}
									  type="button"
									>
									  {" "}
									  <strong>Login</strong>
									</button>
									<button
									  className="btn btn-daftar mx-1"
									  onClick={toggles}
									  type="button"
									>
									  {" "}
									  <strong>Daftar</strong>{" "}
									</button>
								  </div>
								</div>
							  ) : (
								<Dropdown isOpen={dropdownOpenProfile} toggle={toggleProfile}>
								  <DropdownToggle color="">
									<Link className="nav-link" to="#">
									  <img
										width="30px"
										height="30px"
										src="https://sunnybrook.ca/uploads/1/programs/trauma-emergency-care/rtbc/anonymous3.png"
										alt="profile"
									  />
									</Link>
								  </DropdownToggle>
								  <DropdownMenu right className="dropdown-menu">
									<Link
									  style={{ textDecoration: "none", color: "black" }}
									  to="/profile"
									>
									  <DropdownItem>Profile, {userId}</DropdownItem>
									</Link>
									<Link
									  style={{ textDecoration: "none", color: "black" }}
									  to="/toko"
									>
									  <DropdownItem>Toko</DropdownItem>
									</Link>
									<Link
									  style={{ textDecoration: "none", color: "black" }}
									  to="/tokoInvoice"
									>
									  <DropdownItem>Invoice Penjualan</DropdownItem>
									</Link>
									<Link
									  style={{ textDecoration: "none", color: "black" }}
									  to="/invoicePembeli"
									>
									  <DropdownItem>Invoice Pembelian</DropdownItem>
									</Link>
									<Link>
									  <DropdownItem onClick={logoutHandler}>
										Logout
									  </DropdownItem>
									</Link>
								  </DropdownMenu>
								</Dropdown>
							  )} */}

						

						</div>
						

						<div className='Dropdown'>
							<Dropdown >
								<Dropdown.Toggle variant='none' id="dropdown-autoclose-true" className='Toggle'>
									{/* <div className='cover'></div> */}
									<img className='Avatar' src = {ImgAsset.Avatar} />	
								</Dropdown.Toggle>

								
								<Dropdown.Menu align='start' className='Menu'>
									<Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
								</Dropdown.Menu>
							
							</Dropdown>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}