import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/beta.png'
import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect } from 'react'
import './index.scss'
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
        {/* <Logo /> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
