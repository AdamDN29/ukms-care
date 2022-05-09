import React, { useEffect } from 'react'
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/UKMPost.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';

const UKMPost = (props) => {

	
	// axios.get(`https://api-ukmscare.herokuapp.com/ukms/${props.ukm_id}`)
	// .then((response)=>{
	// 	console.log(response.data.data);
	// 	// ukm_ids = response.data.data;
	// 	// this.setState({
	// 	// 	post: response.data.data
	// 	// })
	// })
    console.log(props.ukm_id);

    return (
		<Link to={`/detailukma/${props.ukm_id}`}>
			
               
                    <div className='container'>
                        {/* <img className='Rectangle8' src = {ImgAsset.UKMUnpadA_Rectangle8} /> */}
                        <img className='taekwondoremovebgpreview3' src = {ImgAsset.UKMUnpadB_taekwondoremovebgpreview3} />
                        <span className='UNITTaekwondoUnpad'>{props.ukm_name} </span>
                    </div>
             
				{/* <div className='Frame338_2'>
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
								<span className='UKM_Name'>{props.ukm_name}</span>
								<span className='Date'><ReactTimeAgo date={dt} locale="en-US"/></span>
								<span className='Content'>{contents.slice(0,500)} ... Berita Selengkapnya</span>
							</div>
						</div>
					</div>
				</div> */}
			
		</Link>
    )
}

export default UKMPost;

