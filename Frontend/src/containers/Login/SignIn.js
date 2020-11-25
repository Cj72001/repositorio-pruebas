import React, { useState, Fragment } from "react";
import { useAuth } from "hooks/user-auth";
import { Redirect } from "react-router";
import styled from "styled-components";
import Brand from "components/Sign/Brand";
import Title from "components/Sign/Title";
import Information from "components/Sign/Information";
import LoginButton from "components/Sign/LoginButton";
import FormGroup from "components/Sign/FormGroup";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FormWrapper = styled.form`
  width: 55%;
  background-color: eeeeee;
`;

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();

  const handleOnChange = (e, save) => {
    setError("");
    const value = e.target.value;
    save(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await auth.signin(email, password);
    if (response.error) {
      setError(response.error);
    }
  };
  const info = "Si no posees una cuenta puedes crearla presionando el boton";

  return (
    <Fragment>
      {auth.user ? <Redirect push to="/room" /> : <></>}
      <div className="d-flex ">
        <FormWrapper>
          <Title title="Inicio de sesión" welcome={false} />
          <Information
            information="Usa tus creedenciales para ingresar"
            create={true}
          />
          <FormGroup
            title="Email"
            type="text"
            icon={faEnvelope}
            handleOnChange={handleOnChange}
            setState={setEmail}
          />
          <FormGroup
            title="Contraseña"
            type="password"
            icon={faKey}
            handleOnChange={handleOnChange}
            setState={setPassword}
          />
          <Link to="/group">
            <LoginButton
              title="Ingresar"
              color="#0278ae"
              handleOnSubmit={handleOnSubmit}
            />
          </Link>
          {error ? <Information information={error} create={true} /> : ""}
        </FormWrapper>
        <Brand
          title="Te extrañamos!"
          information={info}
          routeTitle="Registrarse"
          route="/signup"
        />
      </div>
    </Fragment>
  );
}
