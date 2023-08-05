// import tmdbApi from "./api";
// import {useQuery} from "@tanstack/react-query";
//
// const fetchPaginateMovies = async ()=>{
//     const {data} = await tmdbApi.get(`/movie/now_playing?language=en-US&page=1`);
//     console.log("=====> data.results : ", data.results)
//     return data.results;
// }
//
// const usePaginatedFetchMovies = () =>
//     useQuery(["movies"], () => fetchPaginateMovies, {
//         keepPreviousData: true,
//     } )
//
// export {usePaginatedFetchMovies};

import { useQuery} from "@tanstack/react-query";
import tmdbApi from "./api";

const fetchPaginatedMovies = async (page = 1) => {
    const { data } = await tmdbApi.get(`/movie/now_playing?language=en-US&page=${page}`);
    console.log("++++++++++++++", data.results)
    return data.results;
}

const usePaginatedFetchMovies = (page) =>
    useQuery(["movies", page], () => fetchPaginatedMovies(page), {
        keepPreviousData: true,
    });


export { usePaginatedFetchMovies };