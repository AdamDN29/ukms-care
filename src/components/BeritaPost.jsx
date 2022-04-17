import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/BeritaPost.css';

const BeritaPost = (props) => {
    return (
        <div className='BeritaPost'>
            <div className='Frame338_2'>
				<div className='Alltickets_3'>
					<div className='cardsdefault_3'>
						<div className='sheet_3'/>
						<div className='Group362_3'>
							<div className='Group337_3'>
								<div className='Group361_3'>
									<div className='Rectangle26_3'/>
									<img className='Image' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
								</div>
							</div>
							<span className='Title'>{props.subject}</span>
							<span className='UKM_Name'>{props.ukm_id}</span>
							<span className='Date'>{props.created_at}</span>
							<span className='Content'>{props.content} </span>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default BeritaPost;


// class BeritaPost extends Component {
//     render (){
//         return(
//             <div className='BeritaPost'>
//                 <div className='Frame338_2'>
// 					<div className='Alltickets_3'>
// 						<div className='cardsdefault_3'>
// 							<div className='sheet_3'/>
// 							<div className='Group362_3'>
// 								<div className='Group337_3'>
// 									<div className='Group361_3'>
// 										<div className='Rectangle26_3'/>
// 										<img className='JuaraTaekwondo1_3' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
// 									</div>
// 								</div>
// 								<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_3'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
// 								<span className='UnitTaekwondoUnpad_3'>Unit Taekwondo Unpad</span>
// 								<span className='Jumat25Maret2022_3'>Jumat, 25 Maret 2022</span>
// 								<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya_3'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
//                 {/* <div className='Frame366'>
// 					<div className='Alltickets'>
// 						<div className='cardsdefault'>
// 							<div className='sheet'/>
// 							<div className='Group362'>
// 								<div className='Group337'>
// 									<div className='Group361'>
// 										<div className='Rectangle26'/>
// 										<img className='JuaraTaekwondo1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
// 									</div>
// 								</div>
// 								<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
// 								<span className='UnitTaekwondoUnpad'>Unit Taekwondo Unpad</span>
// 								<span className='Jumat25Maret2022'>Jumat, 25 Maret 2022</span>
// 								<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='Frame338'>
// 					<div className='Alltickets_1'>
// 						<div className='cardsdefault_1'>
// 							<div className='sheet_1'/>
// 							<div className='Group362_1'>
// 								<div className='Group337_1'>
// 									<div className='Group361_1'>
// 										<div className='Rectangle26_1'/>
// 										<img className='JuaraTaekwondo1_1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
// 									</div>
// 								</div>
// 								<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_1'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
// 								<span className='UnitTaekwondoUnpad_1'>Unit Taekwondo Unpad</span>
// 								<span className='Jumat25Maret2022_1'>Jumat, 25 Maret 2022</span>
// 								<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya_1'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='Frame338_1'>
// 					<div className='Alltickets_2'>
// 						<div className='cardsdefault_2'>
// 							<div className='sheet_2'/>
// 							<div className='Group362_2'>
// 								<div className='Group337_2'>
// 									<div className='Group361_2'>
// 										<div className='Rectangle26_2'/>
// 										<img className='JuaraTaekwondo1_2' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
// 									</div>
// 								</div>
// 								<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_2'>Unit Taekwondo Unpad berhasil meraih perunggu di Ganesha Cup 2022</span>
// 								<span className='UnitTaekwondoUnpad_2'>Unit Taekwondo Unpad</span>
// 								<span className='Jumat25Maret2022_2'>Jumat, 25 Maret 2022</span>
// 								<span className='UnitTaekwondoUnpadpadatanggal24Maret2022berhasilmeraihperunggupadakejuaraantaekwondotingkatnasionalpadaGaneshaCup2022PerunggutersebutdimenangkanolehBacaSelengkapnya_2'>Unit Taekwondo Unpad pada tanggal 24 Maret 2022 berhasil meraih perunggu pada kejuaraan taekwondo tingkat nasional pada Ganesha Cup 2022. Perunggu tersebut dimenangkan oleh ...... Baca Selengkapnya </span>
// 							</div>
// 						</div>
// 					</div>
// 				</div> */}
//             </div>
//         )
//     }
// }

// export default BeritaPost;