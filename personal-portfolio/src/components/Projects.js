import { Container,Col, Row, Nav, Tab } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.jpg";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/project-img-4.jpg";
import projImg5 from "../assets/img/project-img-5.jpg";
export const Project = () =>{
        const projects =[
            {
                title:"Smart Space",
                description:"StudySpace is a full-stack web application designed to help Concordia University students easily find and book available study rooms across campus libraries.",
                imgUrl:projImg4,
            },
            {
                title:"Prestine Clean",
                description:"Its a cleaning app with a server side (Business page) and the client(user page). The user page is where you will see the services that are created by the business and reciepts that are ment to be paid by the users.",
                imgUrl:projImg2,
            },
            {
                title:"Tipsea Dipsea",
                description:"The project endeavours to harness the profound impact of music-induced movement to combat the motor degeneration associated with Parkinson's, while also assessing the effectiveness of innovative treatment methodologies to reveal new insights about disease progression.",
                imgUrl:projImg5,
            },
        ]
    return (
        <section className="Project" id ="project">
           <Container>
  <Row>
    <Col>
      <h2>Projects</h2>
      <p>Here are some of my Public Projects. To look at more of my projects, please visit my GitHub!</p>
      
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        {/* Horizontal Nav */}
        <Nav variant="pills" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Tab 3</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Tab Content */}
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            <p>Coming soon!!</p>
          </Tab.Pane>

          <Tab.Pane eventKey="third">
            <p>Coming soon!!</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Col>
  </Row>
</Container>

            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}