import React from 'react'
import '../css/NavbarSetelahLogin.css'
import * as SVGAsset from '../SVG/index'
import {Link} from 'react-router-dom'
import ImgAsset from '../resources'

export default function NavbarSetelahLogin () {
    return (
	<div className='NavbarSetelahLogin_NavbarSetelahLogin'>	
		<div className='Frame382'>
			<div className='Frame368'>
				<div className='NavbarSetelahLogin'>
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
						{/* <img className='logo' src = {ImgAsset.ukms_care_logo} /> */}
						<Link to='/HomepageA_1'><img className='logo' src = {ImgAsset.ukms_care_logo} /></Link>
					</div>
					<div className='Frame238'>
						<Link to='/ukmunpada' className="link"><span className='UKMUnpad_1'>UKM Unpad</span></Link>
						<Link to='/beritaukmb' className="link"><span className='BeritaUKM_1'>Berita UKM</span></Link>
					</div>
					<div className='Frame376'>
						<img className='Avatar' src = {ImgAsset.Avatar} />
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}