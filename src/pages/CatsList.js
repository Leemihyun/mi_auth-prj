import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const CatsList = () => {
    const [cats, setCats] = useState([]);
    const getCats = async () => {
        try {
            const url = 'https://api.thecatapi.com/v1/images/search?limit=100&api_key=REPLACE_ME';
            const options = {
                method: 'GET',
            };
            const {data, status} = await axios.get(url, options);
            console.log('data ? : ', data)
            console.log('status ? : ', status)
            if( status === 200){
                setCats(data)
            }
        } catch (err) {
            console.log('error ! : ', err.message)
        }
    }
    useEffect(() => {
        getCats();
    }, []);
    return (
        <Container>
            <h1 style={{ textAlign: "center", margin: "100px", fontSize: '68px'}}>Cats List</h1>
            <Row>
                { cats && cats.map(( cat , i) =>(
                    <Col className={"mb-3"} key={i}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{height: '250px', width: '100%',objectFit: 'cover'}} variant="top" src={cat.url
                                ? cat.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCMT1rKQSmpSiWrjn460FlW3dI2WThcBiwA&usqp=CAU"} />
                            <Card.Body style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                                {/*<Card.Title className={"mbr-fonts-style"} style={{textAlign: 'center'}}>{ cat }</Card.Title>*/}
                                <Card.Text>
                                    Cat's Id: { cat.id }
                                </Card.Text>
                                {/*<Button variant="outline-info" size="sm">Check Movie's Info</Button>*/}
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CatsList;