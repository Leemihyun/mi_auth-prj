import React, {useEffect, useState} from 'react';
import axios, {get} from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {usePaginatedFetchTvShows} from "../services/PaginateTvShows";

const TvShowList = () => {
    // const [tvShows, setTvShows] = useState([]);
    // const getTvShowList = async () => {
    //     try {
    //         const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MGJjZGRkM2U4YTVmN2ExNWUxMTI1ZjM2MWNhYyIsInN1YiI6IjY0YzUxODYyOWI2ZTQ3MDBmZjM2NDc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSXr5VU0QSguF3cxV42p2Z7EJmO9J-Y6vp9mJRW7Y7g'
    //             }
    //         };
    //
    //         const {data, status} = await axios.get(url, options);
    //         console.log('data ? : ', data.results)
    //         console.log('status ? : ', status)
    //         if (status === 200) {
    //             setTvShows(data.results)
    //         }
    //     } catch (err) {
    //         console.log('error ! : ', err.message)
    //     }
    // }
    // useEffect(() => {
    //     getTvShowList();
    // }, []);

    const {data: tvShows} = usePaginatedFetchTvShows(1)
    const imgUrl = `https://image.tmdb.org/t/p/w500`;
    console.log('===> tvShows', tvShows)
    return (
        <Container>
            <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>TV shows List</h1>
            <Row>
                { tvShows && tvShows.map(( tvShow , i) =>(
                    <Col className={"mb-3"} key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{height: '100%', width: 'auto'}} variant="top" src={tvShow.poster_path
                                ? imgUrl + tvShow.poster_path : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCMT1rKQSmpSiWrjn460FlW3dI2WThcBiwA&usqp=CAU"} />
                            <Card.Body style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                                <Card.Title className={"mbr-fonts-style"} style={{textAlign: 'center'}}>{ tvShow.original_name.length > 20 ? tvShow.original_name.slice(0, 20).concat(`...`) : tvShow.original_name }</Card.Title>
                                <Card.Text>
                                    { tvShow.overview.length > 20 ? tvShow.overview.slice(0, 80).concat(`...`) : tvShow.overview }
                                </Card.Text>
                                <Button variant="outline-info" size="sm" href={`/tv/${tvShow.id}`}>Check Info</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TvShowList;