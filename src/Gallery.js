import React from "react";

import Navbar from './components/Navbar';
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import Footer from './components/Footer';

import "./css/gallery.scss";

import cupaStraja19 from "./js/cupa-straja-19";
import cupaStraja22 from "./js/cupa-strsja-22";
import cupaCraciunului21 from "./js/cupa-craciunului-21";

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
