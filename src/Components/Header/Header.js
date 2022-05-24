import React, {useState} from 'react'
import './Header.css'
const Header =({score}) => {

  return (
    <div className='header'>
        <div><span id='break-words'>Rock Paper Scissors</span></div>
        <div>
            <button className='score-box'>
                <span>Score</span> <br/> <span className='score'>{score}</span>
            </button>
        </div>
    </div>
  )
}

export default Header