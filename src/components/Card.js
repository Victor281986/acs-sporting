import React from "react";

import partnersInfo from "../js/partners";

export default function Card(props) {
	const { img, name, link } = props;
	const redirect = e => {
		let linkTarget;
		if (window.location.href.includes("/parteneri"))
			linkTarget = "_blank"
		else
			linkTarget = "_self"

		window.open(link, linkTarget, 'noopener,noreferrer')
	}
	
	
	return (
		<div className="card" onClick={redirect}>
			<div className="img-container">
				<img src={img} alt={name} />
			</div>
			<a href={link}>
				{name}
				<i className="fa-solid fa-arrow-up-right-from-square"></i>
			</a>
		</div>
	)
}
