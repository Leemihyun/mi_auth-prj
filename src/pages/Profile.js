import React, {useEffect} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
    const navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    console.log('profile > loginInfo ? ', userInfo)

    useEffect(() => {
        if(!userInfo){
            navigate('/login')
        }
    }, [userInfo, navigate]);

    // const token = localStorage.getItem('token')
    // const {data: userInfo, isLoading} = useFetchProfile(token);

    // useEffect(() => {
    //     if(!token){
    //         navigate('/login');
    //     }
    // }, []);
    //
    // if ( isLoading) {
    //     return (
    //         <Container>
    //             <Row className={"justify-content-md-center"} >
    //                 <Spinner animation="border" role={"status"}>
    //                     <span> Loading ...</span>
    //                 </Spinner>
    //             </Row>
    //         </Container>
    //     );
    // }

    return (
        <ContainerView title={userInfo.username} >
            <h1>Profile</h1>
            <h5>{userInfo.email}</h5>
            <img src={userInfo.profileImg}/>
        </ContainerView>
    );
};

export default Profile;