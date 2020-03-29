import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TopButton from './TopButton.js';

// function topButton() {
//     return (
//         <div>
//             <input type="button">{props.name}</input>
//         </div>
//     );
// }

const TopButtonGroup = props => {
    return (

        <div className="topButton">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <Container>
                <Row>
                    <Col sm><TopButton name="ABOUT ME" url="#ABOUTME" /></Col>
                    <Col sm><TopButton name="EXPERIENCE" url="#EXPERIENCE" /></Col>
                    <Col sm><TopButton name="SKILLS" url="#SKILLS" /></Col>
                    <Col sm><TopButton name="PROJECTS" url="#PROJECTS" /></Col>
                    {/* <Col sm><TopButton name="CONTACT" url="#CONTACT"/></Col> */}

                </Row>
            </Container>

        </div>
    )
}
export default TopButtonGroup;