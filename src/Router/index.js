import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPages from '../pages/index';
import HomepageA_1 from '../pages/HomepageA_1';
import UKMUnpadA from '../pages/UKMUnpadA';
import BeritaUKMB from '../pages/BeritaUKMB';
import BeritaSingle from '../pages/BeritaSingle';
import SigninUser from '../pages/SigninUser';
import SignupUser from '../pages/SignupUser';

const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><ListPages /></Route>
				<Route exact path="/homepagea_1"><HomepageA_1 /></Route>
				<Route exact path="/ukmunpada"><UKMUnpadA /></Route>
				<Route exact path="/beritaukmb"><BeritaUKMB /></Route>
				<Route exact path="/beritasingle"><BeritaSingle /></Route>
				<Route exact path="/signinuser"><SigninUser /></Route>
				<Route exact path="/signupuser"><SignupUser /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;