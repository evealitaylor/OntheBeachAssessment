import React, {useState, useReducer} from 'react';

import './Hotel.css'

import SortAlphabeticalIcon from '../Images/SortAlphabeticalIcon.svg'
import SortAlphabeticalSelectedIcon from '../Images/SortAlphabeticalSelectedIcon.svg'
import SortPriceIcon from '../Images/SortPriceIcon.svg'
import SortPriceSelectedIcon from '../Images/SortPriceSelectedIcon.svg'
import SortRatingIcon from '../Images/SortRatingIcon.svg'
import SortRatingSelectedIcon from '../Images/SortRatingSelectedIcon.svg'
import StarRatingIcon from '../Images/StarRatingIcon.svg'

export default function Hotel() {

    const {sortHotelItem, setSortHotelItem} = useState("priceSort");

    // put a use reducer here for these
    const {alphabeticalSelect, setAlphabeticalSelect} = useState(false);
    const {priceSelect, setPriceSelect} = useState(true);
    const {ratingSelect, setRatingSelect} = useState(false);

    const {overviewOpen, setOverviewOpen} = useState(false);

    const hotelList = [
        {
            name: "Iberostar Grand Salome",
            location: "Costa Adeje, Tenerife",
            image: "hotel-image-1",
            rating: 5,
            occupancy_adults: 2,
            occupancy_children: 2,
            occupancy_infants: 1,
            date: "3rd July 2019",
            duration: "7 days",
            departure: "East Midlands",
            price: "1,136.50",
            overview: "Located on the coast of Tenerife, between Playa del Duque and Playa de Fanabe, this hotel offers gourmet dining, exclusive lavish spas, magnificent suites with spectacular views and a personal butler or concierge service to meet all of your needs."
        },
        {
            name: "Aguamarina Golf Hotel",
            location: "Costa Adeje, Tenerife",
            image: "hotel-image-2",
            rating: 4,
            occupancy_adults: 2,
            occupancy_children: 1,
            occupancy_infants: 0,
            date: "27th May 2019",
            duration: "7 days",
            departure: "Liverpool",
            price: "696.80",
            overview: "The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
        },
        {
            name: "Las Piramides Resort",
            location: "Costa Adeje, Tenerife",
            image: "hotel-image-3",
            rating: 3,
            occupancy_adults: 2,
            occupancy_children: 2,
            occupancy_infants: 0,
            date: "3rd July 2019",
            duration: "7 days",
            departure: "Manchester",
            price: "499.99",
            overview: "What do you get when you combine comfortable rooms, located in the heart of the action and all for a budget-friendly price? A very, very good holiday. That's what."
        }
    ]

    const sortHotels = (event) => {
        if (sortHotelItem == "alphabeticalSort") {
        
        setAlphabeticalSelect(true)
        setPriceSelect(false)
        setRatingSelect(false)

        hotelList.sort(function(a, b){return a.name - b.name})

        } else if (sortHotelItem == "priceSort") {

        setPriceSelect(true)
        setAlphabeticalSelect(false)
        setRatingSelect(false)

        hotelList.sort(function(a, b){return a.price - b.price})

        } else if (sortHotelItem == "ratingSort") {

        setRatingSelect(true)
        setAlphabeticalSelect(false)
        setPriceSelect(false)

        hotelList.sort(function(a, b){return a.rating - b.rating})
        
        }
    }

  return (
    <div className='content-container'>
        <div>
            <div 
                className={alphabeticalSelect ? "sort-button-selected" : "sort-button"}
                onClick={(event)=> {
                    setSortHotelItem("alphabeticalSort")
                    sortHotels(event)
                }}>
                <p>sort <b>alphabetically</b></p>
                <img src={alphabeticalSelect ? SortAlphabeticalSelectedIcon : SortAlphabeticalIcon} alt="Sort Alphabetical Icon"></img>
            </div>
            <div 
                className={priceSelect ? "sort-button-selected" : "sort-button"}
                onClick={(event)=> {
                    setSortHotelItem("priceSort")
                    sortHotels(event)
                }}>
                <p>sort by <b>price</b></p>
                <img src={priceSelect ? SortPriceSelectedIcon : SortPriceIcon} alt="Sort Price Icon"></img>
            </div>
            <div 
                className={ratingSelect ? "sort-button-selected" : "sort-button"} 
                onClick={(event)=> {
                    setSortHotelItem("ratingSort")
                    sortHotels(event)
                }}>
                <p>sort by <b>star rating</b></p>
                <img src={ratingSelect ? SortRatingSelectedIcon : SortRatingIcon} alt="Sort Rating Icon"></img>
            </div>
        </div>
        <div>
                {hotelList.map((item, index) => (
                    <div key={index} className='hotel-item-container'>
                        <img className='hotel-item-image' src={require("../Images/" + item.image + ".png")} alt={item.name}></img>
                        <div className='hotel-item-content'>
                            <div className='hotel-item-name'>{item.name}</div>
                            <div className='hotel-item-location'>{item.location}</div>
                            <div className='hotel-item-rating'>
                                <img src={require("../Images/StarRatingIcon" + item.rating + ".png")}></img>
                            </div>
                            <div className='hotel-item-occupancy'><b>{item.occupancy_adults}</b> Adults, <b>{item.occupancy_children}</b> children & <b>{item.occupancy_infants}</b> infants</div>
                            <div className='hotel-item-date-duration'><b>{item.date}</b> for <b>{item.duration}</b></div>
                            <div className='hotel-item-departure'>departing from <b>{item.departure}</b></div>
                            <div className='hotel-item-price-box'>
                                <div>Book Now</div>
                                <div className='hotel-item-price'>&pound;{item.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        <div></div>
    </div>
  )
}
