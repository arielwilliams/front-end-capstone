// contains multiple restaurant cards
// ex. the restaurant list would be thai foods and would contain restaurant 
// cards of different thai restaurants

import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from './RestaurantCard';

// https://jakd-backend-capstone.onrender.com/dashboard/list/${listId}


const RestaurantList = ({listId}) => {
    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch(`https://jakd-backend-capstone.onrender.com/dashboard/list/be286481-2f2`);
                if (!response.ok) {
                    throw new Error("Network response was not okay");
                }
                const data = await response.json();
                setRestaurants(data);
                } catch (error) {
                console.error("Error fetching restaurants:", error);
                }
        };

        fetchRestaurants();
    }, [listId]);

    return (
        <div className="restaurant-list">
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    );
};

export default RestaurantList;
