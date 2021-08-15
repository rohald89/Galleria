import styled from 'styled-components';


export const ModalStyles = styled.div`
    /* opacity: ${props => props.openModal ? 1 : 0}; */
    /* pointer-events: ${props => props.openModal ? '' : 'none'}; */
    transition: .3s ease-in;
    background-color: rgba(0,0,0,0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;