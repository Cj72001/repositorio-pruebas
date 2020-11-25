import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Piece from "./Piece";

export default function Pieces({ pieces }) {
  return (
    <div className="d-flex flex-column">
      {pieces.map((piece) => (
        <Piece key={Math.random() * (1, 100) + 100} title={piece} score="00" />
      ))}
    </div>
  );
}
