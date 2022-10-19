import React from "react";

import dncConstruct from "../images/partners/dnc-construct-grey.png"
import elieConcept from "../images/partners/elie-concept-grey.png"
import exoEngineering from "../images/partners/exo-engineering-grey.png"
import vladLucian from "../images/partners/vlad-lucian-grey.png";

import "../css/header-footer.scss";
import "../css/h-f-phones.scss";

export default function Footer() {
	return (
		<footer className="footer" id="footer">
			<div className="upper-footer">
				<span id="footer-contact">
					Contactează-ne:
					<br />
					<i className="fa-solid fa-envelope"></i>
					palivanvictor@yahoo.co.uk
					<br />
					<i className="fa-solid fa-phone"></i>
					<span>+40725436151</span>
					<br />
					<i className="fa-solid fa-location-dot"></i>
					<span>Str. Stadionului, nr. 2, Lupeni</span>
				</span>

				<div className="footer-main-links">
					<div className="footer-contact">
						<a href="https://www.facebook.com/CS-Sporting-Lupeni-2241846622740213" target="_blank">
							<i className="fa-brands fa-facebook-f"></i>
						</a>
						<a href="https://www.instagram.com/a.c.ssportinglupeni/" target="_blank">
								<i className="fa-brands fa-instagram"></i>
						</a>
						<a href="https://www.tiktok.com/@victorpalivan" target="_blank">
								<i className="fa-brands fa-tiktok"></i>
						</a>
						<a href="mailto:palivanvictor@yahoo.co.uk" target="_blank">
								<i className="fa-solid fa-at"></i>
						</a>
					</div>
					<div className="footer-partners">
						<h3>Parteneri</h3>
						<hr />
						<a href="https://www.facebook.com/ellieconcept" target="_blank">
							<img src={elieConcept} className="partners"/>
						</a>
						<a href="https://www.facebook.com/people/DNC-Construct/100058326138159/" target="_blank">
							<img src={dncConstruct} className="partners"/>
						</a>
						<a href="https://facebook.com/OptimizarisoftwareautoLupeni/" target="_blank">
							<img src={exoEngineering} className="partners"/>
						</a>
						<a href="https://www.facebook.com/vlad1506" target="_blank">
							<img src={vladLucian} className="partners"/>
						</a>
					</div>
				</div>
					

				<span id="legal">
					<a href="#" >Politica de confidențialitate</a>
					<br />
					<a href="#">Termeni si condiții</a>
				</span>
				
			</div>

			<div className="lower-footer">
				<span>Proudly made by  
					<a href="https://github.com/AlinAlexandruPeter" target="_blank" >AlinAlexandruPeter</a>
				</span>
				<a href="https://github.com/AlinAlexandruPeter/acs-sporting" target="_blank">
					<i className="fa-brands fa-github"></i>
				</a>
				<span>© ACS Sporting Lupeni, 2022</span>
			</div>
			
		</footer>
	)
}
