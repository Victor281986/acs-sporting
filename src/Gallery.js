import React from "react";

import Navbar from './components/Navbar';
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import Footer from './components/Footer';

import "./css/gallery.scss";

// images from Cupa Craciunului 2021
import cupaCraciun1 from "./images/tournaments/cupa-craciunului-2021/1.jpg";
import cupaCraciun2 from "./images/tournaments/cupa-craciunului-2021/2.jpg";
import cupaCraciun3 from "./images/tournaments/cupa-craciunului-2021/3.jpg";
import cupaCraciun4 from "./images/tournaments/cupa-craciunului-2021/4.jpg";
import cupaCraciun5 from "./images/tournaments/cupa-craciunului-2021/5.jpg";
import cupaCraciun6 from "./images/tournaments/cupa-craciunului-2021/6.jpg";
import cupaCraciun7 from "./images/tournaments/cupa-craciunului-2021/7.jpg";

// images from Cupa Straja 2019
import cupsStraja191 from "./images/tournaments/cupa-straja-2019/1.jpg";
import cupsStraja192 from "./images/tournaments/cupa-straja-2019/2.jpg";
import cupsStraja193 from "./images/tournaments/cupa-straja-2019/3.jpg";
import cupsStraja194 from "./images/tournaments/cupa-straja-2019/4.jpg";
import cupsStraja195 from "./images/tournaments/cupa-straja-2019/5.jpg";
import cupsStraja196 from "./images/tournaments/cupa-straja-2019/6.jpg";
import cupsStraja197 from "./images/tournaments/cupa-straja-2019/7.jpg";
import cupsStraja198 from "./images/tournaments/cupa-straja-2019/8.jpg";
import cupsStraja199 from "./images/tournaments/cupa-straja-2019/9.jpg";
import cupsStraja1910 from "./images/tournaments/cupa-straja-2019/10.jpg";
import cupsStraja1911 from "./images/tournaments/cupa-straja-2019/11.jpg";
import cupsStraja1912 from "./images/tournaments/cupa-straja-2019/12.jpg";
import cupsStraja1913 from "./images/tournaments/cupa-straja-2019/13.jpg";
import cupsStraja1914 from "./images/tournaments/cupa-straja-2019/14.jpg";
import cupsStraja1915 from "./images/tournaments/cupa-straja-2019/15.JPG";
import cupsStraja1916 from "./images/tournaments/cupa-straja-2019/16.JPG";




export default function Gallery() {
	document.title = "Galerie Foto";
	
	return (
		<div class="main-gallery"> 
			<Navbar />
			<NavPhones />
			<Menu />

			<div className="precontent-gallery"></div>

			<div className="tournament">
				<div className="tournament-dropdown">
					<section className="tournament-wrapper">
						<img />
						<span></span>
					</section>
				</div>

				<div className="tournament-images">

				</div>
			</div>

			<div className="tournament">
				<div className="tournament-dropdown">
					<section className="tournament-wrapper">
						<img />
						<span></span>
					</section>
				</div>

				<div className="tournament-images">

				</div>
			</div>

			<div className="tournament">
				<div className="tournament-dropdown">
					<section className="tournament-wrapper">
						<img />
						<span></span>
					</section>
				</div>

				<div className="tournament-images">

				</div>
			</div>

			<Footer />
		</div>
	)
}
