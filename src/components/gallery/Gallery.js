import React, {useEffect} from 'react';
import Macy from 'macy';

import data from '../../data/data.json';
import { GalleryStyles } from '../../styles/gallery/GalleryStyles';
import GalleryCard from './GalleryCard';
import { AnimatePresence } from 'framer-motion';

const macyOptions = {
  container: '#macy-container',
  mobileFirst: true,
  margin: 24,
  columns: 1,
  breakAt: {
    1200: 4,
    950: 3,
    650: {
      margin: 40,
      columns: 2,
    },
  },
};

const Gallery = () => {
    useEffect(() => {
        new Macy(macyOptions)
    }, [])

    return (
        <GalleryStyles
        id="macy-container"
        >
          <AnimatePresence>
            { data.map((painting, index) => {
                return <GalleryCard {...painting} id={index} key={index}/>
            })}
          </AnimatePresence>
        </GalleryStyles>
    )
}

export default Gallery
