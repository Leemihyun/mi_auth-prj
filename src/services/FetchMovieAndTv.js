import api from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchMovieAndTV = async (id, provider) => {
    const {data} = await api.get(`/${provider}/${id}?language=en-US`)
    return data
}

const useFetchMovieAndTVById = (id, provider) =>
    useQuery([provider, id], () => fetchMovieAndTV(id, provider));

export default useFetchMovieAndTVById;