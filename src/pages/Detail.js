import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import useFetchMovieAndTVById from "../services/FetchMovieAndTv";
import axios from "axios";
import api from "../services/api";
import {Button, Container, Row, Spinner} from "react-bootstrap";


const Detail = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { movieId, tvId } = useParams();

    const id = location.pathname.includes('movie') ? movieId : tvId
    const provider = location.pathname.includes('movie') ? 'movie' : 'tv'
    const {data, isLoading} = useFetchMovieAndTVById(id, provider)

    // const [data , setData] = useState({});
    // const getMovieOrTv = async () => {
    //     try{
    //         const {data} = await api.get(location.pathname.includes('movie') ? `/movie/${movieId}?language=en-US` : `/tv/${tvId}?language=en-US`)
    //         console.log('data ? ', data)
    //         setData(data);
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    // useEffect(() => {
    //     getMovieOrTv();
    // }, []);
    // console.log('data: ', data)

    if ( isLoading) {
        return (
            <Container>
                <Row className={"justify-content-md-center"} >
                    <Spinner animation="border" role={"status"}>
                        <span> Loading ...</span>
                    </Spinner>
                </Row>
            </Container>
        );
    }

    return (
        <Container className={'mt-5'}>
            <header>
                <Button onClick={()=> navigate(-1)}>
                    Go Back
                </Button>
            </header>
            <h1>{data?.title ? data.title : data.name}</h1>
            <h3>{data?.overview}</h3>
        </Container>
    );
};

export default Detail;