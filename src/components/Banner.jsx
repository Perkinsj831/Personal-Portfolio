import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import headerImg from "../assets/img/header-img.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Full Stack Developer", "Software Engineer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300)
        };
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm John and I'm a `}<span className="wrap">{text}</span></h1>
                        <p>Welcome. I'm John Perkins, a Web Developer with a keen interest in front-end and full-stack technologies. My portfolio highlights a range of projects, demonstrating my skills with modern development tools and practices.</p>
                        <p>Take a look at my work, and if you're interested in discussing potential projects or just want to chat about technology, feel free to reach out.</p>
                        <HashLink to="#connect" className="vvd">
                        <button>Let's Connect <ArrowRightCircle size={25}/></button>
                        </HashLink>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
            <div>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
                <span className="stars"></span>
            </div>
        </section>
    )
}