import React from 'react';
import { Link } from "react-router-dom";

import logo from '../images/sporting-logo.png';
import "../css/header-footer.scss";

import elieCon from "../images/partners/elie-concept-grey.png";
import exoEng from "../images/partners/exo-engineering-grey.png";
import dncCons from "../images/partners/dnc-construct-grey.png";
import vladLucian from "../images/partners/vlad-lucian-grey.png";

export default function Navbar() {

	setTimeout(() => {
      const headerLogo = document.querySelector("#header-logo")

	  headerLogo.addEventListener("click", () => {
			window.location.replace("/")
		})
	}, 100);

    return (
        <header className="header">
          <nav>
			<div className="header-first-line">
              <Link to="/">Acasă</Link>
              <Link to="/parteneri">Parteneri</Link>
              <Link to="/contact">Contactează-ne</Link>
              <a href="#">Galerie foto</a>
							<a href="https://www.facebook.com/CS-Sporting-Lupeni-2241846622740213" type="_blank">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/a.c.ssportinglupeni/" type="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@victorpalivan" type="_blank">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://twitter.com/sportinglupeni" type="_blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
							
			<div className="header-second-line">
              <img src={logo} alt="ACS Sporting Lupeni" id="header-logo"/>
              <div className="header-partners">
				<a href="https://www.facebook.com/ellieconcept" target="_blank">
					<img src={elieCon} />
				</a>
				<a href="https://facebook.com/OptimizarisoftwareautoLupeni/" target="_blank">
                  <img src={exoEng} />
				</a>
				<a href="https://www.facebook.com/people/DNC-Construct/100058326138159/" target="_blank">
                  <img src={dncCons} />
				</a>
				<a href="https://www.facebook.com/vlad1506" target="_blank">
                  <img src={vladLucian} />
				</a>
			</div>
			<hr />
			<div className="header-links">
				<Link to="/echipe">ECHIPE</Link>
				<Link to="/parteneri">PARTENERI</Link>
				<Link to="/program">PROGRAM COMPETIȚIONAL</Link>
				<Link to="/antrenament-individual">ANTREMAENT INDIVIDUAL</Link>
				<a href="#">GALERIE FOTO</a>
				<Link to="/redirectioneaza">REDIRECȚIONEAZĂ 3.5%</Link>
			</div>
		</div>
		</nav>
    </header>
  )
}
