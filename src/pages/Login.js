import React from 'react';
import {Button, Card, Col, Container, Form, ListGroup, Row} from "react-bootstrap";

const Login = () => {
    return (
        <Container className="flex-column align-items-center justify-content-center">
        <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>LogIn</h1>
        <Row style={{ width: '20rem', margin:"0 auto"}}>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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