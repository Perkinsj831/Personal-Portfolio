import { Container, Tab, Col, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Resume } from "./Resume";
import { AboutMe } from "./AboutMe";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/cbay-pic.png";
import projImg2 from "../assets/img/puppy-bowl.png";
import projImg3 from "../assets/img/book-buddy.png";
import projImg4 from "../assets/img/first-website.png";
import projImg5 from "../assets/img/hangman.png";
import projImg6 from "../assets/img/snake.png";

export const Projects = () => {

    const projects = [
        {
            title: "E-Commerce Site",
            description: "A comprehensive e-commerce platform for vinyl records. Featuring advanced search, secure user authentication, and admin management.",
            imgUrl: projImg1,
            link: "https://github.com/Perkinsj831/cbay"
        },
        {
            title: "Puppy Bowl",
            description: "This web application showcases a puppy bowl event, allowing users to view, add, or delete player profiles, and search for specific participants, leveraging React for a seamless user interface.",
            imgUrl: projImg2,
            link: "https://ppy-bowl.netlify.app"
        },
        {
            title: "Book Buddy",
            description: "This web application is a React-based library management system where users can browse, check out, and return books, featuring secure login functionality and intuitive navigation through a clean, user-friendly interface.",
            imgUrl: projImg3,
            link: "https://library-book-buddy.netlify.app"
        },
        {
            title: "My First Website",
            description: "This project modernizes a website with CSS grids and flex, introduces a functional contact form that leads to a success message upon submission, and employs JavaScript for dynamic user interactions.",
            imgUrl: projImg4,
            link: "https://first-website-john-perkins.netlify.app"
        },
        {
            title: "Hangman Game",
            description: "This web-based Hangman game where players try to guess the correct word based on hints, with each incorrect guess adding a part to the hangman image. The game features a responsive layout and interactive keyboard.",
            imgUrl: projImg5,
            link: "https://jdhangman.netlify.app"
        },
        {
            title: "Snake Game",
            description: "This web app is a modern Snake game with adjustable difficulty levels and real-time score updates. Players use keyboard or on-screen controls to navigate the snake and aim for high scores.",
            imgUrl: projImg6,
            link: "https://jdsnakegame.netlify.app/"
        }
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Explore my portfolio below, featuring key projects from my journey as a developer. Each project showcases my skills in web and software development, demonstrating my approach to problem-solving and design. For collaborations or inquiries, don’t hesitate to reach out.</p>
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
                            <Tab.Pane eventKey="second">
                                <Row>
                                    <AboutMe />
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                    <Row>
                                        <Resume />
                                    </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    );
};