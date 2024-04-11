import profileImg from "../assets/img/profileImg.png";

export const AboutMe = () => {
    return (
        <div className="about-me" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <img src={profileImg} alt="John Perkins" style={{ maxWidth: '50%', height: 'auto', display: "flex", justifyContent: "center"}} />

            <h2>Hi there! I'm John Perkins,</h2>
            <p>and I'm a dedicated and results-driven web developer with a special focus on frontend development. My professional journey is characterized by a deep commitment to not only mastering the technical aspects of development with JavaScript, React, and Node.js but also applying these skills to create impactful, user-centered digital solutions.</p>

            <p>Throughout my career, I've had the privilege of leading and contributing to projects that push the envelope in web development. From orchestrating a comprehensive e-commerce platform that simplifies the online shopping experience to crafting my personal portfolio website showcasing my projects and technical skills, I've consistently leveraged technology to solve problems and enhance user satisfaction. My work at McMaster-Carr as a Distribution Generalist taught me the value of precision and efficiency, principles I apply in my coding projects. As an Assistant General Manager at PharmaCann, I spearheaded the launch of an online ordering system, significantly improving customer access and operational efficiency—a testament to my ability to blend technical acumen with strategic thinking.</p>

            <p>But who am I beyond the code? In my downtime, you'll often find me on the golf course, enjoying the serene challenge of the game. It's not just a pastime; it's a way to practice focus and patience, qualities essential to my professional life. Diving into personal coding projects allows me to stay ahead of the curve, ensuring my skills are not just current but also pioneering. Reading and swimming offer me a peaceful retreat from the digital world, helping to refresh my mind and body. However, the true highlight of my day is the time spent with family and friends, which keeps me inspired and motivated.</p>

            <p>My ethos revolves around a simple yet powerful belief: blending one's passions with their profession leads to truly innovative and meaningful work. Whether through advancing web development, exploring new hobbies, or cherishing moments with loved ones, I am committed to a life of growth, learning, and contribution.</p>
        </div>
    );
};