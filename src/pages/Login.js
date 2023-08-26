import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {login} from "../actions/userActions";
import {useDispatch, useSelector} from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    // const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const token = localStorage.getItem('token')
    console.log(email, password)

    const userLogin = useSelector((state) => state.userLogin)
    const {loading, userInfo, error} = userLogin

    const submitHandler = async (e) => {
        e.preventDefault();
        const userInput = {
            email,
            password,
        }
        console.log('userInfo ? ', userInput)
        dispatch(login(userInput))
        // console.log('userInput ? ', userInput)
        // setIsLoading(true);
        //
        // const {data, status} = await authApi.post("/login", userInput)
        // console.log(" data : " , data)
        // console.log(" status : " , status)
        // if (status === 200 ){
        //
        //     localStorage.setItem('token', data.data.token)
        //
        //     navigate('/profile');
        //     setIsLoading(false)
        // }
    }

    useEffect(() => {
        if(userInfo){
            navigate('/profile')
        }
        // if (token) {
        //     navigate('/profile')
        // }
    }, [dispatch, navigate, userInfo]);

    // if ( isLoading) {
    //
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
        <Container className="flex-column align-items-center justify-content-center">
        <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>LogIn</h1>
        {loading && <h1>loading ... </h1>}
        <Row style={{ width: '20rem', margin:"0 auto"}}>
            <Form onSubmit={submitHandler} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                {/*</Form.Group>*/}
                <Button variant="primary" type="submit" style={{width: '100%'}}>
                    LogIn
                </Button>
                <div class="d-flex align-items-center justify-content-center text-center mt-3 mb-5">
                    <div class="col-sm"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="/reset-password">Reset Password</a></div>
                    <div class="col-sm"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="/signup">Sign Up</a></div>
                </div>
                <div className="flex-column align-items-center justify-content-center text-center">
                    <div className="text-muted" style={{fontSize:"14px"}}>SNSで簡単ログイン</div>
                    <div className="d-flex align-items-center justify-content-center text-center">
                        <div className="row-sm m-3" >
                            <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">
                                <img src="https://vos.line-scdn.net/login-web/img/favicon.ico" style={{width:"40px", height:"40px", borderRadius:"100px"}} alt="LINE" /></a>
                        </div>
                        <div className="row-sm" >
                            <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" style={{width:"40px", height:"40px", borderRadius:"100px"}} alt="instagram" /></a>
                        </div>
                        <div className="row-sm m-3" >
                            <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">
                                <img src="https://www.facebook.com/images/fb_icon_325x325.png" style={{width:"40px", height:"40px", borderRadius:"100px"}} alt="facebook" /></a>
                        </div>
                    </div>
                    <div className="fw-lighter mb-4"　style={{fontSize:"14px"}}>ログインの時問題がある方</div>
                    <hr />
                    <div className="col-sm mt-4"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">ゲストでご注文照会</a></div>
                </div>
            </Form>
        </Row>
    </Container>
    );
};

export default Login;