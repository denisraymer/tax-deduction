import {useState} from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowingModal: isShowing,
        toggleModal: toggle,
    }
};

export default useModal;