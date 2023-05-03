
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
 
    


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
