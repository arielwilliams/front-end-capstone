// // some details about the restaurant. multiple restaurant cards are in one list 

import React from "react";


const RestaurantCard = ({restaurant}) => {
    return (
        <div className="restaurant-card">
            <h3>{restaurant.restaurantName}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            {/* <p>Rating: {restaurant.rating}</p> */}
            <p>Phone: {restaurant.display_phone}</p>
            <p>Price Range: {restaurant.pricePoint}</p>
            <p>Address: {restaurant.display_address}</p>
            {/* <p>Categories: {restaurant.categories.join(', ')}</p> */}
            {/* <img src={restaurant.image_url} alt={restaurant.restaurantName} /> */}
        </div>
    );
};


export default RestaurantCard;



