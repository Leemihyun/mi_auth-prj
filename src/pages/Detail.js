import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import useFetchMovieAndTVById from "../services/FetchMovieAndTv";
import axios from "axios";
import api from "../services/api";
import {Button, Card, Col, Container, Image, Row, Spinner, Table} from "react-bootstrap";


const Detail = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { movieId, tvId } = useParams();

    const id = location.pathname.includes('movie') ? movieId : tvId
    const provider = location.pathname.includes('movie') ? 'movie' : 'tv'
    const {data, isLoading} = useFetchMovieAndTVById(id, provider)

    console.log('detail > data', data)
    // console.log('genres', data?.genres )

    const imgUrl = `https://image.tmdb.org/t/p/w500`;

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
            <Row className="justify-content-md-center">
                <Row className={'mt-5'}>
                    <Card.Img style={{height: 'auto', width: '30%'}} variant="top" src={ imgUrl+data.poster_path
                        ? imgUrl + data.poster_path : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCMT1rKQSmpSiWrjn460FlW3dI2WThcBiwA&usqp=CAU"} />
                    <Col>
                        <h1>title: {data?.title ? data.title : data.name}</h1>
                        <Table striped bordered hover variant="dark">
                            <tbody>
                            <tr>
                                <td>language</td>
                                <td>{data?.original_language}</td>
                            </tr>
                            <tr>
                                <td>web site</td>
                                <td>{data?.homepage}</td>
                            </tr>
                            <tr>
                                {data?.genres && <td>genres</td> }
                                <td style={{display: 'flex', direction: 'row'}}>
                                    {data?.genres?.map((genre, i) =>{
                                        return <p style={{marginRight: '5px'}}>{ genre.name }, </p>
                                    })}
                                </td>
                            </tr>
                            <tr>
                                {data?.spoken_languages && <td>spoken_languages</td> }
                                <td style={{display: 'flex', direction: 'row'}}>
                                    {data?.spoken_languages?.map((lang, i) =>{
                                        return <p style={{marginRight: '5px'}}>{ lang.english_name}</p>
                                    })}
                                </td>
                            </tr>
                            { movieId &&
                                <tr>
                                    <td>status</td>
                                    <td>{data?.status}</td>
                                </tr>
                            }

                            </tbody>
                        </Table>
                        <h4>[overview]</h4>
                        <p>{data?.overview}</p>
                        { movieId && data?.production_companies.map((com)=>{
                            // eslint-disable-next-line array-callback-return
                            return <Row>
                            <Col className="flex-column align-items-center justify-content-center">
                                <img style={{width: 'auto', maxHeight: '30px'}} src={`${imgUrl}${com.logo_path}`} alt={'img'} />
                                {/*<hr />*/}
                                <p style={{marginRight: '5px'}}> {com.name} / {com.origin_country}</p>
                            </Col>
                            </Row>
                        })}
                    </Col>
                </Row>
            </Row>

        </Container>
    );
};

export default Detail;