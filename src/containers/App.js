import React from 'react';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal';

function App() {
    const {isShowingModal, isClosingModal} = useModal();

    return (
        <div className='container'>
            <button className='button button_ghost' onClick={isClosingModal}>Налоговый вычет</button>
            <Modal isShowingModal={isShowingModal} isClosingModal={isClosingModal}/>
        </div>
    )
}

export default App
