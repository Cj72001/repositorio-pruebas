import React, { Fragment } from "react";
import Score from "components/Statistic/users/Score";
import Ratings from "components/Statistic/users/Ratings";

export default function UserStatistic() {
  const items = [
    {
      title: "Piezas restantes",
      pieces: ["Rectangulos", "Triangulos", "Cuadrados"],
      id: 1,
    },
    {
      title: "Bonus",
      pieces: ["Bandera en la cima", "Uso de escudos", "Tiempo restante"],
      id: 2,
    },
    {
      title: "Penalización",
      pieces: ["Piezas no alineadas", "Piezas del mismo color"],
      id: 3,
    },
    {
      title: "Tiempo de juego",
      pieces: ["Tiempo empleado"],
      id: 4,
    },
  ];
  return (
    <Fragment>
      <Ratings items={items} />
      <Score score="100" />
    </Fragment>
  );
}
