import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skillCheckmark from "../assets/img/skillCheckmark.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
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

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>As an emerging web developer, I am building a solid skill set in JavaScript, React.js, and Node.js, supported by foundational knowledge in HTML5 and CSS. I am also learning SQL and Git to enhance my data management and version control capabilities. My approach to web development is characterized by a keen attention to detail and a commitment to solving problems effectively, while I continuously strive to improve my technical skills and communication.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>Problem Solving</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>Attention To Detail</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>Organization</h5>
                                </div>
                                <div className="item">
                                    <img src={skillCheckmark} alt="Image" />
                                    <h5>Communication</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}