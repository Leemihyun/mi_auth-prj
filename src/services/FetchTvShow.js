import tmdbApi from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchTvShow = async (tvId = 0) => {
    const {data} = await tmdbApi.get(`/tv/${tvId}?language=en-US`)
    return data;
}

const useFetchTvShow = ( tvId ) =>
    useQuery(["tvshow", tvId], () => fetchTvShow(tvId))

export {useFetchTvShow};