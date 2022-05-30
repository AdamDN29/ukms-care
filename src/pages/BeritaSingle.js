import { useState, useEffect } from "react";
import '../css/BeritaSingle.css'
import * as SVGAsset from '../SVG/index'
import ImgAsset from '../resources'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackButton from "../components/BackButton";
import moment from 'moment'
import 'moment/locale/id'
import axios from "axios";
import { Button } from "reactstrap";
import { useHistory } from 'react-router-dom'
import URLChecker from '../hook/URLChecker'

function BeritaSingle (props) {
	const { articles_id } = props.match.params;

	let history = useHistory();

	const [single, setSingle] = useState([]);
	const [ukm, setUKM] = useState([]);
	const [imageHolder, setImageHolder] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
		  .get(`https://api-ukmscare.herokuapp.com/articles/${articles_id}`)
		  .then((response) => {
			setSingle(response.data.data);
			setUKM(response.data.data.ukm);
			console.log(response.data.data)
			var statusAvatar = URLChecker(response.data.data.image);
			setImageHolder(statusAvatar);
			setLoading(false);
		  })
		  .catch((err) => {
			console.log(err);
			setLoading(false);
		  });
	},[]); 
	const date = new Date(single.created_at)
	console.log(date);

	return (
		<div className='BeritaSingle_BeritaSingle'>
			<Navbar />
			<div className='Vectors'>
				<img className='Vector' src = {ImgAsset.BeritaSingle_Vector} />
				<img className='Vector_1' src = {ImgAsset.BeritaSingle_Vector_1} />
			</div>
			<div className='Vectors_1'>
				<img className='Vector_2' src = {ImgAsset.BeritaSingle_Vector_2} />
				<img className='Vector_3' src = {ImgAsset.BeritaSingle_Vector_3} />
			</div>
			{
				loading === true ?(	<div> <span className='notFound2'>Loading...</span></div>
				):(
					<>
						<div className='Frame367'>
							<span className='Subject'>{single.subject}</span>
						</div>
						<div className='Frame369'>
							<span className='UKM_Name'>{ukm.name}</span>
						</div>
						<div className='Frame370'>
							<span className='Time'>{moment(date).format('LLLL')} </span>
						</div>
						<div className='Frame371'>
							<img className='Image' src = {imageHolder} />
						</div>
						<div className='Frame372'>
							<textarea disabled = {true} defaultValue={single.content} className='content' textarea/>
							{/* <span className='content'>
								{single.content}
							</span> */}
						</div>	
					</>
				)
			}
			
			
			<BackButton/>

			< Footer />
		</div>
	)	
}

export default BeritaSingle;