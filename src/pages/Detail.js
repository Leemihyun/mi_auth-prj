import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import useFetchMovieAndTVById from "../services/FetchMovieAndTv";
import axios from "axios";
import api from "../services/api";


const Detail = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { movieId, tvId } = useParams();

    const [data , setData] = useState({});
    const getMovieOrTv = async () => {
        try{
            const {data} = await api.get(location.pathname.includes('movie') ? `/movie/${movieId}?language=en-US` : `/tv/${tvId}?language=en-US`)
            console.log('data ? ', data)
            setData(data);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getMovieOrTv();
    }, []);
    // const { data, isLoading } = useFetchMovieAndTVById(
    //     location.pathname.includes("movie") ? movieId : tvId,
    //     location.pathname.includes("movie") ? "movie" : "tv"
    // );
    console.log('data: ', data)

    // console.log('params', params)
    // const {data: item} =useFetchMovie(movieId)
    // if( location.pathname.includes("movie")){
    //     const {data : movieData} = useFetchMovie(movieId)
    //     return movieData
    // } else {
    //     const {data : tvData} = useFetchMovie(tvId)
    //     return tvData
    // }

    // console.log('movieData', movieData)
    // console.log('tvData', tvData)
    // const {data} = location.pathname.includes("movie")
    //     ? useFetchMovie(params.movieId)
    //     : useFetchTvShow(params.tvId)

    // const [item, setItem] = useState({})
    // const getItem = async () => {
    //     try{
    //         const movieUrl = `https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`;
    //         const tvUrl = `https://api.themoviedb.org/3/tv/${params.tvId}?language=en-US`;
    //         const options = {
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MGJjZGRkM2U4YTVmN2ExNWUxMTI1ZjM2MWNhYyIsInN1YiI6IjY0YzUxODYyOWI2ZTQ3MDBmZjM2NDc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSXr5VU0QSguF3cxV42p2Z7EJmO9J-Y6vp9mJRW7Y7g'
    //             }
    //         };
    //         const {data, status} = await axios.get(location.pathname.includes("movie") ? movieUrl : tvUrl,options)
    //         console.log(data)
    //         setItem(data);
    //     } catch (err){
    //         console.log('error message :' , err.message)
    //     }
    //
    //
    // }
    //
    // useEffect(() => {
    //     getItem()
    // }, []);
    return (
        <div>
            {/*<h1>{item?.title ? item.title : item.name}</h1>*/}
            {/*<h3>{item?.overview}</h3>*/}
            {/*    {item?.genres?.map((g,i)=>(*/}
            {/*        <h5>{g.name}</h5>*/}
            {/*    ))}*/}
            <h1>{data?.title ? data.title : data.name}</h1>
            <h3>{data?.overview}</h3>
            {/*{item?.genres?.map((g,i)=>(*/}
            {/*    <h5>{g.name}</h5>*/}
            {/*))}*/}
        </div>
    );
};

export default Detail;