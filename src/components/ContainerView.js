import React from 'react';
import {Container} from "react-bootstrap";

const ContainerView = ( {title , children}) => {
    return (
        <Container>
            <h1 className={"text-center"} style={{ margin: "100px", fontSize: '68px'}}>{title}</h1>
            {children}
        </Container>
    );
};

export default ContainerView;