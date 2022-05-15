import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import ListPages from '../pages/index';
import AboutUs from '../pages/AboutUs';
import HomepageA_1 from '../pages/HomepageA_1';
import UKMUnpadA from '../pages/UKMUnpadA';
import BeritaUKMB from '../pages/BeritaUKMB';
import BeritaSingle from '../pages/BeritaSingle';
import SigninUser from '../pages/SigninUser';
import SignupUser from '../pages/SignupUser';
import DetailUKMA from '../pages/DetailUKMA';
import ProfileUser from '../pages/ProfileUser';
import DaftarUKM from '../pages/DaftarUKM';
import EditProfileUser from '../pages/EditProfileUser';
import SigninAdmin from '../pages/SigninAdmin';
import DashboardUKMB from '../pages/DashboardUKMB';
import EditProfileUKM from '../pages/EditProfileUKM';
import AturPendaftaranUKM from '../pages/AturPendaftaranUKM';
import BuatBeritaUKM from '../pages/BuatBeritaUKM';
import ListPendaftarUKMAdminUKM from '../pages/ListPendaftarUKMAdminUKM';
import ListBeritaUKMAdminUKM from '../pages/ListBeritaUKMAdminUKM';
import EditBeritaUKM from '../pages/EditBeritaUKM';


function RouterDOM () {
	const [idUser, setIdUser] = useState(false);

	const localDataRole = localStorage.getItem("role");
	const localDataID = localStorage.getItem("id");
	const localDataEmail = localStorage.getItem("user");
	console.log(localDataRole);
	console.log(localDataID);
	console.log(localDataEmail);

	const data = {
		"role" : localDataRole,
		"id" : localDataID,
		"email" : localDataEmail
	}

	// const getId = (id) => {
	// 	setIdUser(id);
	// };
	// console.log(idUser);

	return (
		<Router>
			{/* <NavbarUser idUser={(id) => getId(id)} /> */}
			<Switch>
				{/* <Route exact path="/"><ListPages /></Route> */}
				{/* <Route exact path="/"><HomepageA_1 /></Route> */}
				{/* <Route
					path="/"
					exact
					component={() => <HomepageA_1 idUser={idUser} />}
			  	></Route> */}
				{/* <Route
					path="/profileuser"
					component={() => <ProfileUser idUser={idUser} />}
				></Route>
				<Route
					path="/editprofileuser"
					component={() => <EditProfileUser idUser={idUser} />}
				></Route> */}
				{/* <Route path="/beritaukmb/articles/category/:query" component={BeritaUKMB}></Route> */}
				<Route path="/" 
						exact 
						component={() => <HomepageA_1 data={data}/>}></Route>
				<Route path="/homepage" 
						exact 
						component={() => <HomepageA_1 data={data}/>}></Route>
				<Route path="/beritaukm/:pathParam1?/:pathParam2?/:pathParam3?" component={BeritaUKMB}></Route>
				<Route path="/beritasingle/:articles_id" component={BeritaSingle}></Route>

				<Route path="/ukmunpad/:pathParam1?/:pathParam2?/:pathParam3?" component={UKMUnpadA}></Route>


				
				{/* <Route exact path="/ukmunpada"><UKMUnpadA /></Route> */}
				<Route exact path="/signinuser"><SigninUser /></Route>
				<Route exact path="/signupuser"><SignupUser /></Route>
				<Route exact path="/profileuser"><ProfileUser /></Route>
				<Route exact path="/editprofileuser/:id" component={EditProfileUser}></Route>
				{/* <Route exact path="/detailukma"><DetailUKMA /></Route> */}
				<Route path="/detailukm/:ukm_id" component={DetailUKMA}></Route>
				<Route path="/daftarukm/:ukm_id" component={DaftarUKM}></Route>

				<Route exact path="/signinadmin"><SigninAdmin /></Route>
				<Route exact path="/dashboardukm"><DashboardUKMB /></Route>
				<Route path="/editprofileukm/:ukm_id" component={EditProfileUKM}></Route>
				<Route path="/listberitaukm" component={ListBeritaUKMAdminUKM}></Route>
				<Route path="/buatberitaukm" component={BuatBeritaUKM}></Route>
				<Route path="/editberitaukm/:articles_id" component={EditBeritaUKM}></Route>
				<Route exact path="/listpendaftarukm"><ListPendaftarUKMAdminUKM /></Route>
				<Route exact path="/aturpendaftaranukm"><AturPendaftaranUKM /></Route>
				
				
			</Switch>
			<Route exact path="/AboutUs"><AboutUs /></Route>
			
		</Router>
	);
}
export default RouterDOM;