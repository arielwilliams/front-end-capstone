// some details about the restaurant. multiple restaurant cards are in one list 

import React from "react";
import PropTypes from "prop-types";


const RestaurantCard = ({restaurant, deleteRestaurant, isRandom}) => {

    const onDeleteClick = () => {
        deleteRestaurant(restaurant.restaurantId);
    }


    return (
        <div className="restaurant-card">
            <h3>{restaurant.restaurantName}</h3>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Phone: {restaurant.phoneNumber}</p>
            <p>Price Range: {restaurant.pricePoint}</p>
            <p>Address: {restaurant.address}</p>
            {isRandom ? null: <button onClick={onDeleteClick}>Delete Restaurant</button>}
        </div>
    );
};

RestaurantCard.propTypes = {
    restaurant: PropTypes.shape({
        restaurantName: PropTypes.string.isRequired,
        cuisine: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        pricePoint: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    }).isRequired,
    deleteRestaurant: PropTypes.func.isRequired
};


export default RestaurantCard;
