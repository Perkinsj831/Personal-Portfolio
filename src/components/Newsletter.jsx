import { Alert, Row, Col } from "react-bootstrap"
import { useState, useEffect, useRef } from "react"

export const Newsletter = ({ onValidated, status, message}) => {
    const [email, setEmail] = useState("")
    const [showMessage, setShowMessage] = useState(false);
    const form = useRef()

    useEffect(() => {
        if (status === "success") {
            setShowMessage(true);
            clearFields();
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        email && 
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        });
    };

    const clearFields = () => {
        setEmail("");
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to my Newsletter</h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant="danger">{message}</Alert>}
                        {status === "success" && showMessage && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form name="contact v2" method="post" data-netlify="true" ref={form} onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact v2" />
                            <div className="new-email-bx">
                                <input id="email" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" autoComplete="email" />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}