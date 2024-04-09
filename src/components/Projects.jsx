import { Container, Tab, Col, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/cbay-pic.png";
import projImg2 from "../assets/img/puppy-bowl.png";
import projImg3 from "../assets/img/book-buddy.png";
import projImg4 from "../assets/img/first-website.png";

export const Projects = () => {

    const projects = [
        {
            title: "Capstone",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Puppy Bowl",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Book Buddy",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "My First Website",
            description: "Design & Development",
            imgUrl: projImg4,
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet. Qui nihil incidunt aut dignissimos facilis sit officia natus. Eum quod autem id voluptatem aliquam quo officia dolorem quo labore eaque?</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">About Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Resume</Nav.Link>
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
                            <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}