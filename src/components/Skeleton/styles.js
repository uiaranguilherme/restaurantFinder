import styled, { keyframes } from 'styled-components';

const BackgraundAnimate = keyframes`
    0%{
        margin-left: -20%;
    }
    100%{
        margin-left: 120%;
    }
`;

export const Container = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #ffff;
    border-radius: 5px;
    margin: 10px;
`;

export const BackGraund = styled.div`
    width: 120%;
    height: 100%;
    background: rgb(255,243,243);
    background: linear-gradient(90deg, rgba(255,243,243,0.014443277310924318) 0%, rgba(203,203,203,1) 39%, rgba(222,222,222,0) 100%);
    animation: ${BackgraundAnimate} 1000ms infinite;
`;