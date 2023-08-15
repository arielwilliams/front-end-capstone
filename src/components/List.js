import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import PropTypes from "prop-types";

const List = ({ list }) => {

    console.log(list)

    const [restaurants, setRestaurants] = useState([]);


    const fetchRestaurants = async () => {
        try {
            const response = await fetch(`https://jakd-backend-capstone.onrender.com/dashboard/list/${list.listId}`);
            if (!response.ok) {
                throw new Error("Network response was not okay");
            }
            const data = await response.json();

            console.log("fetched restaurants:", data)

            setRestaurants(data);
            } catch (error) {
            console.error("Error fetching restaurants:", error);
            }
    };

    useEffect(() => {
        fetchRestaurants();
    }, [list]);


    const deleteRestaurant = (restaurantId) => {

        console.log("Delete button clicked for rEstaurant:", restaurantId);

        fetch(`https://jakd-backend-capstone.onrender.com/dashboard/list/${list.listId}/${restaurantId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "applicatoin/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not okay");
            }
            return response.json();
        })
        .then(() => {
            
            console.log("restaurant deleted successfully");

            fetchRestaurants();
        })
        .catch((error) => 
            console.log(error))
    
    };

    return (
        <div> 
            <h2>List Details:</h2>
            <ul> 
            <div className="restaurant-list grid grid-cols-5 gap-4 p-4 justify-content: center"></div>
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
            ))}
            </ul>
        </div>
    );

};

List.propTypes = {
    list: PropTypes.shape({
        listId: PropTypes.string.isRequired
    }).isRequired,
};

export default List;

