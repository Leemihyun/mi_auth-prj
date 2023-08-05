import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const PeopleList = () => {
    const [people, setPeople] = useState([]);
    const getPeople = async () =>{
        try {
            const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MGJjZGRkM2U4YTVmN2ExNWUxMTI1ZjM2MWNhYyIsInN1YiI6IjY0YzUxODYyOWI2ZTQ3MDBmZjM2NDc3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jSXr5VU0QSguF3cxV42p2Z7EJmO9J-Y6vp9mJRW7Y7g'
                }
            };
            const { data , status} = await axios.get(url, options)
            console.log('data ? ', data)
            console.log('status ? ', status)
            if (status === 200){
                setPeople(data.results);
            }
        } catch (err){
            console.log('error message : ', err.message)
        }
    }
    useEffect(() => {
        getPeople()
    }, []);
    const imgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
        <Container>
            <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>People List</h1>
            <Row>
                { people && people.map(( person , i) =>(
                    <Col className={"mb-3"} key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{height: '100%', width: 'auto'}} variant="top" src={person.profile_path
                                ? imgUrl+person.profile_path : "https://kurokuro.jp/blog/wp-content/uploads/2021/11/2021112901.jpeg"} />
                            <Card.Body style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                                <Card.Title className={"mbr-fonts-style"} style={{textAlign: 'center'}}>{ person.name} { `(${person.gender === 2 ? "M":"W"})`}</Card.Title>
                                <Card.Text>
                                    {person.known_for_department}
                                </Card.Text>
                                <Button variant="outline-info" size="sm" >Check Profile</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default PeopleList;