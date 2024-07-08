import '../assets/css/keyboard.css'

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({ disabled = false, activeLetters, inactiveLetters, addGuessedLetter } : KeyboardProps) {
  return (
    <div className='keyboard-wrapper'>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button 
            className={`keyboard-btn${isActive ? " active" : ""}${isInactive ? " inactive" : ""}`} 
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInactive || disabled}
          >{key}
          </button>
        )
      })}
    </div>
  )
}