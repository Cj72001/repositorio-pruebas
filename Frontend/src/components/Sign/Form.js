import React from "react";
import FormGroup from "./FormGroup";
import Title from "./Title";
import styled from "styled-components";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import Information from "./Information";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

const FormWrapper = styled.form`
  width: 55%;
  background-color: eeeeee;
`;
export default function Form(props) {
  const {
    setName,
    setLastname,
    setUsername,
    setEmail,
    setPassword,
    error,
    success,
    handleOnChange,
    handleOnSubmit,
  } = props;

  const info = "Usa tu correo para crear la cuenta";

  return (
    <FormWrapper className="w-100">
      <Title title="Crear una cuenta" welcome={false} />
      <Information information={info} create={true} />

      <FormGroup
        title="Nombre"
        type="text"
        icon={faUser}
        handleOnChange={handleOnChange}
        setState={setName}
      />
      <FormGroup
        title="Apellido"
        type="text"
        icon={faUser}
        handleOnChange={handleOnChange}
        setState={setLastname}
      />
      <FormGroup
        title="Nombre de usuario"
        type="text"
        icon={faUser}
        handleOnChange={handleOnChange}
        setState={setUsername}
      />
      <FormGroup
        title="Correo"
        type="email"
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

      <Link  exact to="/signin" >
        <LoginButton
          title="Registrarse"
          color="#0278ae"
          handleOnSubmit={handleOnSubmit}
        />
      </Link>

      {error ? <Information information={error} create={true} /> : <Information information={success} create={true} />}
    </FormWrapper>
  );
}
