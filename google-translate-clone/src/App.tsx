import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";

function App() {
  //Importamos el useStore de nuestros customs hooks.
  //Con él, traemos el fromLanguage y el setFromLanguage para hacer el dispatch de la accion con el payload "es"
  const { fromLanguage, setFromLanguage } = useStore();

  return (
    <>
      <div>
        <h1>Google Translate</h1>
        <button
          onClick={() => {
            setFromLanguage("es");
          }}
        >
          Cambiar a español
        </button>
        {fromLanguage}
      </div>
    </>
  );
}

export default App;
