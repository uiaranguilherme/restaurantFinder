import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
 
// ...

import { SetRestaurants, SetRestaurant } from './../../redux/modules/restaurants';

export const MapContainer  = (props) => {

    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurants);
    const [ map, setMap ] = useState();
    const { google, query, placeId } = props;
    

    useEffect(() => {
        if(query){
            searchByQuery(query)
        }
    }, [query]);

    useEffect(() => {
        if(placeId){
            getRestaurantById(placeId)
        }
    }, [placeId])

    function getRestaurantById(){
        const service = new google.maps.places.PlacesService(map);
        dispatch(SetRestaurant(null));

        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
        };

        service.getDetails( request, (place, status) => {
            if( status === google.maps.places.PlacesServiceStatus.OK ){
              
                dispatch(SetRestaurant(place))
            }
        })
    }

    function searchByQuery (query) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(SetRestaurants([]));

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query
        };

        service.textSearch( request, (results, status) => {
            if( status === google.maps.places.PlacesServiceStatus.OK ){
                
                dispatch(SetRestaurants(results))
            }
        })
    }

    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map);
        dispatch(SetRestaurants([]));

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };

        service.nearbySearch( request, (results, status) => {
            if( status === google.maps.places.PlacesServiceStatus.OK ){
              
                dispatch(SetRestaurants(results))
            }
        })
    }

    function onMapReady( _, map){
        setMap(map);
        searchNearby(map, map.center);
    }

    return(
        <Map google={google} centerAroundCurrentLocation onReady={onMapReady}  onRecenter={onMapReady} {...props}>
            {
                restaurants.map((restaurant) => (
                    <Marker 
                        key={restaurant.place_id}
                        name={restaurant.name}
                        position={{
                                lat: restaurant.geometry.location.lat(),
                                lng: restaurant.geometry.location.lng(),
                                }}
                    />
                ))
            }
        </Map>
    );
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOLE_API_KEY,
    language : 'PT-BR'
})(MapContainer)