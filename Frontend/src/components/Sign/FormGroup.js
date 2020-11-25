import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormGroup({ title, type, icon, handleOnChange,setState }) {
  return (
    <Fragment>
      <div className="input-group w-50 mx-auto mt-4">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
        <input
          type={type}
          className="form-control w-50 h-100 "
          id={title}
          placeholder={title}
          required
          onChange={(e) => handleOnChange(e,setState)}
        ></input>
      </div>
    </Fragment>
  );
}
