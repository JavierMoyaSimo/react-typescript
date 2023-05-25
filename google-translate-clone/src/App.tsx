import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { SectionType } from "./types.d";

function App() {
  //Importamos el useStore de nuestros customs hooks.
  //Con él, traemos el fromLanguage y el interchangeLanguages para hacer el dispatch de la accion con el payload "es"
  const {
    fromLanguage,
    toLanguage,
    setFromLanguage,
    setToLanguage,
    interchangeLanguages,
  } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <Form.Control
            as="textarea"
            placeholder="Introducir texto"
            autoFocus
            style={{ height: "150px" }}
          />
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
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <Form.Control
            as="textarea"
            placeholder="Traducción"
            style={{ height: "150px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
