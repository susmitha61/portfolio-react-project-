import {Col,Container,Row,Tab,Nav} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "./assets/img/Colorsharp2.png";
import projImg1 from './assets/img/Projimg1.jpeg';
import projImg2 from './assets/img/Projimg2.jpeg';
import projImg3 from './assets/img/Projimg3.jpeg';
import './Project.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import UncontrolledExample from "./UncontrolledExample";
const Projects = ()=>
 {
  const projects = [
    {
      title: "Random",
      description: "In the random place",
      imgUrl:projImg1,
      
    },
    {                                                                                                                                                                                       
      title: "Moonlight",
      description: "Night and the silence",
      imgUrl: projImg2,
    },
    {
      title: "Band",
      description: "Celebration and the Troop",
      imgUrl: projImg3,
    },
  ];
  return(
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>

                <h2>PROJECTS</h2>
                <p>
                Hey! Here I have displayed some random pictures i've took . Love capturing when I'm all alone it just makes me feel relaxing calm and peacifys my mind.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                    <Nav.Item>
                      <Nav.Link eventKey="first">MY WORKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">MUSIC AS MY PASSION</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PHOTOGRAPHY</Nav.Link>
                    </Nav.Item>
                   </Nav>
                   <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                   <ProjectCard key={index} {...project}/>
                                    
                                    )
                                })
                            }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <UncontrolledExample/>
                        {/* <p>Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.

Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they use depends on the types of tasks they are preforming and the platforms on which they are working.

Web development skills are in high demand worldwide and well paid too – making development a great career option. It is one of the easiest accessible higher paid fields as you do not need a traditional university degree to become qualified.

The field of web development is generally broken down into front-end (the user-facing side) and back-end (the server side). Let’s delve into the details.</p>
                       */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                      <p>Camera is not just a device its something where we can recollect our memories.It's an emotion.
                    It describes about our perpectives of various things that we look.
                      </p>
                      <p>Photography has become an omnipresent art and activity today. It has moved from being a specialized art in the hands of a skilled photographer, to being a daily use activity in the hands of each and every common man.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </div>}
                </TrackVisibility>
                </Col>
            </Row>
            </Container>
        <img className = "background-image-right" src={colorSharp2}></img>
    </section>
  )
}
export default Projects;