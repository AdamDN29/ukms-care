import React from 'react'
import '../css/EditProfileUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'

class EditProfileUKM extends Component{
	render () {
    return (
	<div className='EditProfileUKM_EditProfileUKM'>
		<NavbarAdmin/>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.EditProfileUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.EditProfileUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.EditProfileUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.EditProfileUKM_Vector_3} />
		</div>

		<div className='grup1'>
		<div className='Rectangle21'/>
		<span className='EditProfileUKM_1'>Edit Profile UKM</span>
		<div className='Group382'>
			<div className='Group301'>
				<div className='Rectangle19'/>
				<div className='Group313'>
					<div className='Group300'>
						<span className='UploadGambar'>Upload Gambar</span>
					</div>
					<div className='bxupload'>
						<img className='Vector_4' src = {ImgAsset.EditProfileUKM_Vector_4} />
						<img className='Vector_5' src = {ImgAsset.EditProfileUKM_Vector_5} />
					</div>
				</div>
			</div>
			<div className='Group381'>
				<div className='Group314'>
					<div className='Rectangle1'/>
					<span className='UnitTaekwondoUnpadUTKD'>Unit Taekwondo Unpad (UTKD)</span>
					<span className='NamaUKM'>Nama UKM</span>
				</div>
				<div className='Group314_1'>
					<div className='Rectangle1_1'/>
					<span className='SelasaJumat1600WIB'>Selasa & Jumat, 16.00 WIB</span>
					<span className='JadwalKegiatan'>Jadwal Kegiatan</span>
				</div>
				<div className='Group314_2'>
					<div className='Rectangle1_2'/>
					<span className='_70Anggota'>70 Anggota</span>
					<span className='JumlahAnggota'>Jumlah Anggota</span>
				</div>
				<div className='Group314_3'>
					<div className='Rectangle1_3'/>
					<span className='KompleksUKMBaratJatinangor'>Kompleks UKM Barat, Jatinangor</span>
					<span className='AlamatUKM'>Alamat UKM</span>
				</div>
				<div className='Group309'>
					<div className='Group314_4'>
						<div className='Rectangle1_4'/>
						<span className='TaekwondoUnpadgmailcom'>Taekwondo.Unpad@gmail.com</span>
						<span className='Kontak'>Kontak</span>
					</div>
				</div>
			</div>
			<div className='Group349'>
				<div className='Rectangle22'/>
				<img className='Rectangle12' src = {ImgAsset.EditProfileUKM_Rectangle12} />
			</div>
		</div>
		<div className='Group316'>
			<div className='Group314_5'>
				<div className='Rectangle1_5'/>
				<span className='deskripsi'>Unit Taekwondo Unpad (UTKD) didirikan pada tanggal 16 September 1982. UTKD mengadakan latihan rutin setiap hari Senin & Kamis di Pelataran Taman Fakultas Hukum Unpad (Dipati Ukur Bandung) dan Selasa & Jumat di Bale Santika atau di Stadion Jati Padjadjaran (Jatinangor) mulai pukul 16.00 WIB.
				
				Sejumlah prestasi yang pernah diraih antara lain: 
				
				Ganesha Cup 2013 (1 Perunggu ) 
				Walikota Cup 2013 (1 Emas , 5 perak 2 perunggu) 
				Kejuaraan Nasional IT Telkom Cup 2013 (1 Perak, 3 Perunggu) 
				Kejuaraan Nasional FEUI Cup 2013 (2 Perak , 2 Perunggu) 
				Metro Open 2013 (5 Perak , 5 Perunggu ) 
				KTB Cup Bogor Se Jawa Barat (1 Perak, 7 Perunggu) 
				Walikota Cup Bandung 2012 (3 Perak , 4 Perunggu ) 
				Polban Kyorugi Championship 2012 (2 emas, 8 Perak, 6 perunggu) 
				Walikota Bandung Cup 2011 (2 emas, 2 Perak, 4 perunggu) 
				UPI Challenge 2011 (1 perak, 6 perunggu) Walikota 
				Bandung Cup 2010 (2 emas, 1 perak, 4 Perunggu) 
				Kejurnas ITTelkom 2010 (1 Perunggu)
				
				
				Media Sosial 
				
				Line         : @cgk2038x
				
				Instagram : taekwondo_unpad
				
				Twitter     : @TaekwondoUnpad</span>
				<div className='Group317'>
					<img className='Line2' src = {ImgAsset.EditProfileUKM_Line2} />
					<img className='Line3' src = {ImgAsset.EditProfileUKM_Line3} />
				</div>
			</div>
		</div>
		<div className='Group383'>
			<div className='Group311'>
				<div className='Group314_6'>
					<span className='Deskripsi'>Deskripsi</span>
				</div>
			</div>
		</div>
		<div className='Group319'>
			<div className='Rectangle19_1'/>
			<div className='Group320'>
				<div className='Group300_1'>
					<span className='SaveProfile'>Save Profile</span>
				</div>
				<div className='bxssave'>
					<img className='Vector_6' src = {ImgAsset.EditProfileUKM_Vector_6} />
				</div>
			</div>
		</div>
		<div className='Group323'>
			<div className='Group384'>
				<div className='Group385'>
					<div className='Group239'>
						<div className='Group294'>
							<div className='Group293'>
								<div className='Rectangle13'/>
							</div>
						</div>
					</div>
					<div className='Group322'>
						<div className='Group321'>
							<span className='Kembali'>Kembali</span>
						</div>
						<img className='Vector_7' src = {ImgAsset.EditProfileUKM_Vector_7} />
					</div>
				</div>
			</div>
		</div>
		</div>

		<Footer/>
	</div>
	)
}
}

export default EditProfileUKM;