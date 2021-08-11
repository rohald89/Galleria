import React, { useContext } from 'react';
import { GalleryItem, GalleryCaption } from '../styles/GalleryItem'
import { Context } from './context';

const GalleryCard = ({id, name, images, artist}) => {
    const { setPainting } = useContext(Context);

    return (
            <GalleryItem to="/slideshow" onClick={() => setPainting(id)}>
                <figure>
                    <img src={images.thumbnail} alt="" />
                    <GalleryCaption>
                        <h2>{name}</h2>
                        <p>{artist.name}</p>
                    </GalleryCaption>
                </figure>
            </GalleryItem>
    )
}

export default GalleryCard
