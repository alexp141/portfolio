import swiftIcon from '../assets/swift-icon.svg'
import reactIcon from '../assets/react-icon.svg'
import javaIcon from '../assets/java-icon.svg'
import jsIcon from '../assets/js-icon.svg'
import { Link } from 'react-router-dom'

const projects = [
    {
        name: 'Recipe App',
        imgSrc: swiftIcon,
        public: true,
        githubLink: 'https://github.com/alexp141/recipe-app',
        previewLink: 'https://www.google.com',
        description: `A recipe app that allows users to easily find recipes of their liking. 
        This app allows users to create accounts and interact with other users by leaving comments on recipes, sharing recipes with friends, or creating and sharing their own recipes. 
        Users can also save their favorite recipes for future reference.`

    },
    {
        name: 'Bikeride App',
        imgSrc: swiftIcon,
        public: false,
        githubLink: 'https://www.google.com',
        previewLink: 'https://www.google.com',
        description: `Built using the SwiftUI and Mapkit frameworks. 
        With a push of a button, the app tracks the user's current location and continuously records their route using map annotations. 
        Uses Apple’s FileManager API to save recorded tracks to the user’s local storage efficiently.`

    }, 
    {
        name: 'Resume Builder',
        imgSrc: reactIcon,
        public: true,
        githubLink: 'https://github.com/alexp141/resume-builder',
        previewLink: 'https://www.google.com',
        description: `A resume builder created using React.js and styled with CSS. This website allows users to input information about themselves that they would like to share on their resume. 
                        With each keystroke, the React components have their state mutated and the changes are reflected immediately on the resume preview page.`

    }, 
    {
        name: 'Calculator',
        imgSrc: jsIcon,
        public: true,
        githubLink: 'https://github.com/alexp141/calculator',
        previewLink: 'https://www.google.com',
        description: 'A simple calculator app that allows for basic calculations. Javascript was used to implement the logic of the calculator while CSS was used to style the page.'

    }, 
    {
        name: 'Personal Portfolio Website',
        imgSrc: reactIcon,
        public: true,
        githubLink: 'https://github.com/alexp141/portfolio',
        previewLink: 'https://www.google.com',
        description: 'This very website! Made using React.js and styled with CSS. This website acts as my work in progress portfolio and showcases my skills as a developer.'

    }, 
    {
        name: 'Threes Game',
        imgSrc: swiftIcon,
        public: false,
        githubLink: 'https://github.com/alexp141/threes-game',
        previewLink: 'https://www.google.com',
        description: <p>An IOS game implemented based on the rules of <Link to='https://apps.apple.com/us/app/threes/id779157948'><p>Threes! on the app store.</p></Link> 
        Made with SwiftUI.</p>
        
        

    },
    {
        name: 'Chess Game',
        imgSrc: javaIcon,
        public: true,
        githubLink: 'https://github.com/alexp141/chess',
        previewLink: 'https://www.google.com',
        description: `A chess game built using Java with a fully functional GUI constructed with Java Swing.
        Built using many object-oriented principles including encapsulation, inheritance, polymorphism, interfaces, abstract classes, etc.`

    }
]

export default projects