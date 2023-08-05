import axios from "axios";
import {useQuery} from "@tanstack/react-query";

const fetchNewsList = async () => {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=be2cab0836864ae296997f8da65c0861'
    const {data} = await axios.get(url);
    console.log('=====> data? ', data.articles )
    return data.articles;
}

const useFetchNewsList = () =>
    useQuery(["newsList"], () =>  fetchNewsList(), {
        keepPreviousData: true,
    })

export {useFetchNewsList};