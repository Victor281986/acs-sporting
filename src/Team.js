import React from 'react';

import Navbar from "./components/Navbar";
import NavPhones from "./components/NavPhones";
import Menu from "./components/Menu"
import Footer from "./components/Footer";
import Card from "./components/Card";

import teamU9 from "./images/team-u9.jpg";
import teamU13 from "./images/team-u13.jpg";

import "./css/team.scss"

export default function Team() {
	document.title = "Echipe";
	
	return (
		<div className="main-team">
			<Navbar />
      			<NavPhones />
			<Menu />

			<div className="precontent-team"></div>

			<div className="card-row">
				<Card 
					key={1}
					img={teamU9}
					name={"Echipa U9"}
					link="/echipa-u9"
				/>
				
				<Card 
					key={2}
					img={teamU13}
					name={"Echipa U13"}
					link="/echipa-u13"
				/>
			</div>
			
			<Footer />
		</div>
	)
}
