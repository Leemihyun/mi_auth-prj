import tmdbApi from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchPaginatedTvShows = async (page = 1) => {
    const {data} = await tmdbApi.get(`/tv/airing_today?language=en-US&page=${page}`);
    return data.results;
    // const {data} = await tmdbApi.get(`/tv/top_rated?language=en-US&page=${page}`);
    // console.log("++++++++++++++", data.results)
    // return data.results;
}

const usePaginatedFetchTvShows = (page) =>
    useQuery(["tvShow", page], () => fetchPaginatedTvShows(page), {
        keepPreviousData: true,
    })

export { usePaginatedFetchTvShows};