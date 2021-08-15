import React from 'react'
import { CaptionStyles } from '../../styles/slideshow/CaptionStyles'

const SlideshowCaption = ({name, artist}) => {
    return (
        <CaptionStyles>
            <h2>{name}</h2>
            <p>{artist.name}</p>
            <div className="artist-mobile">
                <img className="artist-image" src={artist.image} alt={artist.name} />
            </div>
        </CaptionStyles>
    )
}

export default SlideshowCaption
