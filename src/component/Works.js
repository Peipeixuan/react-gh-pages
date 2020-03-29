import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonLink from './ButtonLink.js';
import gogoro from '../gogoro.jpg';
import netflix from '../netflix.jpg';
import calculator from '../calculator.jpg';
import pms from '../pms.jpg'
import card from '../card.jpg'
import canvas from '../canvas.jpg';



const Works = props => {
    return (
        <Container className="forth">
            <Row>
                <Col>
                    <h2 className="expeTitle">PROJECTS</h2>

                </Col>

            </Row>
            <Row>
                <h4>Programming</h4>
            </Row>
            <Row>

                <ButtonLink link="https://peipeixuan.github.io/calculator/" src={calculator} />
                <ButtonLink link="https://peipeixuan.github.io/cardGame/" src={card} />
                <ButtonLink link="https://peipeixuan.github.io/canvas/" src={canvas} />

                <ButtonLink link="https://boooooooook.000webhostapp.com/index.php" src={pms} />
            </Row>
            <Row>
                <h4>Design</h4>
            </Row>
            <Row>
                <ButtonLink link="https://youtu.be/FksO33lxfYo" src={netflix} />
                <ButtonLink link="https://youtu.be/eHvoDdpNSO0" src={gogoro} />

            </Row>






        </Container>
    )
}

export default Works
