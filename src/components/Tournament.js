import React from "react";

export default function Tournament (props) {
  const { name, images, mainImage } = props;

  return (
    <div className="tournament">
	<div className="tournament-dropdown">
	    <section className="tournament-wrapper">
		<img src={mainImage}/>
		<span>{name}</span>
	    </section>
	</div>

	<div className="tournament-images">
            {images}
	</div>
    </div>
  );
}
