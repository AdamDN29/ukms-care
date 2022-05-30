import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import { Component } from 'react/cjs/react.production.min'
import ImgAsset from '../resources'
import '../css/UKMPost.css';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import URLChecker from '../hook/URLChecker'
import { Col } from 'react-bootstrap';

const UKMPost = (props) => {

    var statusAvatar = URLChecker(props.avatar);

    return (

        <Col >
            <Link to={`/detailukm/${props.ukm_id}`}>
            <Card className='UKMCard'>
                { props.avatar !== null ? (
                         <Card.Img variant="top" className='UKMImg' src={statusAvatar} />
                    ) : (
                        <Card.Img variant="top" className='UKMImg' src={ImgAsset.ukms_care_logo} />
                    )
                }
                <Card.Body >
                <Card.Title variant="center" className='UKMName'>{props.ukm_name}</Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </Col>

    )
}

export default UKMPost;

