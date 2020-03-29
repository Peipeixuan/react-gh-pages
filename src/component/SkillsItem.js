import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';



const SkillsItem = props => {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <label className="skillName">
                        {props.skill}
                    </label>
                </Col>
                <Col md={8}>
                    <ProgressBar variant="info" now={props.value} label={`${props.value}%`} className="progress" />

                </Col>

            </Row>


        </Container>
    )

}





export default SkillsItem
