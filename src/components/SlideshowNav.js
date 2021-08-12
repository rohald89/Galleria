import React, { useContext } from 'react';
import data from '../data/data.json';
import { Context } from './context';
import back from '../assets/icon-back-button.svg';
import next from '../assets/icon-next-button.svg';
import { NavStyles } from '../styles/NavStyles';

const SlideshowNav = () => {
    const { painting, setPainting, page, setPage } = useContext(Context);
    const { name, artist } = data[painting];

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (

        <NavStyles painting={painting}>
            <div className="title">
                <h2>{name}</h2>
                <p>{artist.name}</p>
            </div>
            <button disabled={painting === 0} onClick={() => { setPainting(painting - 1); paginate(-1)} }><img src={back} alt="back button"/></button>
            <button disabled={painting === 14} onClick={() => {setPainting(painting + 1); paginate(1)}}><img src={next} alt="next button"/></button>
        </NavStyles>
    )
}

export default SlideshowNav
