import React from 'react'
import '../css/BeritaUKMB.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import { Component } from 'react/cjs/react.production.min'
import NavbarSetelahLogin from '../components/NavbarSetelahLogin'
import Footer from '../components/Footer'
import BeritaPost from '../components/BeritaPost'
import axios from 'axios';

// X-CSRF-Token: RRhCuLSfxCWxubAbBVk5U0sGCrxwrWPAb4rs6fsl
//axios.defaults.headers.common['X-CSRF-TOKEN'] = axios.get('https://api-ukmscare.herokuapp.com/csrf-token')

class BeritaUKMB extends Component {
	state = {
		post: []
	}


	
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((result)=>{
			console.log(result.data);
			this.setState({
				post: result.data
			})
		})

	}

    render () {
		return (
			
			<div className='BeritaUKMB_BeritaUKMB'>
				<NavbarSetelahLogin />
				<img className='Rectangle40' src = {ImgAsset.BeritaUKMB_Rectangle40} />
				<div className='Vectors'>
					<img className='Vector' src = {ImgAsset.BeritaUKMB_Vector} />
					<img className='Vector_1' src = {ImgAsset.BeritaUKMB_Vector_1} />
				</div>
				<div className='Vectors_1'>
					<img className='Vector_2' src = {ImgAsset.BeritaUKMB_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.BeritaUKMB_Vector_3} />
				</div>

				<span className='beritaukm'>BERITA UKM</span>

				{
					this.state.post.slice(0, 4).map(post => {
						return <BeritaPost key={post.id} ukm_id={post.id} subject={post.title} content={post.body} created_at="created_at" />
					})
				}

				
				

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
					<div className='Frame2'>
						<div className='evasearchoutline'>
							<img className='Vector_4' src = {ImgAsset.BeritaUKMB_Vector_4} />
						</div>
						<span className='Search'>Search</span>
					</div>
					<div className='Frame360'>
						<span className='Search_1'>Search</span>
					</div>
				</div>
				
				{/* <Link to='/beritasingle'>
					<div className='Frame338_2'>
						<div className='Alltickets_3'>
							<div className='cardsdefault_3'>
								<div className='sheet_3'/>
								<div className='Group362_3'>
									<div className='Group337_3'>
										<div className='Group361_3'>
											<div className='Rectangle26_3'/>
											<img className='JuaraTaekwondo1_3' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
										</div>
									</div>
									<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_3'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
									<span className='UnitTaekwondoUnpad_3'>Unit Taekwondo Unpad</span>
									<span className='Jumat25Maret2022_3'>Jumat, 25 Maret 2022</span>
									<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya_3'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
								</div>
							</div>
						</div>
					</div>
				</Link> */}
				<Footer />
			</div>
		)

	}
}


export default BeritaUKMB;