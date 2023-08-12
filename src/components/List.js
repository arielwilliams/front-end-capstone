import React from "react";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const List = ({ list }) => {
    // const { listId } = useParams();
    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch(`https://jakd-backend-capstone.onrender.com/dashboard/list/${list.listId}`);
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
    }, [list]);

    return (
        <div> 
            <h2>List Details:</h2>
            <ul> 
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
            </ul>
        </div>
    );

};

export default List;

