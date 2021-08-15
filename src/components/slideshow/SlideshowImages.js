import React from 'react'
import { ImageStyles } from '../../styles/slideshow/ImageStyles';
import SlideshowCaption from './SlideshowCaption';

const SlideshowImages = ({name, artist, images}) => {
    return (
        <ImageStyles>
            <figure>
                <picture>
                    <source srcSet={images.hero.large} media="(min-width: 750px)"/>
                    <img src={images.hero.small} alt={name} />
                </picture>
                <SlideshowCaption name={name} artist={artist} />
                <div className="artist-desktop">
                        <img className="artist-image" src={artist.image} alt={artist.name} />
                </div>
            </figure>
        </ImageStyles>
    )
}

export default SlideshowImages


