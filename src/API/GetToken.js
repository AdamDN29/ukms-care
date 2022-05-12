import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';


export default function GetToken (){
    const [csrftoken, setToken] = useState();
	const test = "Test123";

    useEffect(() => {
		axios
		.get(`${process.env.REACT_APP_BACKEND_URL}csrf-token`)
		  .then((response) => {
			// console.log(response.data.data);
			setToken(response.data.data);
		  })
		.catch((err) => {
			console.log(err);
		});

	},[]); 

	return csrftoken;
}
 
 