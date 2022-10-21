import React from "react";

import "../css/h-f-phones.scss";

import logo from "../images/sporting-logo.png";

export default function NavPhones() {
  let openMenu = false;	


  function openCloseMenu() {
		const menu = document.querySelector(".menu");
		const menuLinks = menu.querySelectorAll("a");
		const menuSocialLinks = menu.querySelectorAll(".social-links a");

		if (!openMenu) {
			menu.style.height = "465px";
			menu.style.opacity = "1";
			menu.style.zIndex = "10";

			menuLinks.forEach(link => {
				link.style.pointerEvents = "unset";
			});
			menuSocialLinks.forEach(link => {
				link.style.pointerEvents = "unset";
			});
			
			setTimeout(() => {
				const buttonIcon = document.querySelector(".header-phones button i");

				buttonIcon.classList.remove("fa-bars");
        			buttonIcon.classList.add("fa-times");
			});
			openMenu = true;

		} else {
			menu.style.height = "0";
			menu.style.opacity = "0";
			menu.style.zIndex = "-10";

			menuLinks.forEach(link => {
				link.style.pointerEvents = "none";
			});
			menuSocialLinks.forEach(link => {
				link.style.pointerEvents = "none";
			});
			
			setTimeout(() => {
				const buttonIcon = document.querySelector(".header-phones button i");

				setTimeout(() => {	
				  buttonIcon.classList.remove("fa-times");
          buttonIcon.classList.add("fa-bars");
				}, 300)
				
			})
			openMenu = false;
		}
		
	}

	setTimeout(() => {
    		const headerLogo = document.querySelector("#logo-phones")
		headerLogo.addEventListener("click", () => {
			window.location.replace("/")
		});
	}, 100);

	
	return (
		<div className="header-phones">
			<section>
				<img src={logo} alt="ACS Sporting Lupeni" id="logo-phones"/>
				<span>ACS Sporting Lupeni</span>
				<button onClick={openCloseMenu}>
					<i className="fa-solid fa-bars"></i>
				</button>
			</section>
		</div>
	)
}
