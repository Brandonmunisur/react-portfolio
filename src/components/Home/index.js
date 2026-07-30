import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/beta.png'
import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import './index.scss'
import Project from '../projects/project.js'

import applicationTrackerImage from '../../assets/images/application-tracker.png'
import snakeGameImage from '../../assets/images/snake-game.png'
import secondProjectImage from '../../assets/images/pong-game.png'
import disneyImage from '../../assets/images/disney.png'
// Correct import statement

// import Logo from './logo'

const Home = () => {
  const [LetterCLass, setLetterCLass] = useState('text-animate')
  const nameArray = ['r', 'a', 'n', 'd', 'o', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterCLass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut)
  }, [])
const projectsData = [
  {
    name: 'Application Tracker',
    description:
      'A React job application tracker for managing applications, interview stages, follow-up dates and recruiter information.',
    technologies: 'React, JavaScript, Vite, CSS, Local Storage',
    githubLink: 'https://github.com/Brandonmunisur/careerboard-react',
    demoLink: 'https://brandonmunisur.github.io/careerboard-react/',
    image: applicationTrackerImage,
  },
  {
    name: 'Disney+ Clone',
    description:
      'A Disney+ inspired streaming interface built with React, Firebase and Redux.',
    technologies: 'React, Firebase, Redux',
    githubLink: 'https://github.com/Brandonmunisur/disney-clone',
    demoLink: 'https://disneyplus-clone-84335.firebaseapp.com/',
    image: disneyImage,
  },
]
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={LetterCLass}>H</span>
            <span className={`${LetterCLass} _12`}>i,</span>
            <br />
            <span className={`${LetterCLass} _13`}>I</span>
            <span className={`${LetterCLass} _14`}>'m</span>

            <img src={LogoS} alt="developer" />
            <AnimatedLetters
              LetterCLass={LetterCLass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              LetterCLass={LetterCLass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full-stack developer / JavaScript Expert / React specialist </h2>
          <h2>Node.js / C++ / C# </h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        {/* Map through projectsData and render Project components */}
        {projectsData.map((project, index) => {
          console.log(project)
          return <Project key={index} {...project} />
        })}
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
