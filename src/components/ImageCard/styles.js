import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding:  5px;
    width: 80px;
    height: 80px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo}) ;
    background-size: cover;
`;

export const Title = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #ffff;
    font-size: 16px;
`;