import React from 'react'
import {InformationStyles} from '../../styles/slideshow/InformationStyles'

const SlideshowInformation = ({year, description, source}) => {
    return (
        <InformationStyles>
            <span>{year}</span>
            <p>{description}</p>
            <a href={source}>Go to source</a>
        </InformationStyles>
    )
}

export default SlideshowInformation
