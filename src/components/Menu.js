import React from 'react';
import { Link } from "react-router-dom";

export default function Menu() {
	
	return (
			<div className="menu">
				<Link to="/">Acasă</Link>
				<Link to="/echipe">Echipe</Link>
				<Link to="/parteneri">Parteneri</Link>
				<Link to="/contact">Contactează-ne</Link>
				<Link to="/program">Program competițional</Link>
				<Link to="/antrenament-individual">Antrenament individual</Link>
				<Link to="/galerie-foto">Galerie foto</Link>
				<Link to="/redirectioneaza">Redirecționează 3.5%</Link>
				
				<div className="social-links">
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
			</div>
	)
	
}
