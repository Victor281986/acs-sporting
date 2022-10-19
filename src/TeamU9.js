import React from "react";

import Navbar from "./components/Navbar";
import NavPhones from "./components/NavPhones";
import Menu from "./components/Menu";
import PlayerCard from "./components/PlayerCard";
import Footer from "./components/Footer";

import playersU9 from "./js/playersU9";
import "./css/team-u9.scss";

export default function TeamU9() {
	document.title = "Echipa U9";
	let counter = 1;

	setTimeout(() => {
		if (window.location.href.includes("echipa-u9")) {
			document.getElementById("footer").style.marginTop = "700px";
			document.querySelector(".toggle-container").style.display = "none";
		}
	}, 50);

	const cards = playersU9.map(player => {
		let classForCard = "card-" + counter;
		counter++;
		return <PlayerCard
			key={player.key}
			cardClass={classForCard}
			img={player.img}
			png = {true}
			name={player.name}
			team={player.team}
		/>
	});
	
	return (
		<div className="main-team-u9">
			<Navbar />
      		<NavPhones />
			<Menu />
			
			<div className="precontent-u9"></div>

			<div className="main-u9">
			</div>

			<div className="cards-container">
				{cards}
			</div>

			<Footer />
		</div>
	)
}
