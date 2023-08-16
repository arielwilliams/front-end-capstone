import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const List = ({ list, setListData }) => {
  const [randomRestaurant, setRandomRestaurant] = useState(null);

  const getRandomRestaurant = () => {
    const randomIndex = Math.floor(Math.random() * list.length);
    const selectedRandomRestaurant = list[randomIndex];
    setRandomRestaurant(selectedRandomRestaurant);
  };

  const deleteRestaurant = (restaurantId) => {
    fetch(
      `https://jakd-backend-capstone.onrender.com/dashboard/list/${list[0].listId}/${restaurantId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        setListData(
          list.filter((element) => element.restaurantId != restaurantId)
        );

        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.text();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>List Details:</h2>
      <button onClick={getRandomRestaurant}>Can't choose? Click here!</button>
      <ul>
        {list.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
            isRandom={false}
          />
        ))}
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

export default List;
