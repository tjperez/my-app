import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import campusBuilding from '../assets/campusBuilding.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${campusBuilding}) no-repeat fixed bottom;
        background-size: cover;
        color: black;
        heigth: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className = "overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>Learn to code from the Best Coding School in the country</p>
            </Container>
        </Jumbo>
    </Styles>

)