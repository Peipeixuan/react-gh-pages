import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopButton from './TopButton';
import IndexPhoto from './IndexPhoto';
import TopButtonGroup from './TopButtonGroup.js';
import Aboutme from './Aboutme.js';
import Expeience from './Experience.js';
import Works from './Works.js';

import '../style.css'
import Skills from './Skills';

// function App() {
//   return (
//     <div className="App">
//       <topButton name="About me" />
//       <topButton name="Experience" />
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div>


        <section className="primary">
          <TopButtonGroup className="topButton" />

          <IndexPhoto />
        </section>
        <section className="aboutMe" id="ABOUTME">

          <Aboutme />

        </section>
        <section className="expe" id="EXPERIENCE">
          <Expeience />
        </section>
        <section className="skills" id="SKILLS">
          <Skills />
        </section>
        <section className="works" id="PROJECTS">
          <Works />
        </section>


      </div>
    )
  }
}
export default App;
