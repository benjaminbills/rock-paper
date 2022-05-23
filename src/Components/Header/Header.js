import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div><span id='break-words'>Rock Paper Scissors</span></div>
        <div>
            <button className='score-box'>
                <span>Score</span> <br/> <span className='score'>12</span>
            </button>
        </div>
    </div>
  )
}

export default Header