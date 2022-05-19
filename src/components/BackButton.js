import React from 'react'
import '../css/BackButton.css'
import * as SVGAsset from '../SVG/index'
import {Link} from 'react-router-dom'
import ImgAsset from '../resources'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function BackButton () {
	let history = useHistory();
    return (
		<div className='grup1'>
        	<Button className='Frame323' onClick={() => history.goBack()}>
				<div className='Group384'>
					<div className='Group385_1'>
						<div className='Group239_1'>
							<div className='Group294_1'>
								<div className='Group293_1'>
									{/* <div className='Rectangle13_1'/> */}
								</div>
							</div>
						</div>
						<div className='Group322_1'  >
							<div className='Group321_1'>
								<span className='Kembali_1'>Kembali</span>
							</div>
							<img className='Vector_6' src = {ImgAsset.BeritaSingle_Vector_6} />
						</div>
					</div>
				</div>
			</Button>
		</div>
            
    )
}