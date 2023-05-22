import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  //Importamos el useStore de nuestros customs hooks.
  //Con él, traemos el fromLanguage y el interchangeLanguages para hacer el dispatch de la accion con el payload "es"
  const { fromLanguage, toLanguage, setFromLanguage, setToLanguage interchangeLanguages } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage} />
        </Col>
        <Col>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector onChange={setToLanguage} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
