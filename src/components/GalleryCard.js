import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { GalleryItem, GalleryCaption } from '../styles/GalleryItem'
import { Context } from './context';

const variants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.35,
      },
    }),
    initial: i => ({
        opacity: 0,
        y: -100,
        zIndex: 99 - (1 * i),
    })
}

const GalleryCard = ({id, name, images, artist}) => {
    const { setPainting } = useContext(Context);

    return (
        <motion.div
            key={id}
            custom={id}
            initial="initial"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={variants}
        >
            <GalleryItem to="/slideshow" onClick={() => setPainting(id)}>
                    <figure>
                        <img src={images.thumbnail} alt="" />
                        <GalleryCaption>
                            <h2>{name}</h2>
                            <p>{artist.name}</p>
                        </GalleryCaption>
                    </figure>
            </GalleryItem>
        </motion.div>
    )
}

export default GalleryCard
