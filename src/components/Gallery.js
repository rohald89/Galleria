import React from 'react';
import Masonry from 'react-masonry-css';

import data from '../data/data.json';
import { Wrapper } from '../styles/GlobalStyles';
import GalleryCard from './GalleryCard';

const Gallery = () => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    return (
        <Wrapper>
            <h1 className="sr-only">Main Gallery</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid-column"
            >
                { data.map((painting, index) => {
                    return <GalleryCard {...painting} id={index} key={index} />
                })
                }
            </Masonry>
        </Wrapper>
    )
}

export default Gallery
