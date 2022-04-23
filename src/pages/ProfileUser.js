import React from 'react'
import '../css/ProfileUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'

export default function ProfileUser () {
    return (
	<div className='ProfileUser_ProfileUser'>
		<div className='charmphonecall'>
			<img className='Vector' src = {ImgAsset.ProfileUser_Vector} />
		</div>
		<div className='Vectors'>
			<img className='Vector_1' src = {ImgAsset.ProfileUser_Vector_1} />
			<img className='Vector_2' src = {ImgAsset.ProfileUser_Vector_2} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_3' src = {ImgAsset.ProfileUser_Vector_3} />
			<img className='Vector_4' src = {ImgAsset.ProfileUser_Vector_4} />
		</div>
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
					<span className='UKMsCare2022'>© UKM’s Care 2022</span>
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
				<img className='Screenshot_20220306_161229removebgpreview4' src = {ImgAsset.NavbarSebelumLogin_Screenshot_20220306_161229removebgpreview2} />
			</div>
			<div className='Frame238'>
				<span className='UKMUnpad_1'>UKM Unpad</span>
				<span className='BeritaUKM_1'>Berita UKM</span>
			</div>
			<div className='Frame376'>
				<img className='Vector_5' src = {ImgAsset.ProfileUser_Vector_5} />
			</div>
		</div>
		<img className='unsplashjmURdhtm7Ng' src = {ImgAsset.ProfileUser_unsplashjmURdhtm7Ng} />
		<img className='Line8' src = {ImgAsset.ProfileUser_Line8} />
		<span className='ChandraWijaya'>Chandra Wijaya</span>
		<span className='_081320938490'>081320938490</span>
		<span className='Chandraw314gmailcom'>Chandraw314@gmail.com</span>
		<div className='carbonphonevoice'>
			<img className='Vector_6' src = {ImgAsset.ProfileUser_Vector_6} />
			<img className='Vector_7' src = {ImgAsset.ProfileUser_Vector_7} />
		</div>
		<span className='NomorTelepon'>Nomor Telepon</span>
		<span className='_140810190033'>140810190033</span>
		<span className='NPM'>NPM</span>
		<span className='FMIPA'>FMIPA</span>
		<span className='Fakultas'>Fakultas</span>
		<div className='faregularaddressbook'>
			<img className='Vector_8' src = {ImgAsset.ProfileUser_Vector_8} />
		</div>
		<span className='_2019'>2019</span>
		<span className='Angkatan'>Angkatan</span>
		<div className='makicollege'>
			<img className='Vector_9' src = {ImgAsset.ProfileUser_Vector_9} />
		</div>
		<Link to='/editprofileuser'>
			<div className='Group239'>
				<div className='Group294'>
					<div className='Group293'>
						<div className='Rectangle13'/>
					</div>
					<div className='Group291'>
						<span className='EditProfile'>Edit Profile</span>
						<div className='akariconsedit'>
							<div className='Group'>
								<img className='Vector_10' src = {ImgAsset.ProfileUser_Vector_10} />
								<img className='Vector_11' src = {ImgAsset.ProfileUser_Vector_11} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
		<Link to='/homepagea_1'>
			<div className='Group323'>
				<div className='Group384'>
					<div className='Group385'>
						<div className='Group239_1'>
							<div className='Group294_1'>
								<div className='Group293_1'>
									<div className='Rectangle13_1'/>
								</div>
							</div>
						</div>
						<div className='Group322'>
							<div className='Group321'>
								<span className='Kembali'>Kembali</span>
							</div>
							<img className='Vector_12' src = {ImgAsset.ProfileUser_Vector_12} />
						</div>
					</div>
				</div>
			</div>
		</Link>
		<img className='Vector_13' src = {ImgAsset.ProfileUser_Vector_13} />
	</div>
	)
}