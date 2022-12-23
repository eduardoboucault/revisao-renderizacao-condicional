import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaPostagem/TelaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const onChangeImage = (event) => {
    setImage(event.target.value);
    console.log(image);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };

  const sendData = () => {
    if (title.length > 6 && image.includes(".") && description.length > 8) {
      const postUser = {
        image: image,
        title: title,
        description: description
      };
      console.log(postUser);
      return postUser;
    } else {
      alert("Preencha corretamente os campos");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              name={name}
              password={password}
              onChangeName={onChangeName}
              onChangePassword={onChangePassword}
            />
          ) : (
            <FormularioPostagem
              title={title}
              image={image}
              description={description}
              onChangeTitle={onChangeTitle}
              onChangeImage={onChangeImage}
              onChangeDescription={onChangeDescription}
              sendData={sendData}
            />
          )}
        </aside>
        <TelaDaPostagem title={title} image={image} description={description} />
      </Container>
    </>
  );
}

export default App;
