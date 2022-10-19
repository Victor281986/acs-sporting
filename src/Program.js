import React from "react";

import Navbar from "./components/Navbar";
import NavPhones from "./components/NavPhones";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./css/program.scss";

export default function Program() {
	document.title = "Program";
	
	return (
		<div className="program-container">
			<Navbar />
      <NavPhones />
			<Menu />

      <div className="precontent-program"></div>

			<div className="programs-wrapper">
				<div className="main-program">
	        <h3>Program competițional</h3>
	        <iframe
						src="https://www.frf-ajf.ro/hunedoara/competitii-fotbal/juniori-u13-grupa-3-11061/program"
						title="AJF Hunedoara - Program"
					/>
					<h3 id="matches">Meciuri</h3>
	        <iframe
						src="https://www.frf-ajf.ro/hunedoara/competitii-fotbal/juniori-u13-grupa-3--11061"
						title="AJF Hunedoara - Meciuri"
					/>
				</div>
			</div>
			
			<Footer />
		</div>
	)
}
