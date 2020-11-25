import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const A = styled.a`
  color: #eeeeee;
  background-color: #51adcf;

  :hover {
    background-color: #0278ae;
    color: #eeeeee;
  }
`;

export default function Pagination() {
  return (
    <footer>
      <nav>
        <ul className="pagination text-decoration-none justify-content-center">
          <li className="mx-2">
            <A className="page-link rounded " href="#">
              <FontAwesomeIcon icon={faArrowLeft} />
            </A>
          </li>
          <li className="page-item mx-2">
            <A className="page-link rounded " href="#">
              1
            </A>
          </li>
          <li className="page-item mx-2">
            <A className="page-link rounded " href="#">
              <FontAwesomeIcon icon={faArrowRight} />
            </A>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
