import React, { useState } from 'react'
import './App.css';
import Selection from './Components/Game/Selection';
import Header from './Components/Header/Header';
import Modal from 'react-modal';
import Close from './assests/images/icon-close.svg'
import BasicRules from './assests/images/image-rules.svg'
import AdvanceRules from './assests/images/image-rules-bonus.svg'
import Advanced from './Components/Game/Advanced';
Modal.setAppElement('body');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
function App() {
  const [score, setScore] = useState(0)
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [changeGameType, setChangeGameType] = useState(false)

  const openModal = () => {
    setIsOpen(true);
  }
  

  const closeModal = () => {
    setIsOpen(false);
  }
  const changeGame =() => {
    console.log('workind');
    setChangeGameType(!changeGameType)
    setScore(0)
  }

  return (
    <div className="container">
      <Header score={score}  />
      <button onClick={changeGame} className='game-type'>{changeGameType?'Play Advance':'Play Basic'}</button>
      {changeGameType? <Selection score={score} setScore={setScore} />: <Advanced score={score} setScore={setScore} />}
      
      
    <button onClick={openModal} className='rules'>Rules</button>
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      overlayClassName="Overlay"
    >
      <div className='rules-section'>
        <div className='rules-header'>
          <h1>Rules</h1>
         <button onClick={closeModal}>
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/></svg>
         </button>
        </div>
        <div className='rules-image'>
          {changeGameType?
          <img src={BasicRules} alt='game rules' />
          : <img src={AdvanceRules} alt='game rules' />
        }
        </div>
      </div>
    </Modal>
    </div>
  );
}

export default App;
