import React from 'react';
import { StyledHeader } from '../styles/headerStyles';

import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="galleria logo" />
            <a href="/slideshow" className="start-slideshow">start slideshow</a>
        </StyledHeader>
    )
}

export default Header
