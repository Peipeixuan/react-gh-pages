import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ButtonLink = props => {

    return (
        <div className="project-link">
            <a href={props.link} target="_blank">
                <div className="imgContainer">
                    <img className="buttonLink" src={props.src}></img>
                </div>
            </a>
        </div>

    )
}

export default ButtonLink;