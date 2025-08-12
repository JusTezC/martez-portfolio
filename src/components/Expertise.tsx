import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import Chip from '@mui/material/Chip'
import '../assets/styles/Expertise.scss'

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Agile",
    "MongoDB",
    "Axios",
    "Git",
    "GitHub Actions",
    "Postman",
    "JWT Authentication",
    "Material UI",
    "Redux Toolkit",
    "NoSQL",
    "AWS",
    "Express",
    "SDLC"
];




function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Overview</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I recently completed an intensive full-stack development bootcamp, gaining hands-on experience in building dynamic, responsive web applications using HTML5, CSS3, JavaScript (ES6+), and React.js for the front end, along with Node.js, Express.js, and RESTful APIs for the back end. I am proficient in working with both MongoDB and PostgreSQL databases, implementing secure authentication with JWT and OAuth, and applying responsive design principles. My skill set includes Git/GitHub for version control, cloud deployment, containerization, testing methodologies, and agile workflows. Through real-world projects, I developed the ability to create scalable, efficient, and maintainable applications, positioning myself as a versatile developer ready to contribute to modern, collaborative tech teams.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Expertise