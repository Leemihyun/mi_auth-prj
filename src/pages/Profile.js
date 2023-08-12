import React, {useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Container, Image, Row, Spinner} from "react-bootstrap";
import ContainerView from "../components/ContainerView";

const Profile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState('')
    const token = localStorage.getItem('token')
    console.log('token ? ', token)

    const getUserInfo = async () => {
        try{
            const url = 'http://localhost:8000/api/auth';
            const option = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const {data, status}  = await axios.get(url, option)
            setIsLoading(true)
            console.log('profileData', data)

            if (status === 200 ){
                setUserInfo(data.data);
                setIsLoading(false)

            }
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        getUserInfo();
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