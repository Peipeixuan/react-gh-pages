import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ExpeienceItem from './ExperienceItem.js';


const Expeience = props => {
    return (
        <Container className="third">
            <Row>
                <Col>
                    <h2 className="expeTitle">EXPEIENCE</h2>

                </Col>

            </Row>

            <ExpeienceItem year="2020" title="SITCON學生計算機年會 文創組組員" description="（進行中）結合自身設計的興趣與能力，為資訊圈活動盡一份心力。" />
            <ExpeienceItem year="2019" title="南友會 府城之夜美術設計長" description="負責設計與統籌活動視覺相關業務，安排設計、宣傳、印刷的時程。" />
            <ExpeienceItem year="2018" title="南友會 香吻節宣傳長" description="管理所有宣傳活動，並負責經營活動粉絲專頁，透過圖片拼貼設計，創造15.1K的觸及人次；當年度業績較去年高近三成。" />




        </Container>
    )
}
export default Expeience;