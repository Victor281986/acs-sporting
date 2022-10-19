import React from "react";

import "./css/contact.scss";

import Navbar from './components/Navbar';
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import ContactMain from './components/ContactMain';
import Footer from './components/Footer';

export default function Contact() {
	document.title = "Contact";
	
	return (
		<div>
			<Navbar />
			<NavPhones />
			<Menu />
			
			<div className="precontent-contact"></div>

			<div className="contact-main-container">
				<ContactMain />
			</div>
			
			<Footer />
		</div>
	)
}
