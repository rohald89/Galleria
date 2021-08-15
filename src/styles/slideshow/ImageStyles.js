import styled from 'styled-components';

export const ImageStyles = styled.div`
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

        .artist-mobile {
            @media (min-width: 1400px) {
                display: none;
            }

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