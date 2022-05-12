import React from 'react'
import '../css/DaftarUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'

class DaftarUKM extends Component {
render() {
    return (
		<div className='DaftarUKM_DaftarUKM'>
		<img className='Rectangle21' src = {ImgAsset.DaftarUKM_Rectangle21} />
		<span className='PendaftaranUnitTaekwondoUnpad'>Pendaftaran Unit Taekwondo Unpad</span>
		<div className='Line7'/>
		<div className='Vectors'>
			<img className='Vector' src = {ImgAsset.DaftarUKM_Vector} />
			<img className='Vector_1' src = {ImgAsset.DaftarUKM_Vector_1} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_2' src = {ImgAsset.DaftarUKM_Vector_2} />
			<img className='Vector_3' src = {ImgAsset.DaftarUKM_Vector_3} />
		</div>

		<NavbarUser/>
		<span className='daftarukm'>DAFTRAR UKM</span>

		<div className='grup1'>

		<div className='Group317'>
		<span className='NamaLengkap'>Nama Lengkap</span>
		<input className='InputForm1'/>
		</div>

		<div className='Group318'>
			<div className='Rectangle1_1'/>
			<img className='Polygon2' src = {ImgAsset.DaftarUKM_Polygon2} />
			<span className='FakultasMatematikadanIlmuPengetahuanAlam'>Fakultas Matematika dan Ilmu Pengetahuan Alam</span>
			<span className='Fakultas'>Fakultas</span>
		</div>

		<div className='Group315'>
			<input className='InputForm1'/>
			<span className='NPM'>NPM</span>
		</div>
		<div className='Group572'>
		<input className='InputForm1'/>
			<span className='Kontak'>Kontak</span>
		</div>
		<div className='Group573'>
		<input className='InputForm1'/>
			<span className='Hobi'>Hobi</span>
		</div>
		<div className='Group574'>
		<input className='InputForm2'/>
			<span className='AlasanMasuk'>Alasan Masuk</span>
		</div>
		<div className='Group576'>
			<div className='Group301'>
				<div className='Rectangle19'/>
				<div className='Group313'>
					<div className='Group300'>
						<span className='PilihFile'>Pilih File</span>
					</div>
					<div className='bxupload'>
						<img className='Vector_5' src = {ImgAsset.DaftarUKM_Vector_5} />
						<img className='Vector_6' src = {ImgAsset.DaftarUKM_Vector_6} />
					</div>
				</div>
			</div>
			<span className='ScanKTM'>Scan KTM</span>
		</div>
		<div className='Group577'>
			<div className='Group575'>
				<div className='Rectangle19_1'/>
				<div className='Group313_1'>
					<div className='Group300_1'>
						<span className='PilihFile_1'>Pilih File</span>
					</div>
					<div className='bxupload_1'>
						<img className='Vector_7' src = {ImgAsset.DaftarUKM_Vector_7} />
						<img className='Vector_8' src = {ImgAsset.DaftarUKM_Vector_8} />
					</div>
				</div>
			</div>
			<span className='BuktiPembayaran'>Bukti Pembayaran</span>
		</div>
		<div className='Group571'>
			<div className='Rectangle1_6'/>
			<span className='_2019'>2019</span>
			<span className='Angkatan'>Angkatan</span>
			<img className='Polygon2_1' src = {ImgAsset.DaftarUKM_Polygon2_1} />
		</div>

		</div>

		<Link to='/detailukma'>
			<div className='Group319'>
				<div className='Group580'>
					<div className='Rectangle19_2'/>
					<div className='Group578'>
						<div className='Group579'>
							<div className='Group320'>
								<div className='Group300_2'>
									<span className='Daftar'>Daftar</span>
								</div>
							</div>
							<div className='akariconsedit'>
								<div className='Group'>
									<img className='Vector_9' src = {ImgAsset.DaftarUKM_Vector_9} />
									<img className='Vector_10' src = {ImgAsset.DaftarUKM_Vector_10} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
		<Link to='/detailukma'>

			
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
							<img className='Vector_11' src = {ImgAsset.DaftarUKM_Vector_11} />
						</div>
					</div>
				</div>
			</div>
		</Link>
		<Footer/>
	</div>
	)
}
}

export default DaftarUKM ;