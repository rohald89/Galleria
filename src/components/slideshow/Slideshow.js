import React, { useContext } from 'react';
import { SlideshowStyles } from '../../styles/slideshow';
import { AnimatePresence } from 'framer-motion';
import { wrap } from "popmotion";

import { Context } from '../../context';
import data from '../../data/data.json';
import SlideshowNav from './SlideshowNav';
import SlideshowImages from './SlideshowImages';
import SlideshowInformation from './SlideshowInformation';
import Modal from './Modal';


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
    const { openModal, painting, page, direction } = useContext(Context);
    const { images, name, artist, year, description, source } = data[painting] || 0;

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
                  <SlideshowImages name={name} artist={artist} images={images}/>
                  <SlideshowInformation year={year} description={description} source={source} />
              </SlideshowStyles>
          </AnimatePresence>
          <SlideshowNav/>
          { openModal && <Modal openModal={openModal}/> }
        </>
    )
}

export default Slideshow
