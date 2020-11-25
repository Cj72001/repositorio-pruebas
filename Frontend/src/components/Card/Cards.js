import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardBody from "./CardBody";
import AddCard from "./AddCard";

export default function Cards({
  cards,
  setCards,
  expiration,
  setExpiration,
  route,
  cardName,
  redirectRoute,
  belong
}) {

  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
      {cards.map((card) => (
        <CardBody
          key={Math.random() * 1000 + 0}
          cardName={cardName}
          name={card.title}
          expiration={card.expiration}
          redirectRoute={redirectRoute}
        />
      ))}
      <AddCard
        cards={cards}
        setCards={setCards}
        expiration={expiration}
        setExpiration={setExpiration}
        route={route}
        cardName={cardName}
        belong={belong}
      />
    </div>
  );
}
