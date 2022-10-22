import React from "react";

export default function PlayerCard(props) {
	const { img, name, team, cardClass, png } = props;
	let finalClass = "player-card " + cardClass;

	let dir, pngStatus = "", extension = ".jpg";
  if (team === "U9")
    dir = "u9/";
	else
    dir = "u13/";

	if (png) {
		extension = ".png";
		dir = "u9-png/";
		if (team === "U13") {
			dir = "u13-png/";
		}
	}

	if (name === "Alesia") {
		extension = ".jpg";
	}
	
	return (
		<span className={finalClass}>
			<img src={"http://sportinglupeni.ro/images/" + dir + img + extension} alt={name} />
			<h2>{name}</h2>
		</span>
	)
}
