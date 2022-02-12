import React, { useEffect, useState } from 'react';
import { Container, Title } from './styles';
import Skeleton from '../Skeleton';

const ImageCard = ({photo, title}) => {

    const [ imageLoaded, setImageLoaded ] = useState(false)

    useEffect(() => {
        const image = new Image();
        image.src = photo;
        image.onload = () => setImageLoaded(true);
    }, [photo])

    return (
        <>
        {imageLoaded ? (
            <Container photo={photo}>
                <Title>{title}</Title>
            </Container>
        ) : (
            <>
                <Skeleton height="90px" width="90px" />
            </>
        ) }
            
        </>
    );
}

export default ImageCard