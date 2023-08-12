import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {ReCAPTCHA} from "react-google-recaptcha";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import authApi from "../services/authApi";

const SignUp = () => {
    const navigate = useNavigate();

    const key = "6Lf2bYEnAAAAAB51vI1gykC1n08ggYdIJbVaTOpl";
    const [captchaIsDone, setCaptchaDone] = useState(false);
    function onChange(value) {
        console.log('Captcha value:', value);
        setCaptchaDone(true);
    }

    const [email, setEmail] = useState("")
    const [emailProvider, setEmailProvider] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isMarketingAgree, setIsMarketingAgree] = useState(false)
    const [isPersonalInfoAgree, setIsPersonalInfoAgree] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Password do not matched")
        }
        const userInput = {
            email: email + "@" + emailProvider,
            username,
            password,
            isMarketingAgree,
            isPersonalInfoAgree
        }
        console.log('userInput ? ', userInput)

        const {data, status} = await authApi.post("/signup", userInput)
        console.log(" data : " , data)
        console.log(" status : " , status)
        if (status === 201){
            navigate('/login')
        }
    }
    return (
        <Container
            className="flex-column align-items-center justify-content-center"
            style={{marginBottom: "100px"}}>
            <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>SignUp</h1>
            <Row style={{ width: '30rem', margin:"0 auto"}}>
                <Form onSubmit={submitHandler} >
                    {/** SNS SignUp Feild */}
                    <div className="flex-column align-items-center justify-content-center text-center">
                        <div className="text-muted" style={{fontSize:"14px"}}>SNSで簡単会員登録</div>
                        <div className="d-flex align-items-center justify-content-center text-center">
                            <div className="row-sm m-3" id="line">
                                <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">
                                    <img src="https://vos.line-scdn.net/login-web/img/favicon.ico" style={{width:"40px", height:"40px", borderRadius:"100px"}} alt="LINE" /></a>
                            </div>
                            <div className="row-sm" id="insta">
                                <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" style={{width:"40px", height:"40px", borderRadius:"100px"}} alt="instagram" /></a>
                            </div>
                            <div className="row-sm m-3" id="fb">
                                <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">
                                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" style={{width:"40px", height:"40px", borderRadius:"100px"}} alt="facebook" /></a>
                            </div>
                        </div>
                        <hr />
                    </div>
                    {/** E-mail Feild */}
                    <Form.Group className="mb-4"　controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup className="input-group mb-3">
                            <Form.Control
                                placeholder="E-mail"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="input-group-text">@</span>
                            <Form.Select
                                aria-label="Default select example"
                                value={emailProvider}
                                onChange={(e) => setEmailProvider(e.target.value)}
                            >
                                <option>server select menu</option>
                                <option value="google.com">google.com</option>
                                <option value="yahoo.co.jp">yahoo.co.jp</option>
                            </Form.Select>
                        </InputGroup>
                        <Button variant="outline-info" type="submit" style={{width: '100%'}}>
                            E-mail 認証
                        </Button>
                    </Form.Group>
                    {/** Password Feild */}
                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Text type="text"　className="text-muted" style={{fontSize:"14px"}}>　*英語＋数字の8文字以上</Form.Text>
                        <Form.Control
                            placeholder="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                        <Form.Label type="text"　className="mt-3">Password Check</Form.Label>
                        <Form.Control
                            placeholder="password check"
                            id="passwordCheck"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                        />
                    </Form.Group>
                    {/** NickName Feild */}
                    <Form.Group className="mb-4">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Text type="text"　className="text-muted" style={{fontSize:"14px"}}>　*2~15文字以上,他ユーザーと重複禁止</Form.Text>
                        <Form.Control
                            placeholder="user nick name"
                            id="nickname"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    {/** Agree Feild */}
                    <Form.Group className="mb-4">
                        <Form.Label>規約同意</Form.Label>
                        <div className="border p-3">
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="allAgree"
                                label="All agree"
                                className="fw-semibold"
                            />
                            <hr />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="older14"
                                label="14歳以上であること"
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                // id="older14"
                                label="規約内容"
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                // id="older14"
                                label="個人情報収集"
                                required
                                value={isPersonalInfoAgree}
                                onChange={(e) => setIsPersonalInfoAgree(!isPersonalInfoAgree)}
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                // id="older14"
                                label="個人情報マーケティング活用"
                                required
                                value={isMarketingAgree}
                                onChange={(e) => setIsMarketingAgree(!isMarketingAgree)}
                            />
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id="older14"
                                label="イベント、クーポンなどお知らせおよびSMS受信"
                            />
                        </div>
                        <ReCAPTCHA
                            sitekey={key}
                            onChange={onChange}
                        />
                        <Button variant="primary" type="submit" style={{width: '100%', marginTop:"30px"}}>
                            会員登録
                        </Button>
                        <div className="d-flex align-items-center justify-content-center text-center mt-3 mb-5">
                            <div className="col-sm">
                                <a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="/login">
                                    ログインページへ
                                </a>
                            </div>
                        </div>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
};

export default SignUp;