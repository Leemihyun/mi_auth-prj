import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {Row} from "react-bootstrap";

const Detail = () => {
    const params =useParams()
    const location = useLocation()
    console.log(location)
    const [item, setItem] = useState({})
    const getItem = async () => {
        try{
            const movieUrl = `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`;
            const tvUrl = `https://api.themoviedb.org/3/tv/${params.tvId}?language=en-US`;
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MGJjZGRkM2U4YTVmN2ExNWUxMTI1ZjM2MWNhYyIsInN1YiI6IjY0YzUxODYyOWI2ZTQ3MDBmZjM2NDc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSXr5VU0QSguF3cxV42p2Z7EJmO9J-Y6vp9mJRW7Y7g'
                }
            };
            const {data, status} = await axios.get(location.pathname.includes("movie") ? movieUrl : tvUrl,options)
            console.log(data)
            setItem(data);
        } catch (err){
            console.log('error message :' , err.message)
        }


    }

    useEffect(() => {
        getItem()
    }, []);
    return (
        <div>
            <h1>{item?.title ? item.title : item.name}</h1>
            <h3>{item?.overview}</h3>
                {item?.genres?.map((g,i)=>(
                    <h5>{g.name}</h5>
                ))}
        </div>
    );
};

export default Detail;