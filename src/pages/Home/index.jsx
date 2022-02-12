import React, { useState } from 'react';
import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle, ModalTitle, ModalContent } from "./styles";
import { useSelector } from 'react-redux';
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import fake from '../../assets/restaurante-fake.png';
import { Card, RestauranteCard, Modal, Map, Loader, Skeleton } from '../../components';


const Home = () => {

  const [ inputValue, setInputValue ] = useState('');
  const [ placeId, setPlaceId ] = useState('');
  const [ query, setQuery ] = useState('')
  const [ modalOpened, setModalOpened ] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  };

  function handleKeyPress (e) {
    if (e.key === 'Enter'){
      setQuery(inputValue)
    }
  }

  function handleOpenModal(placeId){
    setPlaceId(placeId);
    setModalOpened(true)
  }

  return (
    <Wrapper>
      <Container>
          <Search>
              <Logo src={logo} alt="Logo do restaurante" srcset="Logo do restaurante" />
              <TextField
                label='Pesquisar Restaurantes'
                outlined
                //onTrailingIconSelect={() => this.setState({value: ''})}
                trailingIcon={<MaterialIcon role="button" icon="search"/>}
              >
              <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} 
              onKeyPress={handleKeyPress}
              />
              </TextField>
              { restaurants.length > 0 ? (
                <>
                   <CarouselTitle>Em sua Região</CarouselTitle>
                <Carousel {...settings}>
                  { restaurants.map(( restaurant ) => 
                    <Card
                      key={restaurant.id}
                      photo={restaurant.photos ? restaurant.photos[0].getUrl() : fake}
                      title={restaurant.name}
                    />
                  )}
                </Carousel>
                  { restaurants.map((restaurant) => <RestauranteCard onClick={() => handleOpenModal(restaurant.place_id)} key={restaurant.id} restaurant={restaurant}/>)}
                </>
              ): (
                <>
                  <Loader/>
                </>
              )}
          </Search>
      </Container>
        <Map query={query} placeId={placeId}/>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                { restaurantSelected ? (
                  <>
                    <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                    <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                    <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                    <ModalContent>{restaurantSelected?.opening_hours?.open_now ? "Aberto agora! estamos felizes" : "infelizmente estamos fechados... :C" }</ModalContent>
                  </>
                ) : (
                  <>
                    <Skeleton height="20px" width="80%" />
                  </>
                )}
      </Modal>
    </Wrapper>
  );
}

export default Home
