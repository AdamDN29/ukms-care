import React from 'react'
import '../css/SeacrhBerita.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import { ButtonGroup } from 'react-bootstrap'

export default function SeacrhBerita () {
    return (
	<div className='SeacrhBerita'>	
		<div className='Group365'>
				<div className='Frame359'>
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
				</div>
				<div className='Frame361'>
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
				</div>
				<input className='Frame2' placeholder='Search'>
				</input>
				
				<ButtonGroup className='Frame360'>
					Search
				</ButtonGroup>		
		</div>
	</div>
	)
}