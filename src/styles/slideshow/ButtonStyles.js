import styled from 'styled-components';

export const ButtonStyles = styled.button`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    padding: 1.6rem 1.4rem;
    height: 4rem;
    width: 15.2rem;
    background: black;
    color: white;
    opacity: 0.75;
    border: none;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: bold;
    letter-spacing: 2.14286px;
    cursor: pointer;
    position: absolute;
    left: 1.6rem;
    top: 1.6rem;
    transition: 0.3s ease;

  &:hover {
      background: rgba(255,255,255,0.25);
  }

  @media (min-width: 750px) {
      bottom: 1.6rem;
      top: auto;
  }
`;