import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import RepostList from "./components/Reposlist";


function App() {

  const [formularioVisivel, setformularioVisivel] = useState (true);
  const [nomeUsuario, setNomeUsuario] = useState ('');
  return(
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <RepostList nomeUsuario={nomeUsuario} />
        </>
      )}
      
      {/*{formularioVisivel && (
      <Formulario />)}

      <button onClick={() => setformularioVisivel(!formularioVisivel)} type="button">toggle form</button>*/}
    </>
  )
}

export default App
