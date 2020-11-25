import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import CurrentRoom from "components/Group/CurrentRoom";
import Pagination from "components/Group/Pagination";
import Cards from "components/Card/Cards";
import queryString from "query-string";

export default function Group({ location }) {
  const [groups, setGroups] = useState([]);
  const [expiration, setExpiration] = useState(24);
  const { room } = queryString.parse(location.search);

  const API = "http://localhost:3001";

  useEffect(async () => {
    const response = await fetch(`${API}/get-tables/${room}`);
    const responseJSON = await response.json();
    console.log(responseJSON);
    if (!responseJSON) return { error: "We cannot connect" };
    else {
      if (responseJSON.error) {
        console.log(responseJSON);
      } else {
        setGroups(responseJSON);
      }
    }
  }, []);

  return (
    <Container>
      <CurrentRoom room={`Sala ${room}`} />
      <Cards
        cards={groups}
        setCards={setGroups}
        expiration={expiration}
        setExpiration={setExpiration}
        route="/create-table"
        cardName="Mesa"
        redirectRoute="/group/game-table"
        belong={room}
      />
      <Pagination />
    </Container>
  );
}
