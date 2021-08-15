import React, {useContext} from 'react';
import { StyledHeader } from '../styles/headerStyles';
import  {Context} from '../context';

import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const { slideshow, setSlideshow } = useContext(Context);

    return (
        <StyledHeader
            animate={{y:0, opacity: 1}}
            initial={{y:-72, opacity: 0}}
            transition={{duration: 1, ease: [.6, .05, -.01, .9] }}
        >
            <Link to="/" onClick={() => setSlideshow(false)}>
                <img src={logo} alt="galleria logo" />
            </Link>
            <Link to="/slideshow" onClick={() => setSlideshow(!slideshow)} className="start-slideshow">{slideshow ? 'stop' : 'start'} slideshow</Link>
        </StyledHeader>
    )
}

export default Header
