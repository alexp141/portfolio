import githubLogo from './assets/github-mark/github-mark-white.svg'
import linkedInIcon from './assets/linkedin-icon.svg'
import './styles/nav.css'

function Nav() {
    return (
        <div className="navbar-c">
            <div className="logos">
                <img src={githubLogo} alt='github logo' />
                <img src={linkedInIcon} alt='github logo' />
            </div>

            <nav className='navbar'>
                <a href="google.com"><button type='button' className='nav-btn'>About</button></a>
                <a href="google.com"><button type='button' className='nav-btn'>Projects</button></a>
                <a href="google.com"><button type='button' className='nav-btn'>Contact</button></a>
            </nav>
        </div>
    )
}

export default Nav