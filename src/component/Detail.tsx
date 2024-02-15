import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ArticlesInterface from '../interfaces/ArticleInterfaces'
import { Col, Container, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';

const Detail = () => {

    const params = useParams()
    const [article, setArticle] = useState<ArticlesInterface | null>(null)

    const fetchDetails = async () => {
        try {
            console.log(params)
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/' + params.articleId)
            if(response.ok) {
                const singleArticle = await response.json()
                console.log(singleArticle)
                setArticle(singleArticle)
            } else {
                throw new Error('errore nella fetch')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <Card>
                    <Card.Img variant="top" src={article?.image_url} />
                    <Card.Body>
                        <Card.Title>{article?.title}</Card.Title>
                        <Card.Text>{article?.summary}</Card.Text>
                    </Card.Body>
                    </Card>                    
                </Col>
            </Row>
        </Container>
    )
}

export default Detail