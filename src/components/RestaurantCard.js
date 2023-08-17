import React from "react";

const RestaurantCard = ({ restaurant, deleteRestaurant, isRandom }) => {
  const onDeleteClick = (id) => {
    deleteRestaurant(id);
  };

  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>Cuisine: {restaurant.categories && restaurant.categories[0].title}</p>
      <p>Phone: {restaurant.display_phone}</p>
      {restaurant.price && <p>Price Range: {restaurant.price}</p>}
      <address>
        Address: {restaurant.location.display_address.join(", ")}
      </address>
      {isRandom ? null : (
        <button
          className="bg-white hover:bg-blue-600 text-black font-semibold py-2 px-4 border rounded p-4  w-full border-black"
          onClick={() => onDeleteClick(restaurant.yelpId)}
        >
          Delete Restaurant
        </button>
      )}
    </div>
  );
};

export default RestaurantCard;
