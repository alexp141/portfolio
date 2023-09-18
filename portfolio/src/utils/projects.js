import swiftIcon from '/Users/alexanderpastor/projects/portfolio/portfolio/src/assets/swift-icon.svg'
import reactIcon from '/Users/alexanderpastor/projects/portfolio/portfolio/src/assets/react.svg'

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
        description: 'desc here'

    }, 
    {
        name: 'CV Builder',
        imgSrc: reactIcon,
        public: true,
        githubLink: 'https://github.com/alexp141/cv-builder',
        previewLink: 'https://www.google.com',
        description: `A CV builder created using React.js and styled with CSS. This website allows users to input information about themselves that they would like to share on their CV. 
                        With each keystroke, the React components have their state mutated and the changes are reflected immediately on the CV preview page.`

    }, 
    {
        name: 'Calculator',
        imgSrc: reactIcon,
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
        githubLink: 'https://www.google.com',
        previewLink: 'https://www.google.com',
        description: 'desc here'

    },
    {
        name: 'Chess Game',
        imgSrc: swiftIcon,
        public: true,
        githubLink: 'https://github.com/alexp141/chess',
        previewLink: 'https://www.google.com',
        description: 'desc here'

    }
]

export default projects