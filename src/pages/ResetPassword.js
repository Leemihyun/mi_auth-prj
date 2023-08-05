import React from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";

const Login = () => {
    return (
        <Container className="flex-column align-items-center justify-content-center">
            <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>Reset Password</h1>
            <Row style={{ width: '20rem', margin:"0 auto"}}>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>登録したメールアドレス入力</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{width: '100%'}}>
                        メールで認証コード受信
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};

export default Login;