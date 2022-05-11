import React from 'react'
import { useState, useEffect } from "react";
import ImgAsset from '../resources'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/BeritaPost3.css";
import Sliderslick from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BeritaPost3(props) {
    const [berita, setBerita] = useState([]);
    const [infinite, setInfinite] = useState(true);

    const ukm_id = props.ukm_id;
    console.log(ukm_id);

    const settingsSlick = {
        infinite: infinite,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
        verticalSwiping: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            },
            dots: false,
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
            dots: false,
        },
        ],
    };

    useEffect(() => {
		axios
		  .get(`https://api-ukmscare.herokuapp.com/articles/ukm/${ukm_id}`)
		  .then((response) => {
			console.log(response.data.data);
			setBerita(response.data.data);
		  })
		  .catch((err) => {
			console.log(err);
		  });
	  }, []); 

    useEffect(() => {
        if (berita.length < 4) {
        setInfinite(false);
        } else {
        setInfinite(true);
        }
    }, [berita.length]);
    console.log(berita);
    console.log(infinite);

    return (
        <div>
        <section id="marketplace-product">
            <div >
            <Sliderslick {...settingsSlick} className="slickSlider">
                {berita.map((post) => (
                <Link className="link" to={`/beritasingle/${post.id}`} key={post.id}>
                    <div className="d-flex justify-content-center ">
                        <div className='Group302'>
                            <div className='Rectangle20'/>
                            <div className='Group390'>
                                <span className='UnitTaekwondoUnpadberhasilmeraihperunggudiGaneshaCup2013'>{post.subject}</span>
                                <img className='JuaraTaekwondo1' src = {ImgAsset.HomepageA_JuaraTaekwondo1} />
                                <span className='UnitTaekwondoUnpad'>{post.ukm.name}</span>
                                <span className='Jumat25Maret2022'>{post.created_at}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
            </Sliderslick>
            </div>
        </section>
        </div>
    );
}
