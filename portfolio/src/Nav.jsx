import githubLogo from './assets/github-mark/github-mark-white.svg'
import './styles/nav.css'

function Nav() {
    return (
        <div className="navbar-c">
            <div className="logos">
                <img src={githubLogo} alt='github logo' />
                <img src={githubLogo} alt='github logo' />
                <img src={githubLogo} alt='github logo' />
            </div>

            <nav className='navbar'>
                <a href="google.com">About</a>
                <a href="google.com">Projects</a>
                <a href="google.com">Contact</a>
            </nav>
        </div>
    )
}

export default Nav