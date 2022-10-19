import React from "react";

import Form from "./Form";
import Map from "./Map"

export default function ContactMain() {
	return (
		<div className="contact-main">
			<h2>ACS Sporting Lupeni</h2>
			<p>Județul Hunedoara, Municipiul Lupeni (335600), Strada Stadionului nr. 2</p>
			
			<br />
			<br />

			<span>
				<b>Telefon:</b>
				&ensp; +40725436151
			</span>
			<br />
			<span>
				<b>Email:</b>
				&ensp; <a href="mailto:palivanvictor@yahoo.co.uk">palivanvictor@yahoo.co.uk</a>
			</span>

			<br />
			<br />

			<h2>Trimite-ne un mesaj</h2>
			<Form />

			<hr />
			<div className="map-container">
				<Map />
      </div>
		</div>
	)
}
