export const Resume = () => {
    return (
        <div className="resume" style={{ textAlign: 'center' }}>
            <h1>John Perkins - Web Developer</h1>
            <p>708-691-8515 | <a href="mailto:perkinsj831@gmail.com">perkinsj831@gmail.com</a> | Elmwood Park, IL | <a href="https://linkedin.com/in/johnperkins0831">LinkedIn</a> | <a href="https://github.com/Perkinsj831">GitHub</a></p>
            <p>Results-driven web developer with a passion for frontend development and a strong foundation in JavaScript, React, and Node.js. Demonstrated leadership and operational management experience, with a track record of leveraging technical skills to design creative solutions that align with industry standards. Eager to contribute to a team and organizational goals in a dynamic tech environment.</p>

            <h2 style={{ textDecoration: 'underline'}}>Technical Skills</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <ul style={{ textAlign: 'left' }}>
                    <li>Languages: JavaScript, HTML5, CSS</li>
                    <li>Frameworks/Libraries: React, Redux, Node.js</li>
                    <li>Tools & Platforms: Git, SQL</li>
                    <li>Certifications: Certificate in Web Development (March 2024)</li>
                </ul>
            </div>

            <h2 style={{ textDecoration: 'underline'}}>Technical Projects</h2>
            <div>
                <h3>E-commerce Site | Developer | March/2024</h3>
                <p>Developed a comprehensive e-commerce platform designed to streamline online shopping and sales. Leveraged React for building a dynamic and responsive frontend, with Node.js and Express for backend operations. Implement Redux for state management, ensuring seamless user experiences across the application.</p>
                <a href="https://github.com/Perkinsj831/cbay" style={{ display: 'inline-block', marginBottom: '20px', color: "#B8B8B8" }}>Project Link</a>
            </div>
            <div>
                <h3>Personal Portfolio | Developer | April/2024</h3>
                <p>Engineered a personal portfolio website using React to showcase my web development projects, skills, and professional background. Utilized React for a dynamic and responsive user interface, highlighting project work and technical competencies.</p>
                <a href="https://github.com/Perkinsj831/Personal-Portfolio" style={{ display: 'inline-block', marginBottom: '20px', color: "#B8B8B8" }}>Project Link</a>
            </div>
            
            <h2 style={{ textDecoration: 'underline'}}>Experience</h2>
            <h3>Distribution Generalist | McMaster-Carr | July/2022 - January/2024</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px',  }}>
                <ul style={{ textAlign: 'left' }}>
                    <li>Efficiently managed product storage within the warehouse, ensuring timely put-away of items in adherence to strict schedules.</li>
                    <li>Demonstrated a high degree of autonomy in executing job duties, requiring minimal supervision and no direct orders from management.</li>
                    <li>Tracked and located long-standing inventory items, coordinating with management to update put-away status and optimize warehouse space utilization.</li>
                </ul>
            </div>
            <h3>Assistant General Manager | PharmaCann | April/2018 - July/2022</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px',  }}>
                <ul style={{ textAlign: 'left'}}>
                    <li>Spearheaded the launch of an online ordering system, enhancing customer access and streamlining sales processes.</li>
                    <li>Played a pivotal role in the opening of four new locations, contributing to significant growth and market expansion.</li>
                    <li>Managed a team of over fifty employees, ensuring optimal staffing levels and operational efficiency.</li>
                </ul>
            </div>
            <h3>Store Manager | American Mattress | April/2015 - April/2018</h3>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px',  }}>
                <ul style={{ textAlign: 'left'}}>
                    <li>Led sales and operational strategies across multiple store locations, consistently surpassing sales targets.</li>
                    <li>Trained and mentored new employees, fostering a culture of excellence and continuous improvement.</li>
                </ul>
            </div>        
            <h2 style={{ textDecoration: 'underline'}}>Education</h2>
            <div>
                <h3>UIC Web Development Bootcamp | January/2024 - March/2024</h3>
                <h3>Powered by Fullstack Academy</h3>
                <p>Immersive software engineering coding bootcamp focused on mastering the foundations of web development, including HTML, JavaScript, and CSS, as well as advanced topics in front-end and back-end development, databases, and best practices in software engineering.</p>
            </div>
        </div>
    );
};