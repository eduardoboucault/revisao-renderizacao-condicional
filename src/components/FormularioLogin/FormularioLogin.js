import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    if (
      props.name.length >= 6 &&
      (props.password.length >= 8 || props.password.length <= 16)
    ) {
      props.setPageFlow(2);
    } else {
      alert("Preencha corretamente login e senha!");
    }
  };

  console.log(props.name.length);
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
            value={props.name}
            type={"text"}
            onChange={props.onChangeName}
          />
        </StyledLabel>
        <StyledLabel>
          Senha:
          <Input
            value={props.password}
            type={"password"}
            onChange={props.onChangePassword}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
