import authApi from "./authApi";
import {useQuery} from "@tanstack/react-query";

const fetchProfile = async (token) => {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { data }  = await authApi.get('/', option)
    return data.data;
}

const useFetchProfile = (token) =>
    useQuery(['profile'], () => fetchProfile(token));

export default useFetchProfile;