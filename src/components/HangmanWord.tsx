import "../assets/css/hangman-word.css"

type HangmanWordProps = {
  reveal?: boolean
  guessedLetters: string[]
  wordToGuess: string
}

export default function HangmanWord({ reveal=false, guessedLetters, wordToGuess }:HangmanWordProps) {
  return (
    <div className='hangman-word-wrapper'>
      {wordToGuess.split("").map((letter,index) => (
        <span className='hangman-word-letter' key={index}>
          <span style={{
            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
            color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}