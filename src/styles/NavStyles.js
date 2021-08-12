import styled from 'styled-components';

export const NavStyles = styled.nav`
    display: flex;
    align-items: center;
    padding: 1.7rem 2.4rem;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
    }
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => (props.painting + 1) / 15 * 100}%;
        height: 1px;
        background-color: #000;
        transition: .3s ease;
    }

    .title {
        margin-right: auto;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        transition: .3s ease-in;

        &:hover {
            opacity: .6;
        }
        &:disabled {
            opacity: .4;
        }
        img {
            height: 1.6rem;
        }

        &:not(:last-of-type) {
            margin-right: 2.3rem;
        }
    }
`;