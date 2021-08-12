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
            <button disabled={painting === 0} onClick={() => setPainting(painting - 1)}><img src={back} /></button>
            <button disabled={painting === 14} painting onClick={() => setPainting(painting + 1)}><img src={next} /></button>
        </NavStyles>
    )
}

export default SlideshowNav
