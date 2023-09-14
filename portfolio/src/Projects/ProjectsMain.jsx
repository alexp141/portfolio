import Project from "./Project"
import '../styles/ProjectsMain.css'
import projects from '../utils/projects'

function ProjectsMain() {

    return(
        <div className="proj-grid">
            {projects.sort( (a,b) => b.public - a.public).map( p => <Project key={p.name} project={p}/>)}
        </div>
    )
}

export default ProjectsMain