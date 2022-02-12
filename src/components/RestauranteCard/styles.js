import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 2rem;
    padding: 16px;
    background-color: #ffffff ;
    border-left: 5px solid transparent;

        &:hover{
            border-left-color: ${(props) => props.theme.colors.primary} ;
            background-color: ${(props) => props.theme.colors.background} ;
        }
`;

export const RestauranteInfo = styled.div`
    display: flex;
    flex-direction: column ;
    
`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weigth: bold;
    line-height: 29px;
    margin-bottom: 10px;
`;

export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Restaurantefoto = styled.img`
    display: ${(props) => props.imageLoaded ? 'block' : 'none'};
    width: 100px;
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
`;