import React from "react";

import "./css/h-f-phones.scss";
import "./css/partners.scss";
import partnersInfo from "./js/partners.js";

import Navbar from "./components/Navbar";
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import Footer from "./components/Footer";
import Card from './components/Card';

export default function Partners() {
	document.title = "Parteneri";
  
	const partners = partnersInfo.map(partner => {
		return <Card
				key={partner.key}
	      		img={partner.img}
				name={partner.name}
				link={partner.link}
			/>
	});
  
	const partnersRow1 = partners.slice(0, 2);
	const partnersRow2 = partners.slice(2);
  
	document.querySelector("body").style.overflow = "scroll";
  	
	return (
		<div className="main-partners">
			<Navbar />
			<NavPhones />
			<Menu />
      			
			<div className="precontent-partners"></div>
      			
			<div className="description">
				<p>
					Aceștia sunt partenerii noștri locali, care au fost alături de clubul nostru încă de la început și cu care am reușit să punem bazele unui parteneriat solid și de durată.
					<br />
					Am ales acest parteneriat, în special prin prisma seriozității, încrederii și profesionalismului de care au dat dovadă în toți acești ani de activitate profesională, ani în care și-au creat o reputație excelență în rândul comunității noastre.
				</p>
			</div>
      			
			<div className="row">
				{partnersRow1}
			</div>
      			
			<div className="row">
				{partnersRow2}
			</div>

			<Footer />
		</div>
	)
};
