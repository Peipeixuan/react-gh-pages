import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ExpeienceItem = props => {
    return (

        <Row className="justify-content-md-center">
            <Col className="expCol" md={4}>
                <div className="expDeco">
                </div>
            </Col>
            <Col className="expCol" md={8}>
                <h4>{props.year}</h4>
                {props.title}<br></br>
                <br></br><p className="expeDescrip">{props.description}</p>
            </Col>
        </Row>


    )
}
export default ExpeienceItem;