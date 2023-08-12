import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const CardView = ( { data, provider}) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500`;
    return (
        <Col className={"mb-3"} >
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height: '100%', width: 'auto'}} variant="top" src={ imgUrl+data.backdrop_path
                    ? imgUrl + data.backdrop_path : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCMT1rKQSmpSiWrjn460FlW3dI2WThcBiwA&usqp=CAU"} />
                <Card.Body style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <Card.Title className={"mbr-fonts-style"} style={{textAlign: 'center'}}>{ data.title.length > 20 ? data.title.slice(0, 20).concat(`...`) : data.name.slice(0, 20).concat(`...`)  }</Card.Title>
                    <Card.Text>
                        { data.overview.length > 20 ? data.overview.slice(0, 80).concat(`...`) : data.overview }
                    </Card.Text>
                    <Button variant="outline-info" size="sm" href={`/${provider}/${data.id}`}>Check ${provider}'s Info</Button>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default CardView;