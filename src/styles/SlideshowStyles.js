import styled from 'styled-components';

export const SlideshowStyles = styled.div`
    margin: 2.4rem;
    display: flex;
    flex-direction: column;

    @media (min-width: 750px) {
        margin: 4rem;
    }
    @media (min-width: 1400px) {
        margin: 10rem auto;
        justify-content: center;
        flex-direction: row;
    }
`;

export const SlideshowImages = styled.div`
    

    @media (min-width: 750px) {
        width: 68.8rem;
        margin: 0 auto;
    }
    @media (min-width: 1400px) {
        width: 85.5rem;
        margin: 0;
    }

    figure {
        position: relative;
        background: white;

        @media (min-width: 750px) {
            width: 47.5rem;
        }

        & picture img {
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

            .artist-mobile {
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
                @media (min-width: 1400px) {
                    display: none;
                }
            }

            
        }
        .artist-desktop {
            display: none;

            @media (min-width: 1400px) {
                display: block;
                position: absolute;
                bottom: 0;
                right: 0;
                height: 12.8rem;
                width: 12.8rem;
                transform: translate(calc(100% + 3rem), 50%);
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
    @media (min-width: 1400px) {
        width: 47.5rem;    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    span {
        font-size: 10rem;
        letter-spacing: 7px;
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
        @media (min-width: 1400px) {
            left: 4.6rem;
            transform: translateY(-70%);
        }
    }
    
    p {
        font-weight: bold;
        font-size: 1.4rem;
        line-height: 2.8rem;
        color: #7d7d7d;
        margin: 0 auto 4rem;

        @media (min-width: 750px) {
            width: 45.7rem;
        }
        @media (min-width: 1400px) {
            width: 35rem;
            margin: 0;
            margin-bottom: 8rem;
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
            display: block;
            width: 35rem;
            margin: 0;
        }
    }
`;