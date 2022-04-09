import React from 'react'
import {Link} from 'react-router-dom'
export default function ListPages () {
    return (
	<div>
		<Link to='/HomepageA_1'><div>HomepageA_1</div></Link>
		<Link to='/UKMUnpadA'><div>UKMUnpadA</div></Link>
		<Link to='/BeritaUKMB'><div>BeritaUKMB</div></Link>
		<Link to='/BeritaSingle'><div>BeritaSingle</div></Link>
	</div>
	)
}