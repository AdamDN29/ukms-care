import React from 'react'
import '../css/EditProfileUser.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarSetelahLogin from '../components/NavbarSetelahLogin'
import Footer from '../components/Footer'
import { Dropdown } from 'bootstrap'
import { DropdownButton } from 'react-bootstrap'

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

		<NavbarSetelahLogin/>

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
		<center><span className='EditProfile'>Edit Profile</span></center>
		<img className='Line7' src = {ImgAsset.EditProfileUser_Line7} />
		<img className='Image' src = {ImgAsset.EditProfileUser_unsplashjmURdhtm7Ng} />
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
			<input className='InputForm1'/>
			<span className='NamaLengkap'>Nama Lengkap</span>
		</div>
		<div className='Group580_1'>
			<input className='InputForm1'/>
			<span className='NomorTelepon'>Nomor Telepon</span>
		</div>
		<div className='Group582'>
			<input className='InputForm1'/>
			<span className='Fakultas'>Fakultas</span>
		</div>
		<div className='Group583'>
			<input className='InputForm1'/>
			<span className='NPM'>NPM</span>
		</div>
		<div className='Group571'>
			{/* <DropdownButton className='Rectangle1_4'/> */}
			<div className='Rectangle1_4'/>
			<span className='_2019'>2019</span>
			<span className='Angkatan'>Angkatan</span>
			<img className='Polygon2' src = {ImgAsset.EditProfileUser_Polygon2} />
		</div>
		<div className='Group581'>
			<input type='password' className='InputForm2'/>
			<span className='Password'>Password</span>
		<div/>
		<div className='Group580_2'>
			<input className='InputForm1'/>
			<span className='Email'>Email</span>
		</div>
			
		</div>
		<Footer/>
	</div>
	)
}