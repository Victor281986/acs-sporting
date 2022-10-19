import React from "react";
import emailjs from "emailjs-com";
import "../css/custom.scss";
import envelope from "../images/envelope.png"


export default function Form() {
  
	const labelAnimation = (e) => {
		
		if (e.target) {
			const htmlFor = e.target.name;
		
		 
      document.querySelector(`label[for="${htmlFor}"]`).style.transform = "translateY(-175%)";
			
		} else {
			const forProp = e.name;

			document.querySelector(`label[for="${forProp}"]`).style.transform = "translateY(-175%)";
		}
	};

	const checkForm = inputs => {
		let result = true;
		inputs.forEach(input => {
			if (input.value === "") {
				labelAnimation(input);
				input.placeholder = "Acest câmp este obligatoriu";
				input.style.background = "#ffcccc";

				result = false;
			};

		})

		return result;
	}

	
  const sendEmail = e => {
		const form = e.target;
		
    e.preventDefault();
		
		emailjs.sendForm('service_sporting', 'template_sporting', form, process.env.REACT_APP_EMAILJS_PUBLICKEY)
    .then(() => {
			const inputs = [
				document.getElementById("name"),
				document.getElementById("email"),
				document.getElementById("subject"),
				document.getElementById("message")
			];
      const checkmark = document.getElementById("check");

			if(!checkForm(inputs))
				return;
			
			form.style.opacity = "0";
			document.querySelector("h2:last-of-type").style.opacity = "0";
			form.style.height = "200px";

      setTimeout(() => {
				checkmark.classList.add("check-animation");
			}, 450);
			
    }, function(error) {
       console.log('FAILED...', error);
    });
	}

	return (
		<div className="form-container">
			<div className="form">
				<form onSubmit={sendEmail}>
					<div className="input-container">
					  <label htmlFor="name">
					  	<i className="fa fa-user"></i>
							&nbsp;
              Nume
							<span>*</span>
					  </label>
						<input type="text" name="name" onClick={labelAnimation} id="name"/>
					</div>
					<div className="input-container">
					  <label htmlFor="email">
						  <i className="fa fa-envelope"></i>
							&nbsp;
              Email
							<span>*</span>
					  </label>
						<input type="email" name="email" onClick={labelAnimation} id="email"/>
					</div>
					<div className="input-container">
						<label htmlFor="subject">
						  <i className="fa fa-book-open-reader"></i>
							&nbsp;
              Subiect
							<span>*</span>
					  </label>
						<input type="text" name="subject" onClick={labelAnimation} id="subject"/>
					</div>
					<div className="input-container">
						<label htmlFor="message">
						  <i className="fa fa-message"></i>
							&nbsp;
              Mesaj
							<span>*</span>
					  </label>
						<textarea name="message" onClick={labelAnimation} id="message"/>
					</div>
				  
	        
					
	        
					<button>
						<i className="fa-solid fa-paper-plane"></i>
						&nbsp;
						TRIMITE
					</button>
					
					<img src={envelope} alt="Contact" />
				</form>

			</div>

			<div className="ckeckmark-wrapper">
				<span id="check" className="checkmark"></span>
			</div>
		</div>
	)
}
