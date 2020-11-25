import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "components/Room/Header";
import Pagination from "components/Room/Pagination";
import Cards from "components/Card/Cards";

export default function Room() {
  const [groups, setGroups] = useState([]);
  const [expiration, setExpiration] = useState(24);

  const API = "http://localhost:3001";


  useEffect(async () => {
    const response = await fetch(`${API}/get-rooms`);
    const responseJSON = await response.json();
    if (!responseJSON) return { error: "We cannot connect" };
    else {
      if (responseJSON.error) {
        console.log(responseJSON)
      } else {
        setGroups(responseJSON)
      }
    }
  },[])

  return (
    <Container>
      <Header />
      <Cards
        cards={groups}
        setCards={setGroups}
        expiration={expiration}
        setExpiration={setExpiration}
        route='/create-room'
        cardName='Sala'
      />
      <Pagination />
    </Container>
  );
}
