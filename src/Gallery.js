import React from "react";

import Navbar from './components/Navbar';
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import Tournament from "./components/Tournament";
import Footer from './components/Footer';

import "./css/gallery.scss";

import cupaStraja19 from "./js/cupa-straja-19";
import cupaStraja22 from "./js/cupa-straja-22";
import cupaCraciunului21 from "./js/cupa-craciun-21";


export default function Gallery() {
	document.title = "Galerie Foto";

        const cupaCraciunului21Images = cupaCraciunului21.map(img => {
          return <img
			key={cupaCraciunului21.indexOf(img)}
		  	src={img}
			alt=""
		  />
        });

        const cupaStraja19Images = cupaStraja19.map(img => {
			return <img
				key={cupaStraja19.indexOf(img)}
				src={img}
				alt=""
		    />
        });

        const cupaStraja22Images = cupaStraja22.map(img => {
			return <img
				key={cupaStraja22.indexOf(img)}
				src={img}
				alt=""
		    />
        });
	
	return (
		<div className="main-gallery"> 
			<Navbar />
			<NavPhones />
			<Menu />

			<div className="precontent-gallery"></div>

			<Tournament
				name="Cupa Crăciunului 2021"
				images={cupaCraciunului21Images}
			/>

			<Tournament
				name="Cupa Straja 2019"
				images={cupaStraja19Images}
			/>

			<Tournament
				name="Cupa Straja 2022"
				images={cupaStraja22Images}
			/>

			<Footer />
		</div>
	)
}
