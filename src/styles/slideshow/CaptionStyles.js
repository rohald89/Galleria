import styled from 'styled-components';

export const CaptionStyles = styled.figcaption`
    position: absolute;
    background-color: white;
    bottom: 0;
    left: 0;
    width: 28rem;
    transform: translate(-1px, 5.4rem);
    padding: 2.4rem;

    @media (min-width: 750px) {
        bottom: auto;
        left: auto;
        right: 0;
        top: 0;
        padding: 0 6.5rem 6.7rem 6.5rem;
        transform: translate(50%, -1px);
        width: 44.5rem;
    }

    @media (min-width: 1400px) {
        transform: translate(calc(100% - 6.5rem), -1px);
    }

    h2 {
        font-size: 2.4rem;
        line-height: 2.9rem;

        @media (min-width: 750px) {
            font-size: 5.6rem;
            line-height: 6.4rem;
        }
    }

    p {
        margin-top: .8rem;
        color: #7d7d7d;
        font-size: 1.5rem;
        line-height: 1.9rem;

        @media (min-width: 750px) {
            margin-top: 2.4rem;
        }
    }  
`;