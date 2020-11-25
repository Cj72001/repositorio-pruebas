import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "./Rating";

export default function Ratings({ items }) {
  return (
    <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 pl-5 pr-4 mt-4">
      {items.map(({ title, pieces, id }) => (
        <Rating key={id} title={title} pieces={pieces} />
      ))}
    </section>
  );
}
