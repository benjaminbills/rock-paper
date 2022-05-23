import React from 'react'
import Triangle from '../../assests/images/bg-triangle.svg'
import Paper from '../../assests/images/icon-paper.svg'
import Scissors from '../../assests/images/icon-scissors.svg'
import Rock from '../../assests/images/icon-rock.svg'

import './Selection.css'
function Selection() {
  return (
    <div className='select'>
        <div className='select-items'>
            <div className='rock-hand'>
                <button className='paper'>
                    <img src={Paper} alt='paper' />
                </button>
                <button className='rock'>
                    <img src={Scissors} alt='scissors' />
                </button>
            </div>
            <div className='center' >
                <button className='scissors'>
                    <img src={Rock} alt='rock' />
                </button>
            </div>      
        </div>
    </div>
  )
}

export default Selection