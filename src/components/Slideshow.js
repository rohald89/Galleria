import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { SlideshowImages, SlideshowStyles, SlideshowInformation } from '../styles/SlideshowStyles';
import { Context } from './context';
import data from '../data/data.json';
import SlideshowNav from './SlideshowNav';

const Slideshow = () => {
    const { painting } = useContext(Context);
    const { images, name, artist, year, description, source } = data[painting];
    return (
        <>
            <SlideshowStyles>
                <SlideshowImages>
                    <figure>
                        <img src={images.hero.small} alt={name} />
                        <figcaption>
                            <h2>{name}</h2>
                            <p>{artist.name}</p>
                        </figcaption>
                    </figure>
                    <img src={artist.image} alt={artist.name} />
                </SlideshowImages>
                <SlideshowInformation>
                    <span>{year}</span>
                    <p>{description}</p>
                    <a href={source}>Go to source</a>
                </SlideshowInformation>
            </SlideshowStyles>
            <SlideshowNav />
        </>
    )
}

export default Slideshow
