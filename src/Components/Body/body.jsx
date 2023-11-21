import React from 'react'
import Card from '../Card/Card'
import './body.css'
import Heading from '../../utils/Heading'
import data from '../../Data/data.json'
import Restaurant from '../../Data/restaurants.json'

const Body = () => {
    return (
        <>
            {console.log(data[0].info.cuisines.join(","))}
            <div className="category-container">
                <Heading heading="Anil, what's on your mind?" />
                <div className="category-card-container">
                    <div className="category-card">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" alt="" />
                    </div>
                    <div className="category-card">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" alt="" />
                    </div>
                    <div className="category-card">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" alt="" />
                    </div>
                    <div className="category-card">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" alt="" />
                    </div>
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
                                deliveryTime={hotel?.info?.sla?.slaString ||"10 mins"}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="restaurant-container">
                <h1>Restaurants with online food delivery in Bangalore</h1>
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
                                deliveryTime={hotel?.info?.sla?.slaString ||"10 mins"}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Body
