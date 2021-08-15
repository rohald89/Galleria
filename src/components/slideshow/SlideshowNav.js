import React, { useCallback, useContext, useEffect } from 'react';
import data from '../../data/data.json';
import { Context } from '../../context';
import back from '../../assets/icon-back-button.svg';
import next from '../../assets/icon-next-button.svg';
import { NavStyles } from '../../styles/slideshow/NavStyles';

const SlideshowNav = () => {
    const { painting, setPainting, page, setPage, slideshow, setSlideshow } = useContext(Context);
    const { name, artist } = data[painting];

    const paginate = useCallback(
        (newDirection) => {
            setPainting(painting + newDirection);
            setPage([page + newDirection, newDirection]);
    }, [page, painting, setPage, setPainting]);


    useEffect(() => {
        if (slideshow) {
          const interval = setInterval(() => {
            if (painting === 14) {
              setPainting(0);
              setSlideshow(false);
            } else {
              paginate(1);
            }
          }, 5000 );
          return () => {
            clearInterval(interval);
          };
        }
      }, [painting, slideshow, setPainting, setSlideshow, paginate]);

    return (

        <NavStyles painting={painting}>
            <div className="title">
                <h2>{name}</h2>
                <p>{artist.name}</p>
            </div>
            <button disabled={painting === 0} onClick={() => paginate(-1)}><img src={back} alt="back button"/></button>
            <button disabled={painting === 14} onClick={() => paginate(1)}><img src={next} alt="next button"/></button>
        </NavStyles>
    )
}

export default SlideshowNav
