// // some details about the restaurant. multiple restaurant cards are in one list 

import React from "react";


const RestaurantCard = ({restaurant, deleteRestaurant}) => {

    const onDeleteClick = () => {
        console.log("Delete button clicked for Restaurant:", restaurant.restaurantId);
        deleteRestaurant(restaurant.restaurantId);
    }


    return (
        <div className="restaurant-card">
            <h3>{restaurant.restaurantName}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Phone: {restaurant.phoneNumber}</p>
            <p>Price Range: {restaurant.pricePoint}</p>
            <p>Address: {restaurant.address}</p>
            <button onClick={onDeleteClick}>Delete Restaurant</button>
            {/* <button onClick= {() => deleteRestaurant(restaurant.id)}> Delete Restaurant</button> */}
        </div>
    );
};


export default RestaurantCard;
