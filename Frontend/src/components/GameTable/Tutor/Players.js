import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import User from "components/GameTable/Tutor/User";
import Start from "./Start";
import Avatar01 from "img/Avatars/Avatar01.jpg";
import Avatar02 from "img/Avatars/Avatar02.jpg";
import Avatar03 from "img/Avatars/Avatar03.jpg";
import Avatar04 from "img/Avatars/Avatar04.jpg";

export default function Players() {
  const users = [
    { name: "HenCor2019", img: Avatar01, id: 0 },
    { name: "LupexXx15", img: Avatar02, id: 1 },
    { name: "MarsLo", img: Avatar03, id: 2 },
    { name: "La mascara", img: Avatar04, id: 3 },
  ];
  return (
    <Fragment>
      <Container
        className="row
        row-cols-xs-2
        row-cols-sm-2
        row-cols-md-2
        row-cols-lg-4
        m-auto
        justify-content-center"
      >
        {users.map((user) => (
          <User key={user.id} name={user.name} img={user.img} id={user.id} />
        ))}
      </Container>
      <Start />
    </Fragment>
  );
}
