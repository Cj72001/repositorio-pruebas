import React, { Fragment, useState } from "react";
import { useAuth } from "hooks/user-auth";
import Brand from "components/Sign/Brand";
import Form from "components/Sign/Form";

export default function SignIn() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = useAuth();

  const handleOnChange = (e, save) => {
    const value = e.target.value;
    save(value);
  };

  const handleOnSubmit = async (e) => {
    setSuccess("");
    setError("");
    e.preventDefault();

    if (!name && !lastname && !username && !email && !password) return;

    const response = await auth.signup(
      name,
      lastname,
      username,
      email,
      password
    );
    if (response.error) {
      setError(response.error);
    } else {
      setSuccess("¡Felicidades! estas registrado presiona el boton ingresar ");
    }
  };

  return (
    <div className="d-flex ">
      <Brand
        title="¡Bienvenido!"
        information="Si ya posees cuenta puedes ingresar con el siguiente enlace"
        routeTitle="Ingresar"
      />
      <Form
        setName={setName}
        setLastname={setLastname}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        success={success}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}
