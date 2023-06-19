import reactLogo from '../assets/react.svg'
import githubLogo from '../assets/github-mark/github-mark.svg'
import '../styles/Project.css'

function Project() {

    return (
        <div className="proj-c">
            <img src={reactLogo} alt="React logo" />
            <div className="proj-heading">
                <div className="proj-name-c">
                    <h2>Project Name</h2>
                </div>
                <div className="proj-links-c">
                    <img src={githubLogo} alt="Github logo"/>
                </div>
            </div>
            <div className="proj-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ratione a non amet saepe numquam delectus dolor fugiat, suscipit vitae enim 
                    perferendis dolorem magni maxime, aliquam, provident nostrum debitis? Veritatis!</p>
            </div>
        </div>
    )
}

export default Project