import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";

const Search = () => {
  // API call requires user location AND input. It throws error if these are missing.
  // If we want to search for a restaurant in a different location we need a location input field in the form
  const [userLocation, setUserLocation] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  // on page load, user's favorite's list becomes accesible to reference
  const [favoritesList, setFavoritesList] = useState([]);

  // created new useState to account for clicking like button next to a restaurant
  // const [likedResults, setLikedResults] = useState([]);

  // const handleLikeClick = (searchResult) => {
  //   // setLikedResults((prevLikedResults) => [...prevLikedResults, index]);
  //   // console.log(index);
  //   postDataToFavList(searchResult, input);
  // };

  const yelpUrl = {
    proxy: "https://cors-anywhere.herokuapp.com/",
    api: "https://api.yelp.com/v3/businesses/search",
    backend: "https://jakd-backend-capstone.onrender.com/search",
    favorites:
      "https://jakd-backend-capstone.onrender.com/dashboard/list/05861ea7-9f9",
  };

  // // function checks if restaurantName is in favorites list already
  const checkIfRestaurantInFavorites = (yelpId) => {
    return favoritesList.filter((element) => element.yelpId === yelpId);
  };

  // Gets user's current location when the webpage loads (currently not being used)
  // On page load of Search, the useEffect triggers and calls getFavoritesList
  // which then makes a GET request to BE for favorites list
  useEffect(() => {
    // getUserLocation();
    getFavoritesList();
  }, []);

  // getFavorites list makes GET request to BE for favorites list
  const getFavoritesList = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const favoritesListUrl = `${yelpUrl.favorites}`;

    await fetch(favoritesListUrl, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setFavoritesList(response);
      });
  };

  const getUserLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(success);
    } catch (error) {
      console.error(
        `${error}: Please either enable or use a browser that supports geolocation`
      );
    }
  };

  // if the user's location exists, state will get updated
  const success = (position) => {
    setUserLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    getSearchResults(event);
  };

  const sanitizeInput = (input) => {
    return input.toLowerCase().trim();
  };

  const handleClickAddToFavoriteList = async (searchResult) => {
    await postDataToFavList(searchResult);
    await getFavoritesList();
  };

  const postDataToFavList = async (searchResult) => {
    console.log("Data to be sent: ", searchResult);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchResult),
    };

    try {
      const response = await fetch(yelpUrl.backend + "/save-favorite", options);
      if (response.ok) {
        console.log("Restaurant saved to favorites");
      } else {
        console.error("Failed to save restaurant to favorites");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  ////// getSearchResults makes GET request to BE to grab response from yelp API ///////
  const getSearchResults = async (event) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    // .toLowerCase makes everything lowercase, .trim removes white space before and after search term
    // these need to be in request and response in order to work properly
    const apiURL = `${yelpUrl.backend}?term=${sanitizeInput(
      event.target[0].value
    )}`;

    await fetch(apiURL, options)
      .then((response) => response.json())
      .then((response) => {
        setSearchResults(
          response.businesses
          // Don't delete commented out code below: this code grabs restaurants that ONLY include what the user searched for
          // Issue is for a restaurant chain with one location that has special characters gets filtered out
          // Example: Burbs vs Burb's. The Ballard location has an apostrophe but the other locations don't

          // response.businesses.filter((business) =>
          //   sanitizeInput(business.name).includes(
          //     sanitizeInput(event.target[0].value)
          //   )
          // )
        );
        event.target[0].value = "";
      });
  };

  return (
    <>
      <h1 className="text-center font-semibold text-5xl m-6">
        Welcome to the Search Page
      </h1>
      <h2 className="font-semibold">
        Please enter a restaurant into the search field below.
      </h2>
      <form onSubmit={(event) => handleSearchFormSubmit(event)}>
        <input
          placeholder="Enter restaurant name..."
          className="bg-blue-200 rounded-lg py-4 px-6 text-2xl focus:outline-none focus:ring focus:border-blue-300"
          type="search"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-4 px-6 rounded ml-2"
        >
          Submit
        </button>
        <input
          placeholder="Enter location..."
          className="bg-blue-200 rounded-lg py-4 px-6 text-2xl focus:outline-none focus:ring focus:border-blue-300"
          type="search"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-4 px-6 rounded ml-2"
        >
          Submit
        </button>
      </form>
      {searchResults.length > 0 &&
        searchResults.map((searchResult, index) => {
          return (
            <section className="pb-4" key={searchResult.id}>
              <h3 className="text-lg">{searchResult.name}</h3>
              <a href={"tel:" + searchResult.phone}>
                {searchResult.display_phone}
              </a>
              <p>{searchResult.categories[0].title}</p>

              <address>
                <ul>
                  <li>{searchResult.location.address1}</li>
                  {searchResult.location.address2 !== "" && (
                    <li>{searchResult.location.address2}</li>
                  )}
                  <li>
                    <span>{searchResult.location.city} </span>
                    {searchResult.location.state},{" "}
                    {searchResult.location.zip_code}
                  </li>
                </ul>
              </address>
              {checkIfRestaurantInFavorites(searchResult.id).length === 0 ? (
                <button
                  type="button"
                  onClick={() => handleClickAddToFavoriteList(searchResult)}
                >
                  ♡
                </button>
              ) : (
                <button type="button" disabled={true}>
                  ♥️
                </button>
              )}
            </section>
          );
        })}
    </>
  );
};

export default Search;
