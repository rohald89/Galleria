import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { SlideshowImages, SlideshowStyles, SlideshowInformation } from '../../styles/slideshow/SlideshowStyles';
import { AnimatePresence } from 'framer-motion';
import { wrap } from "popmotion";

import { Context } from '../../context';
import data from '../../data/data.json';
import SlideshowNav from './SlideshowNav';

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0
      };
    }
  };

const Slideshow = () => {
    const { painting, page, direction } = useContext(Context);
    const { images, name, artist, year, description, source } = data[painting];

    const imageIndex = wrap(0, data.length, page);

    return (
        <>
        <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
            <SlideshowStyles
                key={page}
                src={images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                
                transition={{ delay: 0, duration: 0.3, type: "tween" }}
            >
                <SlideshowImages>
                    <figure>
                        <picture>
                            <source srcSet={images.hero.large} media="(min-width: 750px)"/>
                            <img src={images.hero.small} alt={name} />
                        </picture>
                        <figcaption>
                            <h2>{name}</h2>
                            <p>{artist.name}</p>
                            <div className="artist-mobile">
                                <img className="artist-image" src={artist.image} alt={artist.name} />
                            </div>
                        </figcaption>
                        <div className="artist-desktop">
                                <img className="artist-image" src={artist.image} alt={artist.name} />
                        </div>
                    </figure>
                </SlideshowImages>
                <SlideshowInformation>
                    <span>{year}</span>
                    <p>{description}</p>
                    <a href={source}>Go to source</a>
                </SlideshowInformation>
            </SlideshowStyles>
        </AnimatePresence>
        <SlideshowNav/>
        </>
    )
}

export default Slideshow
