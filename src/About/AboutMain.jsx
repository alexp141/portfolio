import '../styles/AboutMain.css'
import SkillsIcon from './SkillsIcon'
import githubLogo from '../assets/github-mark/github-mark.svg'
import htmlIcon from '../assets/html-icon.svg'
import javaIcon from '../assets/java-icon.svg'
import swiftIcon from '../assets/swift-icon.svg'
import jsIcon from '../assets/js-icon.svg'
import sqlIcon from '../assets/sql-icon.svg'
import reactIcon from '../assets/react-icon.svg'
import cssIcon from '../assets/css-icon.svg'
import gitIcon from '../assets/git-icon.svg'
import intellijIcon from '../assets/intellij-icon.svg'
import eclipseIcon from '../assets/eclipse-icon.svg'
import firebaseIcon from '../assets/firebase-icon.svg'


function AboutMain() {

    return (
        <div className="about-main-c">
            <div className="heading">
                <h1 id='name'>Alexander Pastor</h1>
                <h3 id='title'>UMD Computer Science Alumni</h3>
            </div>
            

            <div className="about-c">
                <p id='summary'>Motivated developer with a bachelor of science in computer science from the University of Maryland, College Park. 
                Experienced in object-oriented programming and using version control tools such as Github and Gitlab. 
                Fluent in English and Spanish. 
                A hardworking team player dedicated to improving skills through hands-on learning and development work. </p>
            </div>
            <div className="skills-c">
                <h1>Experience with:</h1>
                <div className='skill-icons-c'>
                    <SkillsIcon imgSrc={javaIcon} alt={'java icon'} iconName={'Java'}/>
                    <SkillsIcon imgSrc={swiftIcon} alt={'swift icon'} iconName={'Swift'}/>
                    <SkillsIcon imgSrc={jsIcon} alt={'javascript icon'} iconName={'Javascript'}/>
                    <SkillsIcon imgSrc={reactIcon} alt={'react icon'} iconName={'React'}/>
                    <SkillsIcon imgSrc={sqlIcon} alt={'sql icon'} iconName={'SQL'}/>
                    <SkillsIcon imgSrc={firebaseIcon} alt={'firebase icon'} iconName={'Firebase'}/>
                    <SkillsIcon imgSrc={githubLogo} alt={'github icon'} iconName={'Github'}/>
                    <SkillsIcon imgSrc={htmlIcon} alt={'html icon'} iconName={'HTML'}/>
                    <SkillsIcon imgSrc={cssIcon} alt={'css icon'} iconName={'CSS'}/>
                    <SkillsIcon imgSrc={gitIcon} alt={'git icon'} iconName={'git'}/>
                    <SkillsIcon imgSrc={intellijIcon} alt={'intellij icon'} iconName={'IntelliJ'}/>
                    <SkillsIcon imgSrc={eclipseIcon} alt={'eclipse icon'} iconName={'Eclipse'}/>
                </div>
            </div>
        </div>
    )
}

export default AboutMain