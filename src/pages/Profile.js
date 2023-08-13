import React, {useEffect} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import useFetchProfile from "../services/FetchProfile";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const {data: userInfo, isLoading} = useFetchProfile(token);

    useEffect(() => {
        if(!token){
            navigate('/login');
        }
    }, []);

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
        <ContainerView title={userInfo.username} >
            <h1>Profile</h1>
            <h5>{userInfo.email}</h5>
            <img src={userInfo.profileImg}/>
        </ContainerView>
    );
};

export default Profile;