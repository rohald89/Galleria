import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SlideshowStyles = styled(motion.div)`
    margin: 2.4rem 2.4rem 10rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 750px) {
        margin: 4rem;
        margin-bottom: 10rem;
    }
    @media (min-width: 1400px) {
        margin: 10rem auto;
        margin-bottom: 18rem;
        justify-content: center;
        flex-direction: row;
    }
`;