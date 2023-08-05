import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        try {
            const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MGJjZGRkM2U4YTVmN2ExNWUxMTI1ZjM2MWNhYyIsInN1YiI6IjY0YzUxODYyOWI2ZTQ3MDBmZjM2NDc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSXr5VU0QSguF3cxV42p2Z7EJmO9J-Y6vp9mJRW7Y7g'
                }
            };
            const {data, status} = await axios.get(url, options);
            console.log('data ? : ', data.results)
            console.log('status ? : ', status)
            if( status === 200){
                setMovies(data.results)
            }
        } catch (err) {
            console.log('error ! : ', err.message)
        }
    }
    useEffect(() => {
        getMovies();
    }, []);

    const imgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
            <Container>
                <h1 className={"text-center"} style={{ margin: "100px", fontSize: '68px'}}>Movies List</h1>
                <Row>
                    { movies && movies.map(( movie , i) =>(
                        <Col className={"mb-3"} key={i}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{height: '100%', width: 'auto'}} variant="top" src={movie.backdrop_path
                                    ? imgUrl + movie.backdrop_path : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCMT1rKQSmpSiWrjn460FlW3dI2WThcBiwA&usqp=CAU"} />
                                <Card.Body style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                                    <Card.Title className={"mbr-fonts-style"} style={{textAlign: 'center'}}>{ movie.title.length > 20 ? movie.title.slice(0, 20).concat(`...`) : movie.title }</Card.Title>
                                    <Card.Text>
                                        { movie.overview.length > 20 ? movie.overview.slice(0, 80).concat(`...`) : movie.overview }
                                    </Card.Text>
                                    <Button variant="outline-info" size="sm">Check Movie's Info</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
    );
};

export default MovieList;