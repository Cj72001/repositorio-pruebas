import React, { Fragment } from "react";
import CurrentGroup from "components/GameTable/Tutor/CurrentGroup";
import Players from "components/GameTable/Tutor/Players";

export default function GameTable({ groupName = "uca" }) {
  return (
    <Fragment>
      <CurrentGroup groupName={groupName} />
      <Players />
    </Fragment>
  );
}
