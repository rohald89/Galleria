import styled from 'styled-components';


export const ModalStyles = styled.div`
    opacity: ${props => props.openModal ? 1 : 0};
    transition: .1s ease-in;
    background-color: rgba(0,0,0,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: ${props => props.openModal ? 0 : '50%'};
    right: ${props => props.openModal ? 0 : '50%'};
    bottom: ${props => props.openModal ? 0 : '50%'};
    left: ${props => props.openModal ? 0 : '50%'};

    & div {
        margin: 2.4rem;
        display: flex;
        flex-direction: column;
        max-width: 91.7rem;
        max-height: 77rem;

        
        button {
            border: none;
            background: none;
            color: white;
            font-size: 1.4rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            align-self: flex-end;
            margin-bottom: 4rem;
            cursor: pointer;
            transition: .2s ease;

            &:hover {
                opacity: .25;
            }
        }
    
        img {
            object-fit: contain;
        }
    }
`;