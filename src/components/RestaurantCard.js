// some details about the restaurant. multiple restaurant cards are in one list 

import React from "react";
import PropTypes from "prop-types";


const RestaurantCard = ({restaurant, deleteRestaurant}) => {

    const onDeleteClick = () => {
        console.log("Delete button clicked for Restaurant:", restaurant.restaurantId);
        deleteRestaurant(restaurant.restaurantId);
    }


    return (
        <div className="restaurant-card col-span-5 p-4">
            <div className="bg-white border rounded p-4">
            <h3>{restaurant.restaurantName}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Phone: {restaurant.phoneNumber}</p>
            <p>Price Range: {restaurant.pricePoint}</p>
            <p>Address: {restaurant.address}</p>
            <button className= "bg-white border rounded" onClick={onDeleteClick}>Delete Restaurant</button>
           
        </div>
        </div>
    );
};

RestaurantCard.propTypes = {
    restaurant: PropTypes.arrayOf(
        PropTypes.shape({
            restaurantName: PropTypes.string.isRequired,
            cuisine: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
            pricePoint: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired
        })
    ).isRequired,
    deleteRestaurant: PropTypes.func.isRequired
};


export default RestaurantCard;