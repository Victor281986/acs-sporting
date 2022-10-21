import React from "react";

export default function Tournament (props) {
  const { name, images } = props;
  setTimeout(() => {
      document.querySelectorAll(".tournament-dropdown").forEach(tournament => {
          tournament.dataset.open = "false";
      })
    }, 100);
  
  const openTournament = e => {
    const tournament = e.target;
    const imagesContainer = tournament.nextElementSibling;
    const tournamentImages = imagesContainer.querySelectorAll("img");
    const arrow = tournament.querySelector("i");

    arrow.style.transform = "rotate(0deg)";
    if (tournament.dataset.open === "true") {
        tournamentImages.forEach(image => {
            image.style.margin = "0";
            image.style.height = "0"
        });
        tournament.dataset.open = "false";
        return;
    }
    
    arrow.style.transform = "rotate(-90deg)";
    tournamentImages.forEach(image => {
        image.style.margin = "1rem 2rem";
        image.style.height = "unset"
    });
    tournament.dataset.open = "true";

  }

  return (
    <div className="tournament">
        <div className="tournament-dropdown" onClick={openTournament}>
            <span>{name}</span>
            <i className="fa-solid fa-chevron-left"></i>
        </div>

        <div className="tournament-images">
            {images}
        </div>
    </div>
  );
}
