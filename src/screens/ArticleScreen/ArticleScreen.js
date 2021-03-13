import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Article from "../../components/Article/Article";
import NavBar from "../../components/NavBar/NavBar";

function ArticleScreen() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Article />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ArticleScreen;
