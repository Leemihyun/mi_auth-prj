import React, {useEffect, useState} from 'react';
import {Button, Container, Form, InputGroup, Row, Spinner} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {emailCodeVerify, emailCodeVerifyFuntion, emailSendVerify, usersignup} from "../actions/userActions";
import authApi from "../services/authApi";
import {useForm} from "react-hook-form";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // hook form setting
    const {getValues, register, handleSubmit} = useForm();

    const [show, setShow] = useState(false)
    const [emailChecked, setEmailChecked] = useState(false)

    const userRegister = useSelector((state) => state.userRegister)
    const {loading, userInfo, error} = userRegister

    // 로그인되있을시 signup 접속시 profile로 이동
    const userLogin = useSelector((state)=> state.userLogin)
    const {userInfo: user} = userLogin

    const submitHandler =  (data) => {
        console.log('data ? ', data)
        if(!emailChecked){
            alert("Please check email verification")
        }
        if(data.password !== data.confirmPassword){
            alert("Password do not matched")
        }
        const userInput = {
            email: data.email + "@" + data.emailProvider,
            username: data.username,
            password: data.password,
            isMarketingAgree: data.isMarketingAgree,
            isPersonalInfoAgree: data.isPersonalInfoAgree
        }
        console.log('userInput ? ', userInput)
        // action 호출
        dispatch(usersignup(userInput))

        // const {data, status} = await authApi.post("/signup", userInput)
        // console.log(" data : " , data)
        // console.log(" status : " , status)
        // if (status === 201){
        //     navigate('/login')
        // }
    }

    const emailVerify = useSelector((state) => state.emailVerify)
    const {loading: emailVerifyLoading, success: emailVerifySuccess} = emailVerify

    const emailSendHandler = (data)=> {
        const userInput = {
            email: data.email + "@" + data.emailProvider
        }
        console.log('emailSendHandler > userInput :', userInput)
        dispatch(emailSendVerify(userInput))
        // try {
        //     const userInput = {
        //         email: email + "@" + emailProvider
        //     }
        //     const {status} = await authApi.post('/email/send', userInput)
        //     if(status === 201){
        //         alert('please checkout your email')
        //         setShow(true)
        //     }
        // } catch (err){
        //     console.log(err.message)
        // }
    }
    // email code 검증
    const emailCodeVerify = useSelector((state) => state.emailCodeVerify)
    const {loading: emailCodeVerifyLoading, success: emailCodeVerifySuccess} = emailCodeVerify
    const emailVerifyHandler = (data) =>{
        const userInput = {
            email: data.email + "@" + data.emailProvider,
            code: data.code
        }
        console.log('userInput ? ', userInput)
        dispatch(emailCodeVerifyFuntion(userInput))

        // try {
        //     const userInput = {
        //         email: email + "@" + emailProvider,
        //         code
        //     }
        //     const {status} = await authApi.c
        //     if(status === 201){
        //         alert('ok')
        //         setShow(false)
        //         setEmailChecked(true)
        //     }
        // } catch (err){
        //     console.log(err.message)
        // }
    }


    useEffect(() => {
        if(userInfo){
            navigate('/login')
            return;
        }
        if(user){
            navigate('/profile')
            return;
        }
        if(emailVerifySuccess){
            alert('please checkout your email')
            setShow(true)
            return;
        }
        if(emailCodeVerifySuccess){
            alert('your email code is ok')
            setShow(false)
            setEmailChecked(true)
            return;
        }
    }, [navigate, userInfo, emailVerifySuccess, emailCodeVerifySuccess]);

    return (
        <Container
            className="flex-column align-items-center justify-content-center"
            style={{marginBottom: "100px"}}>
            <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>SignUp</h1>
            {loading && <h1>loading ... </h1>}
            <Row style={{ width: '30rem', margin:"0 auto"}}>
                <Form onSubmit={handleSubmit(submitHandler)} >
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
                                {...register('email')}
                                placeholder="E-mail"
                            />
                            <span className="input-group-text">@</span>
                            <Form.Select
                                aria-label="Default select example"
                                {...register('emailProvider')}
                            >
                                <option>server select menu</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="yahoo.co.jp">yahoo.co.jp</option>
                            </Form.Select>
                        </InputGroup>
                        <Button variant="outline-info" onClick={handleSubmit(emailSendHandler)} style={{width: '100%'}} disabled={emailChecked}>
                            E-mail 認証
                        </Button>
                        { emailVerifyLoading && <Spinner />}
                        { show &&
                            (
                                <>
                                    <Form.Control
                                        {...register('code')}
                                    />
                                    <Form.Label type="text"　className="mt-3">Enter your email code</Form.Label>
                                    <Button variant="outline-info" onClick={handleSubmit(emailVerifyHandler)} style={{width: '100%'}}>
                                        E-mail Code 検証
                                    </Button>
                                    {emailCodeVerifyLoading && <Spinner /> }
                                </>
                            )
                        }
                    </Form.Group>
                    {/** Password Feild */}
                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Text type="text"　className="text-muted" style={{fontSize:"14px"}}>　*英語＋数字の8文字以上</Form.Text>
                        <Form.Control
                            {...register('password')}
                            placeholder="password"
                            type="password"
                        />
                        <Form.Label type="text"　className="mt-3">Password Check</Form.Label>
                        <Form.Control
                            {...register('confirmPassword')}
                            placeholder="password check"
                            type="password"
                        />
                    </Form.Group>
                    {/** NickName Feild */}
                    <Form.Group className="mb-4">
                        <Form.Label>Nick Name</Form.Label>
                        <Form.Text type="text"　className="text-muted" style={{fontSize:"14px"}}>　*2~15文字以上,他ユーザーと重複禁止</Form.Text>
                        <Form.Control
                            {...register('username')}
                            placeholder="user nick name"
                        />
                    </Form.Group>
                    {/** Agree Feild */}
                    <Form.Group className="mb-4">
                        <Form.Label>規約同意</Form.Label>
                        <div className="border p-3">
                            <Form.Check // prettier-ignore
                                {...register('allAgree')}
                                type="checkbox"
                                label="All agree"
                                className="fw-semibold"
                            />
                            <hr />
                            <Form.Check // prettier-ignore
                                {...register('older14')}
                                type="checkbox"
                                label="14歳以上であること"
                            />
                            <Form.Check // prettier-ignore
                                {...register('contract')}
                                type="checkbox"
                                label="規約内容"
                            />
                            <Form.Check // prettier-ignore
                                {...register('isPersonalInfoAgree')}
                                type="checkbox"
                                label="個人情報収集"
                                required
                            />
                            <Form.Check // prettier-ignore
                                {...register('isMarketingAgree')}
                                type="checkbox"
                                // id="older14"
                                label="個人情報マーケティング活用"
                                required
                            />
                            <Form.Check // prettier-ignore
                                {...register('smsAgree')}
                                type="checkbox"
                                label="イベント、クーポンなどお知らせおよびSMS受信"
                            />
                        </div>
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