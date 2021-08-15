import React, {useContext} from 'react';
import { ModalStyles } from '../../styles/slideshow/ModalStyles';
import data from '../../data/data.json';
import { Context } from '../../context';

const Modal = () => {
    const { openModal, setOpenModal, painting } = useContext(Context);
    const currentPainting = data[painting];

    return (
        <ModalStyles>
            <button onClick={() => setOpenModal(!openModal)}>Close</button>
            <img src={currentPainting.images.gallery} alt={currentPainting.name} />
        </ModalStyles>
    )
}

export default Modal
