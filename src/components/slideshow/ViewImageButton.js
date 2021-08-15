import React from 'react'
import { ButtonStyles } from '../../styles/slideshow/ButtonStyles'
import view from '../../assets/icon-view-image.svg';


const ViewImageButton = () => {
    return (
        <ButtonStyles>
            <img src={view} alt="" />
            View Image
        </ButtonStyles>
    )
}

export default ViewImageButton
