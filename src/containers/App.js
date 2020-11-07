import React from 'react';
import Modal from '../components/modal';
import useModal from '../hooks/useModal';

function App() {
    const {isShowingModal, toggleModal} = useModal();

    return (
        <div className='container'>
            <button className='button button_ghost' onClick={toggleModal}>Налоговый вычет</button>
            <Modal isShowing={isShowingModal} hide={toggleModal}/>
        </div>
    );
}

export default App;
