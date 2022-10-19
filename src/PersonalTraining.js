import React from "react";

//import "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"

import Navbar from "./components/Navbar";
import NavPhones from "./components/NavPhones";
import Menu from "./components/Menu";
import MainTraining from "./components/MainTraining";
import Footer from "./components/Footer";

import "./css/personal-training.scss";

export default function PersonalTraining() {
	document.title = "Antrenament individual";
	
	return (
		<div>
			<Navbar />
      		<NavPhones />
			<Menu />

			<div className="precontent-training"></div>
					
			<MainTraining />
						
			<Footer />
		</div>
	)
};
