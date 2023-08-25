import React, {useEffect} from 'react';
import {Container, Row, Spinner} from "react-bootstrap";
import ContainerView from "../components/ContainerView";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileByToken} from "../actions/userActions";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userLogin = useSelector((state)=> state.userLogin)
    const {userInfo} = userLogin
    const userProfile = useSelector((state)=> state.userProfile)
    const {userInfo: user, loading, error} = userProfile

    console.log('profile > loginInfo ? ', userInfo)

    useEffect(() => {
       // dispatch(getUserProfileByToken)
        if(!userInfo){
            navigate('/login')
        }else{
            if(!user || !user.username) {
                dispatch(getUserProfileByToken())
            }
        }
    }, [dispatch, userInfo, user, navigate]);

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