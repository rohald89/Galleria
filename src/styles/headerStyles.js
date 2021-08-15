import styled from 'styled-components';
import {motion} from 'framer-motion';

export const StyledHeader = styled(motion.header)`
  height: 7.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;
  border-bottom: 1px solid #e5e5e5;
  @media (min-width: 750px) {
          height: 8.8rem;
          padding: 0 4rem;
    }
  @media (min-width: 1400px) {
          height: 12.8rem;
    }

  img {
      height: 3.2rem;
      @media (min-width: 1400px) {
          height: 4.8rem;
    }
      
  }

  a {
      font-size: .9rem;
      font-weight: bold;
      line-height: 1.1rem;
      letter-spacing: 1.92857px;
      text-decoration: none;
      color: #7d7d7d;
      text-transform: uppercase;
      transition: .3s ease;
      @media (min-width: 750px) {
          font-size: 1.2rem;
          line-height: 1.5rem;
      }

      &:hover {
          color: #000;
      }
  }
`;