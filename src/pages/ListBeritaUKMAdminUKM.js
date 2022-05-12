import React from 'react'
import { useState, useEffect } from "react";
import '../css/ListBeritaUKMAdminUKM.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link} from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'
import Footer from '../components/Footer'
import { Component } from 'react/cjs/react.production.min'
import ReactTimeAgo from 'react-time-ago'
import ReactPaginate from "react-paginate";
import axios from 'axios';

export default function ListBeritaUKMAdminUKM (props) {
	const ukm_id = props.location.state.idUKM;
	console.log(ukm_id);

	const [berita, setBerita] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

  	const usersPerPage = 4;
  	const pagesVisited = pageNumber * usersPerPage;

  	const pageCount = Math.ceil(berita.length / usersPerPage);
	  
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}articles/ukm/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

    return (
	<div className='ListBeritaUKMAdminUKM_ListBeritaUKMAdminUKM'>
		<span className='Listberitaukm'>List Berita UKM</span>

		<div className='Vectors'>
			<img className='Vector_1' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_1} />
			<img className='Vector_2' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_2} />
		</div>
		<div className='Vectors_1'>
			<img className='Vector_3' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_3} />
			<img className='Vector_4' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_4} />
		</div>

		<NavbarAdmin/>


		{/* Buat Berita */}
		<Link to={{pathname:'/buatberitaukm', state:{ukm_id}}}>
			<div className='Group567'>
				<div className='Group301'>
					<div className='Rectangle19'/>
				</div>
				<div className='Group581'>
					<div className='Group300'>
						<span className='BuatBerita'>Buat Berita</span>
					</div>
					<img className='Vector_8' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_8} />
				</div>
			</div>
		</Link>
		

		<div className='BeritaPost2'>
			{ berita.length !== 0 
					? (
						berita
						.map(post => {
							const date = post.created_at;
							const dt = new Date(date);
							const contents = post.content;
							return (
								<div className='PostCard' key={post.id}>
									<Link to={`/beritasingle/${post.id}`} >
			
											<div className='Frame338_3'>
												<div className='Alltickets_4'>
													<div className='cardsdefault_4'>
														<div className='sheet_4'/>
														<div className='Group362_4'>
															<div className='Group337_4'>
																<div className='Group361_4'>
																	{/* <div className='Rectangle26_4'/> */}
																	<img className='Images' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
																</div>
															</div>
															<span className='Title2'>{post.subject}</span>
															<span className='UKM_Name2'>{post.ukm.name}</span>
															<span className='Date2'><ReactTimeAgo date={dt} locale="en-US"/></span>
															<span className='Content2'> {contents.slice(0,200)} ... Berita Selengkapnya</span>
														</div>
													</div>
												</div>
											</div>
									</Link>
									<div className='BeritaButton'> 
										<Link to='/buatberitaukm'>
											<div className='Group565'>
												<img className='Rectangle56_1' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_1} />
												<div className='akariconsedit'>
													<div className='Group'>
														<img className='Vector_6' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_6} />
														<img className='Vector_7' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_7} />
													</div>
												</div>
											</div>
										</Link>
										{/* Delete Button */}
										<div className='Group561'>
											<img className='Rectangle56' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56} />
											<img className='Vector_5' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_5} />
										</div>
									</div>
									{/* Edit Button */}
									
								</div>	
							)
						})
					)	
					: (<div> <span className='notFound2'>Belum Ada Berita</span></div>)

			}
		</div>
		
			
		

		{/* <div className='Group338'>
			<div className='Alltickets'>
				<div className='cardsdefault'>
					<div className='sheet'/>
					<div className='Group362'>
						<div className='Group337'>
							<div className='Group361'>
								<div className='Rectangle26'/>
								<img className='JuaraTaekwondo1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
							</div>
						</div>
						<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
						<span className='UnitTaekwondoUnpad'>Unit Taekwondo Unpad</span>
						<span className='Jumat25Maret2022'>Jumat, 25 Maret 2022</span>
						<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
					</div>
				</div>
			</div>
		</div>
		<div className='Group574'>
			<img className='Rectangle56_2' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_2} />
			<img className='Vector_9' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_9} />
		</div>
		<div className='Group575'>
			<img className='Rectangle56_3' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_3} />
			<div className='akariconsedit_1'>
				<div className='Group_1'>
					<img className='Vector_10' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_10} />
					<img className='Vector_11' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_11} />
				</div>
			</div>
		</div>
		<div className='Group576'>
			<div className='Alltickets_1'>
				<div className='cardsdefault_1'>
					<div className='sheet_1'/>
					<div className='Group362_1'>
						<div className='Group337_1'>
							<div className='Group361_1'>
								<div className='Rectangle26_1'/>
								<img className='JuaraTaekwondo1_1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
							</div>
						</div>
						<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_1'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
						<span className='UnitTaekwondoUnpad_1'>Unit Taekwondo Unpad</span>
						<span className='Jumat25Maret2022_1'>Jumat, 25 Maret 2022</span>
						<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya_1'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
					</div>
				</div>
			</div>
		</div>
		<div className='Group571'>
			<img className='Rectangle56_4' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_4} />
			<img className='Vector_12' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_12} />
		</div>
		<div className='Group572'>
			<img className='Rectangle56_5' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_5} />
			<div className='akariconsedit_2'>
				<div className='Group_2'>
					<img className='Vector_13' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_13} />
					<img className='Vector_14' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_14} />
				</div>
			</div>
		</div>
		<div className='Group573'>
			<div className='Alltickets_2'>
				<div className='cardsdefault_2'>
					<div className='sheet_2'/>
					<div className='Group362_2'>
						<div className='Group337_2'>
							<div className='Group361_2'>
								<div className='Rectangle26_2'/>
								<img className='JuaraTaekwondo1_2' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
							</div>
						</div>
						<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_2'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
						<span className='UnitTaekwondoUnpad_2'>Unit Taekwondo Unpad</span>
						<span className='Jumat25Maret2022_2'>Jumat, 25 Maret 2022</span>
						<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya_2'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
					</div>
				</div>
			</div>
		</div>
		<div className='Group568'>
			<img className='Rectangle56_6' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_6} />
			<img className='Vector_15' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_15} />
		</div>
		<div className='Group569'>
			<img className='Rectangle56_7' src = {ImgAsset.ListBeritaUKMAdminUKM_Rectangle56_7} />
			<div className='akariconsedit_3'>
				<div className='Group_3'>
					<img className='Vector_16' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_16} />
					<img className='Vector_17' src = {ImgAsset.ListBeritaUKMAdminUKM_Vector_17} />
				</div>
			</div>
		</div>
		<div className='Group570'>
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
		</div> */}
		<div className='Pagination2'>
					<ReactPaginate
					previousLabel={"Prev"}
					nextLabel={"Next"}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={"paginationBttns"}
					previousLinkClassName={"previousBttn"}
					nextLinkClassName={"nextBttn"}
					disabledClassName={"paginationDisabled"}
					activeClassName={"paginationActive"}
					/>
				</div>

		<Footer/>
	</div>
	)

}