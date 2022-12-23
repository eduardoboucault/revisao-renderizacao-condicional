import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input
            value={props.title}
            id="titulo"
            onChange={props.onChangeTitle}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input value={props.image} id="foto" onChange={props.onChangeImage} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            value={props.description}
            id="descricao"
            onChange={props.onChangeDescription}
          />
        </StyledLabel>
        <SendButton onClick={props.sendData}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
