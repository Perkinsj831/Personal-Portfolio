import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText] = useState("Send"); // Since we're not handling the form submission, buttonText doesn't need to change

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form name="contact" data-netlify="true" method="POST">
                            <input type="hidden" name="form-name" value="contact" />
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};