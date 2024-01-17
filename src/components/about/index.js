import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  const [LetterCLass, setLetterCLass] = useState('text-animate')

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterCLass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut)
  }, [])
  return (
    <>
      <div className="container about-page ">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              LetterCLass={LetterCLass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {' '}
            As a passionate and dedicated software developer, I bring a unique
            blend of technical proficiency, creativity, and problem-solving
            skills to every project. With a solid foundation in programming
            languages such as JavaScript and proficiency in popular frameworks
            like React, I am adept at crafting efficient and scalable solutions.
          </p>
          <p>
            My experience extends to collaborating within agile teams, where
            effective communication and adaptability are key components of my
            workflow. I thrive on challenges, approaching each problem with a
            methodical mindset and an eagerness to learn. Whether it's front-end
            development to create immersive user experiences or back-end systems
            to ensure seamless functionality, I am committed to delivering
            high-quality, innovative solutions.
          </p>
          <p>
            My commitment to continuous improvement, coupled with a genuine
            passion for software development, positions me as a valuable asset
            in any dynamic and forward-thinking team.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default About
