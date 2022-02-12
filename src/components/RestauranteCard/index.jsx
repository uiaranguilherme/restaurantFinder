import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Container, RestauranteInfo, Title, Address, Restaurantefoto } from './styles';

import restaurante from '../../assets/restaurante-fake.png'
import { Skeleton } from '..';

export default function RestauranteCard({restaurant, onClick}) {
    const [ imageLoaded, setImageLoaded ] = useState(false);

    
  return (
      <Container onClick={onClick}>
          <RestauranteInfo>
              <Title>{restaurant.name}</Title>
              <ReactStars count={5} edit={false} isHalf value={restaurant.rating} activeColor="#e7711c"/>
              <Address>{restaurant.vicinity || restaurant.formated_address}</Address>
          </RestauranteInfo>
          <Restaurantefoto
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante} 
                onLoad={() => setImageLoaded(true)}
                alt="" srcset="" 
            />
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
      </Container>
  );
}
