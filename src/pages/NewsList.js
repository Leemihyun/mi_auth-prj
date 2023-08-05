import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useFetchNewsList} from "../services/PaginatedNews";

const NewsList = () => {
    // const [ news, setNews] = useState([]);
    // const getNews = async () =>{
    //     try {
    //         const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=be2cab0836864ae296997f8da65c0861'
    //         const { data, status} = await axios.get(url);
    //         console.log('data ? ', data)
    //         console.log('status ? ', status)
    //         if (status === 200){
    //             setNews(data.articles);
    //         }
    //     } catch (err){
    //         console.log('error message : ', err.message)
    //     }
    // }
    // useEffect(() => {
    //     getNews();
    // }, []);

    const {data : news} = useFetchNewsList();
    console.log('====> news ? ', news)
    const imgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
        <Container>
            <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>News List</h1>
            <Row>
                { news && news.map(( item , i) =>(
                    <Col className={"mb-3"} key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{height: '250px', width: '100%',objectFit: 'cover'}} variant="top" src={item.urlToImage
                                ? item.urlToImage : "https://kurokuro.jp/blog/wp-content/uploads/2021/11/2021112901.jpeg"} />
                            <Card.Body style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                                <Card.Title className={"mbr-fonts-style"} style={{textAlign: 'center'}}>{ item.title.length > 20 ? item.title.slice(0, 20).concat(`...`) : item.title }</Card.Title>
                                <Card.Text>
                                    { item.description.length > 20 ? item.description.slice(0, 80).concat(`...`) : item.description }
                                </Card.Text>
                                <Button variant="outline-info" size="sm" >Check News</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewsList;