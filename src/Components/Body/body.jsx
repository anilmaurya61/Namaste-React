import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './body.css'
import Heading from '../../utils/Heading'
// import data from '../../Data/data.json'
// import Restaurant from '../../Data/restaurants.json'

const Body = () => {
    let categoryImages = ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png", "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png"];
    let [data, setData] = useState([]);
    let [Restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
        fetchRestaurant()
    }, [])
    async function fetchData() {
        try {
            let response = await fetch("http://localhost:5000/data.json");
            response = await response.json();
            setData(response)
        }
        catch (err) {
            console.log(err);
        }
    }
    async function fetchRestaurant() {
        try {
            let response = await fetch("http://localhost:5000/restaurants.json");
            response = await response.json();
            setRestaurant(response)
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="category-container">
                <Heading heading="Anil, what's on your mind?" />
                <div className="category-card-container">
                    {categoryImages.map((image, index) => (
                        <div key={index} className="category-card">
                            <img src={image} alt="categoryImage" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="restaurant-container">
                <Heading heading="Top restaurant chains in Bangalore" />
                <div className="restaurant-cards-container">
                    {data.map((hotel) => {
                        return (
                            <Card
                                key={hotel.info.id}
                                image={hotel.info.cloudinaryImageId}
                                cuisines={hotel?.info?.cuisines?.join(",") || ""}
                                name={hotel.info.name}
                                avgRating={hotel.info.avgRating}
                                deliveryTime={hotel?.info?.sla?.slaString || "10 mins"}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="restaurant-container">
                <h1>Restaurants with online food delivery in Bangalore</h1>
                <span className="search-container">
                    <input type="text" placeholder='Search here ...' />
                    <button className='btn'>Search</button>
                </span>
                <button className='btn'>Fast Delivery</button>
                <button className='btn'>Rating 4.0+</button>
                <button className='btn'>Pure Veg</button>
                <button className='btn'>Rs. 300-Rs. 600</button>
                <button className='btn'>Less than Rs. 300</button>
                <div className="food-cards-container">
                    {Restaurant.map((hotel) => {
                        return (
                            <Card
                                key={hotel.info.id}
                                image={hotel.info.cloudinaryImageId}
                                cuisines={hotel?.info?.cuisines?.join(",") || ""}
                                name={hotel.info.name}
                                avgRating={hotel.info.avgRating}
                                deliveryTime={hotel?.info?.sla?.slaString || "10 mins"}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Body
