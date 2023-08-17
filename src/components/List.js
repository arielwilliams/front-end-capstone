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
      `https://jakd-backend-capstone.onrender.com/dashboard/list/42bef239-dc7/${restaurantId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        setListData(list.filter((element) => element.yelpId != restaurantId));

        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.text();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        {" "}
        {/* Center the button */}
        <button
          className="bg-emerald-900 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          onClick={getRandomRestaurant}
        >
          Can't choose? Click here!
        </button>
        <div className="w-full flex justify-center">
          {" "}
          {/* Center the "Try here" container */}
          {randomRestaurant && (
            <div className="selected-restaurant">
              <h2>Try here:</h2>
              <RestaurantCard restaurant={randomRestaurant} isRandom={true} />
            </div>
          )}
        </div>
      </div>
      <div className="p-4 bg-white m-4 rounded ">
        <ul className="grid grid-cols-5 gap-4 p-4 justify-content: start;">
          {list &&
            list.length > 0 &&
            list.map((restaurant) => {
              return (
                <li key={restaurant.id} className="flex justify-center">
                  <div className="restaurant-card-container bg-white border rounded p-4 justify-items:center text-Ralway-thin100">
                    {" "}
                    {/* Container for each RestaurantCard */}
                    <RestaurantCard
                      restaurant={restaurant}
                      deleteRestaurant={deleteRestaurant}
                      isRandom={false}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default List;
