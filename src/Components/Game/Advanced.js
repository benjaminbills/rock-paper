import React, { useEffect, useState } from 'react'
import Triangle from '../../assests/images/bg-triangle.svg'
import Paper from '../../assests/images/icon-paper.svg'
import Scissors from '../../assests/images/icon-scissors.svg'
import Rock from '../../assests/images/icon-rock.svg'
import Lizard from '../../assests/images/icon-lizard.svg'
import Spock from '../../assests/images/icon-spock.svg'
import './Advanced.css'


const Advanced = ({score, setScore}) => {
    const [userChoice, setUserChoice] = useState(null)
    const choices = ['rock','paper','lizard','spock', 'scissors']
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
            case 'paperrock':
            case 'rocklizard':
            case 'lizardspock':
            case 'spockscissors':
            case 'paperspock':
            case 'scissorslizard':
            case 'spockrock':
            case 'lizardpaper':
            case 'rockscissors':
                setResult('You Win')
                setUserWin(true)
                setComputerWin(false)
                setScore(score+1)
                break
            case 'scissorsspock':
            case 'spocklizard':
            case 'lizardrock':
            case 'rockpaper':
            case 'paperscissors':
            case 'spockpaper':
            case 'lizardscissors':
            case 'rockspock':
            case 'paperlizard':
            case 'scissorsrock':


                setResult("You Lose")
                setUserWin(false)
                setComputerWin(true)
                break
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
            case 'spockspock':
            case 'lizardlizard':
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
            <div className='advanced-select-items'>
             
            <div className='top-button'>
                <button onClick={()=>handleClicked('paper')} className='ad-paper'>
                    <img src={Paper} alt='paper' />
                </button>
               
            </div>
            <div className='center-button'>
            <button onClick={()=>handleClicked('rock')} className='ad-rock'>
                    <img src={Rock} alt='rock' />
                </button>
                <button onClick={()=>handleClicked('lizard')} className='ad-lizard'>
                    <img src={Lizard} alt='lizard' />
                </button>
            </div>
            <div className='bottom-button' >
                <button onClick={()=>handleClicked('scissors')} className='ad-scissors'>
                    <img src={Scissors} alt='scissors' />
                </button>
                <button onClick={()=>handleClicked('spock')} className='ad-spock'>
                    <img src={Spock} alt='spock' />
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
                        {userChoice === 'lizard'&& <button className={userWin?'lizard win':'lizard'}>
                            <img src={Lizard} alt='lizard' />
                        </button>}
                        {userChoice === 'spock'&& <button className={userWin?'spock win':'spock'}>
                            <img src={Spock} alt='spock' />
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
                        {computerChoice === 'lizard'&& <button className={computerWin?'lizard win':'lizard'}>
                            <img src={Lizard} alt='lizard' />
                        </button>}
                        {computerChoice === 'spock'&& <button className={computerWin?'spock win':'spock'}>
                            <img src={Spock} alt='spock' />
                        </button>}
                    </div>
                </div>
            }
        </div>
  )
}

export default Advanced