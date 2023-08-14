import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

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


    // useEffect(() => {
    //     const fetchRestaurants = async () => {
    //         try {
    //             const response = await fetch(`https://jakd-backend-capstone.onrender.com/dashboard/list/${list.listId}`);
    //             if (!response.ok) {
    //                 throw new Error("Network response was not okay");
    //             }
    //             const data = await response.json();
    //             // console.log("LOOK HERE")
    //             // console.log("fetched data:", data);
    //             setRestaurants(data);
    //             } catch (error) {
    //             console.error("Error fetching restaurants:", error);
    //             }
    //     };

    //     fetchRestaurants();
    // }, [list]);

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
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
            ))}
            </ul>
        </div>
    );

};

export default List;

