import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import secondPhoto from '../2072492.png'


// function topButton() {
//     return (
//         <div>
//             <input type="button">{props.name}</input>
//         </div>
//     );
// }

const Aboutme = props => {
    return (
        <Container className="second">
            <Row className="justify-content-md-center">
                <Col>
                    <img className='secondPhoto' src={secondPhoto}></img>
                    <div className="secondPhotoDeco"></div>

                </Col>
                <Col>
                    <h2>About me</h2>
                    <h3>designer/coder</h3>
                    目就讀國立政治大學資訊管理學系，<br></br>
                    雙主修數位內容與科技學士學位學程。<br></br>
                    <br></br>
                    喜歡美麗的事物，<br></br>
                    也熱愛將事物變得更美好；<br></br>
                    喜歡梳理資訊，<br></br>
                    也熱愛用圖像表達事情。<br></br>
                    目前努力學習web design<br></br>

                </Col>
            </Row>


        </Container>
    )
}
export default Aboutme;