import React from 'react';

import Home from './Home';
import Team from './Team';
import TeamU9 from './TeamU9';
import TeamU13 from './TeamU13';
import Redirect from "./Redirect";
import Partners from './Partners';
import Contact from './Contact';
import Program from './Program';
import Gallery from './Gallery';
import PersonalTraining from './PersonalTraining';

import { Route, Routes } from "react-router-dom";


function App() {
	
  return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/parteneri" element={<Partners />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/echipe" element={<Team />} />
			<Route path="/echipa-u9" element={<TeamU9 />} />
			<Route path="/echipa-u13" element={<TeamU13 />} />
			<Route path="/redirectioneaza" element={<Redirect />} />
			<Route path="/program" element={<Program />} />
			<Route path="/galerie-foto" element={<Gallery />} />
			<Route path="/antrenament-individual" element={<PersonalTraining />} />
		</Routes>
  );
}

export default App;
