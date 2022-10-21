import React from "react";

import Navbar from "./components/Navbar";
import NavPhones from "./components/NavPhones";
import Menu from "./components/Menu";
import PlayerCard from "./components/PlayerCard";
import Footer from "./components/Footer";

import playersU13 from "./js/playersU13";
import "./css/team-u13.scss";

export default function TeamU9() {
	document.title = "Echipa U13";
	let counter = 1;

	setTimeout(() => {
		if (window.location.href.includes("echipa-u13")) {
			document.getElementById("footer").style.marginTop = "700px";
		document.querySelector(".toggle-container").style.display = "none";
		}
	}, 50);

	const cards = playersU13.map(player => {
		let classForCard = "card-" + counter;
		counter++;
		return <PlayerCard
			key={player.key}
			cardClass={classForCard}
			img={player.img}
			png={true}
			name={player.name}
			team={player.team}
		/>
	});
	
	return (
		<div className="main-team-u13">
			<Navbar />
      		<NavPhones />
			<Menu />
			
			<div className="precontent-u13">
</div>


			<div className="cards-container">
				{cards}
			</div>

			<Footer />
		</div>
	)
}
