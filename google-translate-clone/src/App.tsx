import { useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { type Action, type State } from "./types";

// 1-  Crear ESTADO INICIAL
// Lenguaje inicial, Lenguaje Destino, Texto inicial, Texto traducido, cargando?...
const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

//2-Crear  REDUCER
function reducer(state: State, action: Action) {
  //Recuperamos el TIPO de accion y el PAYLOAD(informacion que envia la accion)
  const { type } = action;

  //Si el tipo es "INTERCHANGE_LANGUAGES": devuelves el estado que teniamos anteriormente,
  // e intercambiamos el estado de "fromLanguage" por el de "toLanguage"
  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  //Cambiar IDIOMA de inicio:
  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }

  //Cambiar IDIOMA de Destino:
  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }

  //Cambiar TEXTO de inicio:
  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      fromText: action.payload,
      loading: true,
      result: "",
    };
  }

  //Cambiar RESULTADO:
  if (type === "SET_RESULT") {
    return {
      ...state,
      result: action.payload,
      loading: false,
    };
  }
  return state;
}

function App() {
  // 3- Usar Hook useReducer
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);

    console.log({fromLanguage});
    


  return (
    <>
      <div>
        <h1>Google Translate</h1>
        <button
          onClick={() => {
            dispatch({ type: "SET_FROM_LANGUAGE", payload: "es" });
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
