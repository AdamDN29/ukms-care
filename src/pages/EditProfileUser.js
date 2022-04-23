import React from 'react'
import '../css/EditProfileUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'

export default function EditProfileUser () {
    return (
	<div className='EditProfileUser_EditProfileUser'>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.EditProfileUser_Vector} />
			<img className='Vector_1' src = {ImgAsset.EditProfileUser_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.EditProfileUser_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.EditProfileUser_Vector_3} />
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
				<img className='Vector_4' src = {ImgAsset.EditProfileUser_Vector_4} />
			</div>
		</div>
		<img className='Rectangle21' src = {ImgAsset.EditProfileUser_Rectangle21} />
		<Link to='/profileuser'>
			<div className='Group319'>
				<div className='Group580'>
					<div className='Rectangle19'/>
					<div className='Group578'>
						<div className='Group579'>
							<div className='Group320'>
								<div className='Group300'>
									<span className='Simpan'>Simpan</span>
								</div>
							</div>
							<div className='akariconsedit'>
								<div className='Group'>
									<img className='Vector_5' src = {ImgAsset.EditProfileUser_Vector_5} />
									<img className='Vector_6' src = {ImgAsset.EditProfileUser_Vector_6} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
		<span className='EditProfile'>Edit Profile</span>
		<img className='Line7' src = {ImgAsset.EditProfileUser_Line7} />
		<img className='unsplashjmURdhtm7Ng' src = {ImgAsset.EditProfileUser_unsplashjmURdhtm7Ng} />
		<div className='Group577'>
			<div className='Group575'>
				<div className='Rectangle19_1'/>
				<div className='Group313'>
					<div className='Group300_1'>
						<span className='ChangeImage'>Change Image</span>
					</div>
					<div className='bxupload'>
						<img className='Vector_7' src = {ImgAsset.EditProfileUser_Vector_7} />
						<img className='Vector_8' src = {ImgAsset.EditProfileUser_Vector_8} />
					</div>
				</div>
			</div>
		</div>
		<div className='Group317'>
			<div className='Rectangle1'/>
			<span className='NamaLengkap'>Nama Lengkap</span>
			<span className='Chandra'>Chandra</span>
		</div>
		<div className='Group580_1'>
			<div className='Rectangle1_1'/>
			<span className='NomorTelepon'>Nomor Telepon</span>
			<span className='_0813221920394'>0813221920394</span>
		</div>
		<div className='Group582'>
			<div className='Rectangle1_2'/>
			<span className='Fakultas'>Fakultas</span>
			<span className='TeknikInformatika'>Teknik Informatika</span>
		</div>
		<div className='Group583'>
			<div className='Rectangle1_3'/>
			<span className='NPM'>NPM</span>
			<span className='_140810190033'>140810190033</span>
		</div>
		<div className='Group571'>
			<div className='Rectangle1_4'/>
			<span className='_2019'>2019</span>
			<span className='Angkatan'>Angkatan</span>
			<img className='Polygon2' src = {ImgAsset.EditProfileUser_Polygon2} />
		</div>
		<div className='Group581'>
			<div className='Rectangle1_5'/>
			<span className='_'>**********</span>
			<span className='Password'>Password</span>
			<div className='Group580_2'>
				<div className='Rectangle1_6'/>
				<span className='Email'>Email</span>
			</div>
			<span className='Chandraw314gmailcom'>Chandraw314@gmail.com</span>
		</div>
	</div>
	)
}