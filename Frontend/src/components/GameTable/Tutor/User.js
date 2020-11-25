import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function User({ name, img, id }) {
  return (
    <div className="col m-sm-1 mx-md-n1 mx-lg-n1 bg-primary rounded-lg">
      <Card className="card my-2 text-center">
        <Card.Img
          variant="top"
          src={img}
          alt={name + id}
          className="w-75 h-75 m-auto"
        />
        <Card.Title className="card-body">{name}</Card.Title>
      </Card>
    </div>
  );
}
