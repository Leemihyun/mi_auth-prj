import React from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import {usePaginatedFetchMovies} from "../services/PaginateMovies";
import ContainerView from "../components/ContainerView";
import CardView from "../components/CardView";

const MovieList = () => {

    const {data : movies, isLoading } = usePaginatedFetchMovies(1);
    console.log('data ? ', movies)
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    //     try {
    //         const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MGJjZGRkM2U4YTVmN2ExNWUxMTI1ZjM2MWNhYyIsInN1YiI6IjY0YzUxODYyOWI2ZTQ3MDBmZjM2NDc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSXr5VU0QSguF3cxV42p2Z7EJmO9J-Y6vp9mJRW7Y7g'
    //             }
    //         };
    //         const {data, status} = await axios.get(url, options);
    //         console.log('data ? : ', data.results)
    //         console.log('status ? : ', status)
    //         if( status === 200){
    //             setMovies(data.results)
    //         }
    //     } catch (err) {
    //         console.log('error ! : ', err.message)
    //     }
    // }
    // useEffect(() => {
    //     getMovies();
    // }, []);
    //

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
        <ContainerView title={'Movies List'} >
            <Row>
                { movies && movies.map(( movie , i) =>(
                    <CardView data={movie} provider={'movie'} key={i} />
                ))}
            </Row>
        </ContainerView>
    );
};

export default MovieList;