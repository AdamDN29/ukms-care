import React from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarUser from '../components/NavbarUser';
import Footer from '../components/Footer';
import ListPages from '../pages/index';
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

const RouterDOM = () => {
	// const [idUser, setIdUser] = useState(false);

	// const localDataRole = localStorage.getItem("role");
	// console.log(localDataRole);

	// const getId = (id) => {
	// 	setIdUser(id);
	// };
	// console.log(idUser);

	return (
		<Router>
			{/* <NavbarUser idUser={(id) => getId(id)} /> */}
			<Switch>
				<Route exact path="/"><ListPages /></Route>
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
				<Route path="/beritaukmb" component={BeritaUKMB}></Route>
				<Route path="/beritasingle/:articles_id" component={BeritaSingle}></Route>


				<Route exact path="/homepagea_1"><HomepageA_1 /></Route>
				<Route exact path="/ukmunpada"><UKMUnpadA /></Route>
				<Route exact path="/signinuser"><SigninUser /></Route>
				<Route exact path="/signupuser"><SignupUser /></Route>
				<Route exact path="/profileuser"><ProfileUser /></Route>
				<Route exact path="/editprofileuser/:id" component={EditProfileUser}></Route>
				<Route exact path="/detailukma"><DetailUKMA /></Route>
				<Route exact path="/daftarukm"><DaftarUKM /></Route>
			</Switch>
			{/* <Footer /> */}
		</Router>
	);
}
export default RouterDOM;