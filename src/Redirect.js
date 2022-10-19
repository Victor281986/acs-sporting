import React from "react";

import Navbar from "./components/Navbar";
import NavPhones from "./components/NavPhones";
import Menu from "./components/Menu";
import RedirectSteps from "./components/RedirectSteps"
import Footer from "./components/Footer";

import "./css/redirect.scss"

export default function Redirect() {
	document.title = "Redirecționează";
	
	return (
		<div>
			<Navbar />
      <NavPhones />
			<Menu />

      <div className="precontent-redirect">
				<div className="text-container">
					Redirecționează 3.5%
				</div>
			</div>

			<div className="main-redirect">
			  <RedirectSteps />
			</div>
			
			<Footer />
		</div>
	)
}
