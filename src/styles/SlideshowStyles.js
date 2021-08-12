import styled from 'styled-components';

export const SlideshowStyles = styled.div`
    margin: 2.4rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 750px) {
        margin: 4rem;
    }
    @media (min-width: 1200px) {
        
        flex-direction: row;
    }
`;

export const SlideshowImages = styled.div`
    figure {
        position: relative;
        background: white;

        @media (min-width: 750px) {
            max-width: 80rem;
            margin: 0 auto;
        }
        img {
            @media (min-width: 750px) {
                height: 56rem;
            }
        }
        figcaption {
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
                padding: 0;
                padding: 0 6.5rem 6.7rem 6.5rem;
                transform: translateY(-1px);
                width: 44.5rem;
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

            .wrapper {
                & .artist-image {
                    position: absolute;
                    bottom: 0;
                    transform: translateY(100%);
                    width: 6.4rem;
                    height: 6.4rem;

                    @media (min-width: 750px) {
                        width: 12.8rem;
                        height: 12.8rem;
                        right: 6rem;
                    }
                }
            }
        }
    }
`;

export const SlideshowInformation = styled.div`
    position: relative;
    margin-top: 15.2rem;

    @media (min-width: 750px) {
        margin-top: 13rem;
    }
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

        @media (min-width: 750px) {
            font-size: 20rem;
            right: auto;
            left: 0;
            transform: translateY(-50%);
        }
    }
    
    p {
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 2.8rem;
        color: #7d7d7d;
        margin-bottom: 4rem;

        @media (min-width: 750px) {
            padding: 0 11.5rem;
        }
    }

    a {
        text-decoration: none;
        color: #7d7d7d;
        text-transform: uppercase;
        text-decoration-line: underline;
        font-size: .9rem;
        line-height: 1.1rem;
        letter-spacing: 1.92857px;

        @media (min-width: 750px) {
            margin-left: 11.5rem;
        }
    }
<<<<<<< HEAD

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
=======
>>>>>>> 64578d0cef3c1877fdb7f181f734ca9a1330e4ce
`;