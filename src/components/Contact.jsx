import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
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
    const [buttonText, setButtonText] = useState("Send"); // Since we're not handling the form submission, buttonText doesn't need to change
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("")
    const form = useRef();

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
      .then(() => {
        setMessage("Your message has been sent successfully");
        setLoading(false);
        setButtonText("Sent");
        setFormDetails(formInitialDetails);
        setTimeout(() => {
            setMessage("");
            setButtonText("Send");
        }, 3000)
    }, (error) => {
        setMessage("Failed to send the message, please try again");
        setLoading(false)
        setButtonText("Send");
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
                        <form name="contact v1" method="post" data-netlify="true" ref={form} onSubmit={sendEmail}>
                            <input type="hidden" name="form-name" value="contact v1" />
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" name="email" value={formDetails.email} placeholder="Email Address" autoComplete="email" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" name="phone" value={formDetails.phone} placeholder="Phone Number" autoComplete="tel" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)} />
                                    <button type="submit" disabled={loading}><span>{loading ? "Sending" : buttonText}</span></button>
                                    {message && <p>{message}</p>}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};