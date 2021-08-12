import styled from 'styled-components';

export const SlideshowStyles = styled.div`
    margin: 2.4rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 1200px) {
        flex-direction: row;
    }
`;

export const SlideshowImages = styled.div`
    figure {
        position: relative;
        background: white;

        figcaption {
            position: absolute;
            background-color: white;
            bottom: 0;
            left: 0;
            height: 10.4rem;
            width: 28rem;
            transform: translate(-1px, 50%);
            padding: 2.4rem;

            h2 {
                font-size: 2.4rem;
                line-height: 2.9rem;
            }

            p {
                margin-top: .8rem;
                color: #7d7d7d;
                font-size: 1.5rem;
                line-height: 1.9rem;
            }
        }
    }

    & img:last-child {
        transform: translateY(5rem);
        width: 6.4rem;
        height: 6.4rem;
        margin-left: 1.6rem;
    }
`;

export const SlideshowInformation = styled.div`
    position: relative;
    margin-top: 9rem;

    span {
        font-size: 10rem;
        letter-spacing: 5px;
        font-weight: bold;
        line-height: 1;
        color: #f3f3f3;
        position: absolute;
        top: 0;
        right: 0;
        transform: translateY(-70%);
        z-index: -1;
    }

    p {
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 2.8rem;
        color: #7d7d7d;
        margin-bottom: 4rem;
    }

    a {
        font-weight: bold;
        font-size: .9rem;
        line-height: 1.1rem;
        letter-spacing: 1.92857px;
        text-decoration-line: underline;
        color: #7d7d7d;
    }
`;