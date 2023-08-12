import tmdbApi from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchMovie = async (movieId, provider) => {
    const {data} = await tmdbApi.get(`/movie/${movieId}?language=en-US`)
    return data;
}

const useFetchMovie = (movieId) =>
    useQuery(["movie", movieId], () => fetchMovie( movieId ))

export {useFetchMovie};