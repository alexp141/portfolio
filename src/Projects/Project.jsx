import reactLogo from '../assets/react.svg'
import githubLogo from '../assets/github-mark/github-mark.svg'
import { Link } from 'react-router-dom'
import '../styles/Project.css'

function Project({project}) {

    return (
        <div className="proj-c">
            <img src={project.imgSrc} alt="React logo" />
            <div className="proj-heading">
                <div className="proj-name-c">
                    <h1>{project.name}</h1>
                </div>
                <div className="proj-links-c">
                <Link to={project.githubLink}><img src={githubLogo} alt='github logo' /></Link>
                </div>
            </div>
            <div className="proj-desc">
                {project.description}
            </div>
        </div>
    )
}

export default Project