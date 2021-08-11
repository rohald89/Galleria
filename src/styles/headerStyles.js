import styled from 'styled-components';
import {motion} from 'framer-motion';

export const StyledHeader = styled(motion.header)`
  height: 7.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;
  border-bottom: 1px solid #e5e5e5;

  img {
      height: 3.2rem;
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

      &:hover {
          color: #000;
      }
  }
`;