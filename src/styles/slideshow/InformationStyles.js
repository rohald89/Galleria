import styled from "styled-components";

export const InformationStyles = styled.div`
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

        &:hover {
            color: black;
        }

        @media (min-width: 750px) {
            display: block;
            width: 45.7rem;
            margin: 0 auto;
        }

        @media (min-width: 1400px) {
            width: auto;
            margin: 0;
        }
    }
`;