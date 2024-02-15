import { useState, useEffect} from 'react'
import ArticlesInterface from '../interfaces/ArticleInterfaces'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Articles = () => {

  const [arrayOfArticles, setArrayOfArticles] = useState<ArticlesInterface[]>([])

  const fetchArticles = async () => {
    try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles')
      if(response.ok) {
        const articlesResult = await response.json()
        console.log(articlesResult)
        setArrayOfArticles(articlesResult.results)
      } else {
        throw new Error('errore nella fetch')
      }
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  },[])


  return (
    <Container>
      <Row>
        <Col>
          <h1>All Articles:</h1>
        </Col>
      </Row>
      <Row>
        {arrayOfArticles.map((article) => {
          return (
            <Col xs={6} md={3} className='h-100' key={article.id}>
              <Card>
                <Card.Img variant="top" src={article.image_url} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.summary}
                  </Card.Text>
                  <Link to={"/details/"+ article.id} className='btn btn-primary '>Go somewhere</Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>

  )
}

export default Articles 