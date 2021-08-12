import React, { useContext } from 'react';
import data from '../data/data.json';
import { Context } from './context';
import back from '../assets/icon-back-button.svg';
import next from '../assets/icon-next-button.svg';
import { NavStyles } from '../styles/NavStyles';

const SlideshowNav = (props) => {
    const { painting, setPainting } = useContext(Context);
    const { name, artist } = data[painting]

    return (

        <NavStyles painting={painting}>
            <div className="title">
                <h2>{name}</h2>
                <p>{artist.name}</p>
            </div>
            <a disabled={painting === 0} onClick={() => setPainting(painting - 1)}><img src={back} /></a>
            <a disabled={painting === 15} painting onClick={() => setPainting(painting + 1)}><img src={next} /></a>
        </NavStyles>
    )
}

export default SlideshowNav
