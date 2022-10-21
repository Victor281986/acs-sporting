import React from "react";

import "./index.scss";
import "./css/h-f-phones.scss";

import Navbar from './components/Navbar';
import NavPhones from "./components/NavPhones";
import Menu from './components/Menu';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

import playersU9 from "./js/playersU9";
import playersU13 from "./js/playersU13";

export default function Home() {
	
	return (
		<div>
			<Navbar />
			<NavPhones />
			<Menu />
			<Hero />
			<AboutUs />
			<Footer />
   		</div>
	)
}
