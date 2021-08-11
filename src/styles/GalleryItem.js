import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GalleryItem = styled(Link)`
    position: relative;
    
    
    img {
        width: 100%;
        &:hover {
            opacity: 0.5;
        }
    }
`;

export const GalleryCaption = styled.figcaption`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 17rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 3.2rem;
    padding-left: 3.2rem;
    padding-right: 4.6rem;
    color: white;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.841672) 100%);

    h2 {
        font-size: 2.4rem;
        line-height: 3rem;
    }

    p {
        margin-top: .6rem;
        opacity: .75;
        font-size: 1.3rem;
        line-height: 1.6rem;
    }
`;

