import React, { useEffect, useState } from "react";
import ArticlesInterface from "../interfaces/Articles";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Articles = () => {
  const [articles, setArticles] = useState<ArticlesInterface[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const data = await response.json();
        setArticles(data); // Imposta solo la proprietà results come array di articoli
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div>hello</div>
        </Col>
      </Row>
      <Row>
        {
            articles.map((article) => {
                return (
                <Card key={article.id}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{article.}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              )                
            })
        }
      </Row>
    </Container>
  );
};

export default Articles;