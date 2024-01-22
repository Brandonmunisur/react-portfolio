import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/beta.png'
import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import './index.scss'
import Project from '../projects/project.js'
import snakeGameImage from '../../assets/images/snake-game.png'
import secondProjectImage from '../../assets/images/pong-game.png'
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
    // Add your project data here
    {
      name: 'snake-game',
      description: 'Description of Project 1.',
      technologies: 'JavaScript, CSS, HTML',
      githubLink: 'https://github.com/Brandonmunisur/snake-game-final',
      demoLink: 'https://brandonmunisur.github.io/snake-game-final/',
      image: snakeGameImage,
    },
    {
      name: 'pong-game-program',
      description: 'Description of the second project.',
      technologies: 'JavaScript, CSS, HTML',
      githubLink: 'https://github.com/Brandonmunisur/pong-game-program',
      demoLink: 'https://brandonmunisur.github.io/pong-game-program/',
      image: secondProjectImage,
    },
    // Add more projects as needed
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
