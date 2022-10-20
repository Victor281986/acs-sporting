import React from "react";

export default function Tournament(props) {
  const { name, images } = props;

  return (
    <div className="tournament">
      <div className="tournament-dropdoen">
        <span>{name}</span>
      </div>

      <div className="imgs-container">
        {images}
      <div>
    </div>
  );
}
