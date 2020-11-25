import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pieces from "./Pieces";
import Title from "./Title";

export default function RowInfo({ title, pieces }) {
  return (
    <div className="col my-2">
      <Title title={title} />
      <Pieces pieces={pieces} />
    </div>
  );
}
