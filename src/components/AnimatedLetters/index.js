import './index.scss'

const AnimatedLetters = ({ LetterCLass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${LetterCLass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
export default AnimatedLetters
