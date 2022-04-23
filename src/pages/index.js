import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';


export default function ListPages () {
    return (
	<div>
		<Link to='/HomepageA_1'><div>HomepageA_1</div></Link>
		<Link to='/UKMUnpadA'><div>UKMUnpadA</div></Link>
		<Link to='/DetailUKMA'><div>DetailUKMA</div></Link>
		<Link to='/DaftarUKM'><div>DaftarUKM</div></Link>
		<Link to='/BeritaUKMB'><div>BeritaUKMB</div></Link>
		<Link to='/BeritaSingle'><div>BeritaSingle</div></Link>
		<Link to='/SigninUser'><div>SigninUser</div></Link>
		<Link to='/SignupUser'><div>SignupUser</div></Link>
		<Link to='/ProfileUser'><div>ProfileUser</div></Link>
		<Link to='/EditProfileUser'><div>EditProfileUser</div></Link>
	</div>
	)
}