// --------------------------------------------------
// ----------- Import React Libraries
// --------------------------------------------------

import React, {useEffect, useState} from 'react';

// --------------------------------------------------
// ----------- Import CSS
// --------------------------------------------------

import './Hotel.css'

// --------------------------------------------------
// ----------- Import Images & Icons
// --------------------------------------------------

import SortAlphabeticalIcon from '../Images/SortAlphabeticalIcon.png'
import SortAlphabeticalSelectedIcon from '../Images/SortAlphabeticalSelectedIcon.png'
import SortPriceIcon from '../Images/SortPriceIcon.svg'
import SortPriceSelectedIcon from '../Images/SortPriceSelectedIcon.svg'
import SortRatingIcon from '../Images/SortRatingIcon.svg'
import SortRatingSelectedIcon from '../Images/SortRatingSelectedIcon.svg'
import OverviewButtonDownIcon from '../Images/OverviewButtonDownIcon.svg'
import OverviewButtonRightIcon from '../Images/OverviewButtonRightIcon.svg'

// --------------------------------------------------
// ----------- Functions
// --------------------------------------------------

export default function Hotel() {

    // Set Load state to sort price on load
    const [isLoading, setIsLoading] = useState(false);

    // Sort by A-Z, price & rating use states
    const [alphabeticalSelect, setAlphabeticalSelect] = useState(false);
    const [priceSelect, setPriceSelect] = useState(true);
    const [ratingSelect, setRatingSelect] = useState(false);

    // Array for sort functions to sort hotel list
    const [sortedHotelList, setSortedHotelList] = useState([]);

    // Toggle hotel description/overview use state
    const [overviewOpen, setOverviewOpen] = useState(false);

    // Hotels array
    const hotelList = [
        {
            id: 1,
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
            price: 1136.50,
            overview: "Located on the coast of Tenerife, between Playa del Duque and Playa de Fanabe, this hotel offers gourmet dining, exclusive lavish spas, magnificent suites with spectacular views and a personal butler or concierge service to meet all of your needs."
        },
        {
            id: 2,
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
            price: 696.80,
            overview: "The Hotel Aguamarina Golf has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea."
        },
        {
            id: 3,
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
            price: 499.99,
            overview: "What do you get when you combine comfortable rooms, located in the heart of the action and all for a budget-friendly price? A very, very good holiday. That's what."
        }
    ]

    // Function to sort by A-Z
    const sortHotelAlphabetical = () => {
        
        setAlphabeticalSelect(true)
        setPriceSelect(false)
        setRatingSelect(false)

        const sortedAlphabetical = [...hotelList].sort(function(a, b){
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })

        setSortedHotelList(sortedAlphabetical)
    }

    // Function to sort by hotel price (lowest to highest)
    const sortHotelPrice = () => {

        setPriceSelect(true)
        setAlphabeticalSelect(false)
        setRatingSelect(false)

        const sortedPrice = [...hotelList].sort(function(a, b){
            if (a.price < b.price) {
                return -1
            }
            if (a.price > b.price) {
                return 1
            }
            return 0
        })

        setSortedHotelList(sortedPrice)
    }

    // Function to sort by hotel rating (highest to lowest)
    const sortHotelRating = () => {

        setRatingSelect(true)
        setAlphabeticalSelect(false)
        setPriceSelect(false)

        const sortedRating = [...hotelList].sort(function(a, b){
            if (a.rating > b.rating) {
                return -1
            }
            if (a.rating < b.rating) {
                return 1
            }
            return 0
        })

        setSortedHotelList(sortedRating)
    }

    // Function to toggle hotel description using onClick
    const displayOverview = (index) => {
        setOverviewOpen(!overviewOpen)
    }

    // Use Effect for sorting by price on load
    useEffect(() => {
        async function loadSortedHotelList() {
            setIsLoading(true);
            try {
               sortHotelPrice();
            } catch (error) {
               console.error(error);
            } finally {
               setIsLoading(false);
            }
         }
         loadSortedHotelList();
    }, [])

// --------------------------------------------------
// ----------- HTML
// --------------------------------------------------

  return (
    <div className='content-container'>
        <div>
            <div
                className={alphabeticalSelect === true ? "sort-button-selected" : "sort-button"}
                onClick={()=> {
                    sortHotelAlphabetical()
                }}>
                    <p>sort <b>alphabetically</b></p>
                    <img src={alphabeticalSelect ? SortAlphabeticalSelectedIcon : SortAlphabeticalIcon} alt="Sort Alphabetical Icon"></img>
            </div>
            <div 
                className={priceSelect === true ? "sort-button-selected" : "sort-button"}
                onClick={()=> {
                    sortHotelPrice()
                }}>
                    <p>sort by <b>price</b></p>
                    <img src={priceSelect ? SortPriceSelectedIcon : SortPriceIcon} alt="Sort Price Icon"></img>
            </div>
            <div 
                className={ratingSelect === true ? "sort-button-selected" : "sort-button"} 
                onClick={()=> {
                    sortHotelRating()
                }}>
                    <p>sort by <b>star rating</b></p>
                    <img src={ratingSelect ? SortRatingSelectedIcon : SortRatingIcon} alt="Sort Rating Icon"></img>
            </div>
        </div>
        <div className='hotel-list'>
                {sortedHotelList.map((item, index) => (
                    <div key={index}>
                        <div className='hotel-item-container'>
                            <img className='hotel-item-image' src={require("../Images/" + item.image + ".png")} alt={item.name}></img>
                            <div className='hotel-item-content'>
                                <div className='hotel-item-name'>{item.name}</div>
                                <div className='hotel-item-location'>{item.location}</div>
                                <div className='hotel-item-rating'>
                                    <img src={require("../Images/StarRatingIcon" + item.rating + ".png")}></img>
                                </div>
                                <div className='hotel-item-occupancy'>
                                    <b>{item.occupancy_adults > 0 ? item.occupancy_adults : null}</b>{item.occupancy_adults === 1 ? " Adult" : item.occupancy_adults > 1 ? " Adults" : null}<b>{item.occupancy_children > 0 ? ", " + item.occupancy_children : null}</b>{item.occupancy_children === 1 ? " Child" : item.occupancy_children > 1 ? " Children" : null}<b>{item.occupancy_infants > 0 ? " & " + item.occupancy_infants : null}</b>{item.occupancy_infants === 1 ? " Infant" : item.occupancy_infants > 1 ? " Infants" : null}
                                </div>
                                <div className='hotel-item-date-duration'><b>{item.date}</b> for <b>{item.duration}</b></div>
                                <div className='hotel-item-departure'>departing from <b>{item.departure}</b></div>
                                <div className='hotel-item-price-box'>
                                    <div className='hotel-item-price-box-label'>Book Now</div>
                                    <div className='hotel-item-price'>&pound;{item.price}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button 
                                onClick={displayOverview}
                                className='overview-display-button'>
                                    <div>
                                        <b>{overviewOpen ? "Read less " : "Read more "}</b>
                                        about this hotel
                                    </div>
                                    <img src={overviewOpen ? OverviewButtonDownIcon : OverviewButtonRightIcon}></img> 
                                </button>
                                {overviewOpen && (
                                    <div className='hotel-item-overview'>
                                        <h4>Overview</h4>
                                        <div className='hotel-item-overview-text'> {item.overview}</div>
                                    </div>
                                )}
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}
