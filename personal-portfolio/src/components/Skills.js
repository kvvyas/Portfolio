import { Container, Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = ()=>{
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
return(
    <section className="skills" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="Skill-bx">
                    <h2>
                        Skills:
                    </h2>
                    <p><h3>Languages</h3> <h5> Java • JavaScript • HTML • CSS • Node.js • React • Python • C • PostgreSQL •MySQL</h5>
<br/><h3>Frameworks & tools </h3><h5> Eclipse • Visual Studio code • IntelliJ • Postman • GitHub • Git •Docker • AWS (basic) • OpenAI •Bash
scripting • Networking• Hugging face • Kubernetes •Jenkins </h5>
<br/><h3>Networking</h3><h5>Networking Theoretical knowledge of the OSI model • HTTP/HTTPS • TCP/UDP • SSH • TCP/IP</h5>
<br/><h3>Development Methodologies</h3><h5>Agile • Test-Driven Development • DevOps</h5>
</p>
<Carousel responsive={responsive} infinite={true} className="skill-slider">
  <div className ="item">
    <img src={meter1} alt = "Image"/>
    <h5>Web Development</h5>
  </div>
  <div className ="item">
    <img src={meter3} alt = "Image"/>
    <h5>Project Management</h5>
  </div>
  <div className ="item">
    <img src={meter2} alt = "Image"/>
    <h5>Data Analysis</h5>
  </div>
</Carousel>

                </div>
                </Col>
            </Row>
        </Container>
        <img className ="background-image-left" src={colorSharp}/>
    </section>
)
}