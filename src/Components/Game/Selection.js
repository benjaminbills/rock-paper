import React, { useEffect, useState } from 'react'
import Triangle from '../../assests/images/bg-triangle.svg'
import Paper from '../../assests/images/icon-paper.svg'
import Scissors from '../../assests/images/icon-scissors.svg'
import Rock from '../../assests/images/icon-rock.svg'

import './Selection.css'
const  Selection = ({score, setScore}) => {
    const [userChoice, setUserChoice] = useState(null)
    const choices = ['rock','paper', 'scissors']
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)
    const [userWin, setUserWin] = useState(false)
    const [computerWin, setComputerWin] = useState(false)
    const [selected, setSelected] = useState(false)
    const [emptyCircle, setEmptyCircle] = useState(true)
    // const [score, setScore] = useState(0)

    const handleClicked = (value) => {
        setUserChoice(value);
        setSelected(true)
        setComputerChoice(null)
        setTimeout(()=> generateComputerChoice(),2000)
        
        // setEmptyCircle(false)
    }
    const generateComputerChoice =() => {
        const randomChoice = choices[Math.floor(Math.random()*choices.length)]
        setComputerChoice(randomChoice)
        setEmptyCircle(false)
    }
    const checkResult = () => {
        switch(userChoice + computerChoice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setResult('You Win')
                setUserWin(true)
                setComputerWin(false)
                setScore(score+1)
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                setResult("You Lose")
                setUserWin(false)
                setComputerWin(true)
                break
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
                setResult("It's a draw")
                setUserWin(false)
                setComputerWin(false)
                break

        }
    }
    const playAgain =() => {
        setSelected(false)
        setEmptyCircle(true)
        setResult(null)
        setUserWin(null)
        setComputerWin(null)
    }
    useEffect(() => {
        checkResult()
      }, [computerChoice])
  return (
       <div>

        {!selected ? (
            <div className='select-items'>
             
            <div className='rock-hand'>
                <button onClick={()=>handleClicked('paper')} className='paper'>
                    <img src={Paper} alt='paper' />
                </button>
                <button onClick={()=>handleClicked('rock')} className='rock'>
                    <img src={Rock} alt='rock' />
                </button>
            </div>
            <div className='center' >
                <button onClick={()=>handleClicked('scissors')} className='scissors'>
                    <img src={Scissors} alt='scissors' />
                </button>
            </div>      
        </div>
            ): <div className='result'>
                    <div>
                        <h4 className='text-heading'>You Picked</h4>
                        {userChoice === 'paper'&& <button className={userWin?'paper win':'paper'}>
                            <img src={Paper} alt='paper' />
                        </button>}
                        {userChoice === 'rock'&& <button className={userWin?'rock win':'rock'}>
                            <img src={Rock} alt='rock' />
                        </button>}
                        {userChoice === 'scissors'&& <button className={userWin?'scissors win':'scissors'}>
                            <img src={Scissors} alt='scissors' />
                        </button>}
                    </div>
                    {!emptyCircle && 
                    
                    <div className='mid-section'>
                        <h1 className='result-text'>{result}</h1>
                        <button onClick={()=> playAgain()} id='play-again'>Play again</button>
                    </div>
                    }
                    <div>
                        <h4 className='text-heading'>House Picked</h4>
                        {emptyCircle && <button className='empty-circle'></button>}
                        {computerChoice === 'paper'&& <button className={computerWin?'paper win':'paper'}>
                            <img src={Paper} alt='paper' />
                        </button>}
                        {computerChoice === 'rock'&& <button className={computerWin?'rock win':'rock'}>
                            <img src={Rock} alt='paper' />
                        </button>}
                        {computerChoice === 'scissors'&& <button className={computerWin?'scissors win':'scissors'}>
                            <img src={Scissors} alt='scissors' />
                        </button>}
                    </div>
                </div>
            }
        </div>
  )
}

export default Selection