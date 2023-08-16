import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import PropTypes from "prop-types";

const List = ({ list }) => {

    const [restaurants, setRestaurants] = useState([]);

    const [randomRestaurant, setRandomRestaurant] = useState(null);

    const getRandomRestaurant = () => {
        const randomIndex = Math.floor(Math.random() * restaurants.length);
        const selectedRandomRestaurant = restaurants[randomIndex];
        setRandomRestaurant(selectedRandomRestaurant);
    };


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

    useEffect(() => {
        fetchRestaurants();
    }, [list]);


    const deleteRestaurant = (restaurantId) => {

        fetch(`https://jakd-backend-capstone.onrender.com/dashboard/list/${list.listId}/${restaurantId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not okay");
            }

            fetchRestaurants();
            return response.text();
        })
        .catch((error) => 
            console.log(error))
    
    };

    return (
        <div> 
            <h2>List Details:</h2>
            <button onClick={getRandomRestaurant}>Can't choose? Click here!</button>
            <ul> 
            <div className="restaurant-list grid grid-cols-5 gap-4 p-4 justify-content: center;">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}
                    isRandom={false}/>
            ))}
            </div>
            </ul>
            {randomRestaurant && (
                <div className="selected-restaurant">
                    <h2>Try here:</h2>
                    <RestaurantCard restaurant={randomRestaurant} isRandom={true} />
                </div>
            )}
        </div>
    );

};

List.propTypes = {
    list: PropTypes.shape({
        listId: PropTypes.string.isRequired
    }).isRequired,
};

export default List;

