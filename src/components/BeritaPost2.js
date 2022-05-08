import { useState, useEffect } from "react";
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/BeritaPost2.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';


class BeritaPost2 extends Component {
	state = {
		post: []
		
	}

	componentDidMount(){
		axios.get('https://api-ukmscare.herokuapp.com/articles')
		.then((response)=>{
			console.log(response.data.data);
			this.setState({
				post: response.data.data
			})
		})
		// const date = post.created_at
		// const dt = new Date(date)

	}

	

    render() {
		return (
			<div className='Group334'>
			{	
				this.state.post.map(post => {
					<Link to={`/beritasingle/${post.id}`}>
					
					
						
						<div className='Group327'>
							<div className='Rectangle25'/>
							<div className='Group325_1'>
								<img className='JuaraTaekwondo1_2' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
								<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_2'>{post.subject}</span>
								<span className='UnitTaekwondoUnpad_2'>{post.ukm.name}</span>
								<span className='Jumat25Maret2022_2'>{post.created_at}</span>
							</div>
						</div>
					</Link>	
				})
			}
			</div>

		)
	}
}

export default BeritaPost2;

// function BeritaPost2 () {
// 	const [post, setPost] = useState([]);

// 	useEffect(() => {
// 		axios.get('https://api-ukmscare.herokuapp.com/articles')
// 		.then((response)=>{
// 			console.log(response.data.data);
// 			setPost(response.data.data);
// 		})
// 	  }); 

// 	return (
// 		<div className='Group334'>
// 			{	
// 				post.map((berita) => {
// 					<Link to={`/beritasingle/${berita.id}`}>
					
// 						<div className='Group327'>
// 							<div className='Rectangle25'/>
// 							<div className='Group325_1'>
// 								<img className='JuaraTaekwondo1_2' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
// 								<span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2022_2'>{berita.subject}</span>
// 								<span className='UnitTaekwondoUnpad_2'>{berita.ukm.name}</span>
// 								<span className='Jumat25Maret2022_2'>{berita.created_at}</span>
// 							</div>
// 						</div>
// 					</Link>	
// 				})
// 			}
// 			</div>
// 	)	
// }

// export default BeritaPost2;

