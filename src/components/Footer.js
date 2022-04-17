import React from 'react'
import '../css/Footer.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'

export default function Footer () {
    return (
            <div className='Frame373'>
					<div className='Footer'>
						<div className='Group226'>
							<div className='PageHeaderSecondary'>
								<div className='PageHeader'>
									<div className='ColorsSecondary'>
									</div>
									<span className='ProjectBrandGuidelines'>Project DESIGN Guidelines</span>
									<span className='_2020'></span>
								</div>
							</div>
							<div className='Group224'>
								<span className='UKMsCare2022'>© UKM's Care 2022</span>
								<div className='Group341'>
									<span className='FollowUs'>Follow Us</span>
									<img className='instagram1' src = {ImgAsset.ListPendaftarUKMAdminUKM_instagram1} />
									<img className='facebook1' src = {ImgAsset.ListPendaftarUKMAdminUKM_facebook1} />
									<img className='twitter1' src = {ImgAsset.ListPendaftarUKMAdminUKM_twitter1} />
									<img className='gmail1' src = {ImgAsset.ListPendaftarUKMAdminUKM_gmail1} />
								</div>
								<div className='Group364'>
									<span className='UKMUnpad'>UKM Unpad</span>
									<span className='AboutUs'>About Us</span>
									<span className='Help'>Help</span>
									<span className='BeritaUKM'>Berita UKM</span>
								</div>
							</div>
						</div>
					</div>
			</div>

    )
}

                