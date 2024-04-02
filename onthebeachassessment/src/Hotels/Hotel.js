import React from 'react';

import HotelImage1 from '../Images/hotel-image-1.png';
import HotelImage2 from '../Images/hotel-image-2.png';
import HotelImage3 from '../Images/hotel-image-3.png';

export default function Hotel() {

    const hotelList = [
        {
            name: "Iberostar Grand Salome",
            location: "Costa Adeje, Tenerife",
            image: {HotelImage1},
            stars: 5,
            occupancy_adults: 2,
            occupancy_children: 2,
            occupancy_infants: 1,
            date: "3rd July 2019",
            duration: "7 days",
            departure: "East Midlands",
            price: 1136.50,
            overview: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
        },
        {
            name: "Aguamarina Golf Hotel",
            location: "Costa Adeje, Tenerife",
            image: {HotelImage2},
            stars: 4,
            occupancy_adults: 2,
            occupancy_children: 1,
            occupancy_infants: 0,
            date: "27th May 2019",
            duration: "7 days",
            departure: "Liverpool",
            price: 696.80,
            overview: "Put an overview here"
        },
        {
            name: "Las Piramides Resort",
            location: "Costa Adeje, Tenerife",
            image: {HotelImage3},
            stars: 3,
            occupancy_adults: 2,
            occupancy_children: 2,
            occupancy_infants: 0,
            date: "3rd July 2019",
            duration: "7 days",
            departure: "Manchester",
            price: 499.99,
            overview: "Put an overview here"
        }
    ]

  return (
    <div>Hotel</div>
  )
}
