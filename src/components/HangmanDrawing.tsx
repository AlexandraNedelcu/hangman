import "../assets/css/hangman-drawing.css"

const HEAD = (
  <div className='hangman-head'></div>
)

const BODY = (
  <div className='hangman-body'></div>
)

const RIGHT_ARM = (
  <div className='hangman-arm hangman-right-arm'></div>
)

const LEFT_ARM = (
  <div className='hangman-arm hangman-left-arm'></div>
)

const RIGHT_LEG = (
  <div className='hangman-leg hangman-right-leg'></div>
)

const LEFT_LEG = (
  <div className='hangman-leg hangman-left-leg'></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }:HangmanDrawingProps) {
  return (
    <div className='hangman-drawing-wrapper'>
      {BODY_PARTS.slice(0,numberOfGuesses)}
      <div className='small-vertical-line'></div>
      <div className='horizontal-line'></div>
      <div className='vertical-line'></div>
      <div className='base-line'></div>
    </div>
  )
}