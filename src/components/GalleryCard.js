import React from 'react'
import { GalleryItem, GalleryCaption } from '../styles/GalleryItem'

const GalleryCard = ({id, name, images, artist}) => {
    return (
        <GalleryItem>
            <img src={images.thumbnail} alt="" />
            <GalleryCaption>
                <h2>{name}</h2>
                <p>{artist.name}</p>
            </GalleryCaption>
        </GalleryItem>
    )
}

export default GalleryCard
