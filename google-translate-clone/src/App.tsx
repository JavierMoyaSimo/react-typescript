import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  //Importamos el useStore de nuestros customs hooks.
  //Con él, traemos el fromLanguage y el setFromLanguage para hacer el dispatch de la accion con el payload "es"
  const { fromLanguage, toLanguage, interchangeLanguages } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <button onClick={interchangeLanguages}>Intercambiar</button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
