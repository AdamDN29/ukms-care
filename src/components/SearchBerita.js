import React from 'react'
import '../css/SearchBerita.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import axios from "axios";

export default function SearchBerita () {

	const [ukm, setUKM] = useState([]);
	const cat1 = 'category/Olahraga';

	useEffect(() => {
		axios
		  .get(`https://api-ukmscare.herokuapp.com/ukms`)
		  .then((response) => {
			console.log(response.data.data);
			setUKM(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });

	  },[]); 

    return (
	<div className='SearchBerita'>	
		<div className='Group365'>
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic" className='Frame359'>
						
						
							<div className='Group358'>
								<div className='Rectangle30'/>
								<div className='Rectangle31'/>
								<div className='Rectangle32'/>
								<div className='Rectangle33'/>
								<div className='Rectangle34'/>
								<div className='Rectangle35'/>
								<div className='Rectangle36'/>
								<div className='Rectangle37'/>
								<div className='Rectangle38'/>
							</div>
							<span className='Kategori'>Kategori</span>
							<img className='Icon1' src={ImgAsset.SegitigaSearch}/>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href={ "/beritaukmb/" + cat1}>Olahraga</Dropdown.Item>
						<Dropdown.Item href="/action-2">Beladiri</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic" className='Frame361'>
						<div className='Group358_1'>
							<div className='Rectangle30_1'/>
							<div className='Rectangle31_1'/>
							<div className='Rectangle32_1'/>
							<div className='Rectangle33_1'/>
							<div className='Rectangle34_1'/>
							<div className='Rectangle35_1'/>
							<div className='Rectangle36_1'/>
							<div className='Rectangle37_1'/>
							<div className='Rectangle38_1'/>
						</div>
						<span className='UKM'>UKM</span>
						<img className='Icon1' src={ImgAsset.SegitigaSearch}/>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{/* <Dropdown.Item href="#/action-1">UTU</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Beladiri</Dropdown.Item>
						<Dropdown.Item href="#/action-3">del</Dropdown.Item> */}
						{
							ukm.map(post => {
								return <Dropdown.Item href="#/action-1">{post.short_name}</Dropdown.Item>
			
							})
						}
					</Dropdown.Menu>
				</Dropdown>
				
				
				<input className='Frame2' placeholder='Search'>
				</input>
				
				<Button className='Frame360' placeholder='Search'>
					<p className='searchText'>Search</p>
				</Button>		
		</div>
	</div>
	)
}