import { Link } from 'react-router-dom'
import githubLogo from './assets/github-mark/github-mark-white.svg'
import linkedInIcon from './assets/linkedin-icon.svg'
import './styles/nav.css'

function Nav() {
    return (
        <div className="navbar-c">
            <div className="logos">
                <Link to='https://www.github.com/alexp141'><img src={githubLogo} alt='github logo' /></Link>
                <Link to='https://www.google.com'><img src={linkedInIcon} alt='github logo' /></Link>
            </div>

            <nav className='navbar'>
                <Link to="/"><button type='button' className='nav-btn'>About</button></Link>
                <Link to="/projects"><button type='button' className='nav-btn'>Projects</button></Link>
                <Link to="/contact"><button type='button' className='nav-btn'>Contact</button></Link>
            </nav>
        </div>
    )
}

export default Nav