import { useCallback, useEffect, useState } from "react"
import './assets/css/app.css'
import words from "./assets/wordList.json"
import HangmanDrawing from "./components/HangmanDrawing"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"

function getNewWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getNewWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter:string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetters])

  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
      const key = e.key
      if(key !== "Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getNewWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[])

  return (
    <div className="wrapper">
      <div className="title">
        {!isWinner && !isLoser && "Welcome to Hungman Game. Good luck!"}
        {isWinner && "Congratulations! - Press ENTER to start a new game"}
        {isLoser && "Nice try - Press ENTER to start a new game"}
      </div>
      <div className="row-wrapper">
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <div className="column-wrapper">
          <HangmanWord 
            reveal={isLoser}
            guessedLetters={guessedLetters} 
            wordToGuess={wordToGuess} />
            <Keyboard 
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
        </div>
      </div>
    </div>
  )
}

export default App