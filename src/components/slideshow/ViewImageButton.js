import React, {useContext} from 'react'
import { ButtonStyles } from '../../styles/slideshow/ButtonStyles'
import view from '../../assets/icon-view-image.svg';
import { Context } from '../../context';



const ViewImageButton = () => {
    const { openModal, setOpenModal} = useContext(Context);
    return (
        <ButtonStyles onClick={() => setOpenModal(!openModal)}>
            <img src={view} alt="" />
            View Image
        </ButtonStyles>
    )
}

export default ViewImageButton
