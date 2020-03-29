import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillsItem from './SkillsItem.js';

const Skills = props => {
    return (
        <Container className="forth">
            <Row>
                <Col>
                    <h2 className="expeTitle">SKILLS</h2>

                </Col>

            </Row>
            <Row>
                <Col className="skillTitle">Programming</Col>
                <Col className="skillTitle">Design</Col>
            </Row>
            <Row>
                <Col className="skillCol"><SkillsItem skill="java" value={50} /></Col>
                <Col className="skillCol"><SkillsItem skill="Photoshop" value={60} /></Col>

            </Row>
            <Row>
                <Col className="skillCol"><SkillsItem skill="HTML" value={80} /></Col>
                <Col className="skillCol"><SkillsItem skill="illustrator" value={80} /></Col>

            </Row>
            <Row>
                <Col className="skillCol"><SkillsItem skill="CSS" value={70} /></Col>
                <Col className="skillCol"><SkillsItem skill="figma" value={60} /></Col>

            </Row>
            <Row>
                <Col className="skillCol"><SkillsItem skill="JavaScripts" value={70} /></Col>
                <Col className="skillCol"><SkillsItem skill="Xd" value={60} /></Col>

            </Row>
            <Row>
                <Col className="skillCol"><SkillsItem skill="React.js" value={40} /></Col>
                {/* <Col className="skillCol"><SkillsItem skill="jQuery" value={20} /></Col> */}
                <Col className="skillCol"><SkillsItem skill="After Effects" value={60} /></Col>

            </Row>
            <Row>
                <Col className="skillCol"><SkillsItem skill="PHP" value={60} /></Col>
                <Col className="skillCol"><SkillsItem skill="inDesign" value={30} /></Col>

            </Row>
            {/* <Row>
                
                <Col></Col>

            </Row> */}






        </Container>
    )
}

export default Skills
