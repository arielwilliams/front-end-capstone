import React, { useEffect } from "react";
import { useState } from "react";
import HeartButton from "../components/HeartButton";

const Search = ({ list, setListData }) => {
  // don't delete: can be used for further development features
  // const [userLocation, setUserLocation] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  // What I've done, git commit:
  // Declared props in Search.js. In App.js, passed in list and setListData as props into the Search component.

  // check if the object from yelp already exists inside of the favorites list
  // if it's in the favorites list, the heart should be filled in on search
  // if it's not in the favorites list, the heart should by empty on search

  const yelpUrl = {
    proxy: "https://cors-anywhere.herokuapp.com/",
    api: "https://api.yelp.com/v3/businesses/search",
    backend: "https://jakd-backend-capstone.onrender.com/search",
    favorites:
      "https://jakd-backend-capstone.onrender.com/dashboard/list/05861ea7-9f9",
  };

  // function checks if restaurantName is in favorites list already
  const checkIfRestaurantInFavorites = (yelpId) => {
    return searchResults.find(
      (element) => element.id === list.find((item) => item.id)
    );
  };

  // // don't delete: gets user's current location when the webpage loads (can be used for further development features)
  // // On page load of Search, the useEffect triggers and calls getFavoritesList which then makes a GET request to BE for favorites list
  // useEffect(() => {
  // getUserLocation();
  // }, []);

  // // getFavorites list makes GET request to BE for favorites list
  // const getFavoritesList = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //     },
  //   };

  //   const favoritesListUrl = `${yelpUrl.favorites}`;

  //   await fetch(favoritesListUrl, options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setFavoritesList(response);
  //     });
  // };

  // don't delete: can be used for further development features
  // const getUserLocation = () => {
  //   try {
  //     navigator.geolocation.getCurrentPosition(success);
  //   } catch (error) {
  //     console.error(
  //       `${error}: Please either enable or use a browser that supports geolocation`
  //     );
  //   }
  // };

  // don't delete: can be used for further development features
  // if the user's location exists, state will get updated
  // const success = (position) => {
  //   setUserLocation({
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude,
  //   });
  // };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    getSearchResults(event);
  };

  const sanitizeInput = (input) => {
    return input.toLowerCase().trim();
  };

  // getSearchResults makes GET request to BE to grab response from yelp API
  const getSearchResults = async (event) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    // .toLowerCase makes everything lowercase, .trim removes white space before and after search term
    // these need to be in request and response in order to work properly
    // target is the html element where the onSubmit event occurred
    const apiURL = `${yelpUrl.backend}?term=${sanitizeInput(
      event.target[0].value
    )}&location=${sanitizeInput(event.target[1].value)}`;

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
        // don't delete: these line of code empties both search bars onSubmit, comment them out to see what the user typed into both fields
        event.target[0].value = "";
        event.target[1].value = "";
      });
  };

  return (
    <section className="relative bg-[url(~/public/sushi-background.jpeg)] bg-cover min-h-[100vh] py-4 after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-stone-200 after:opacity-[.75]">
      <section className="z-10 relative">
        <h1 className="text-center font-semibold text-5xl m-6">
          Welcome to the Search Page
        </h1>
        <h2 className="font-semibold mt-7 mb-4 text-center mx-auto max-w-[475px]">
          Please enter a restaurant name and location into the search fields
          below.
        </h2>
        <form onSubmit={(event) => handleSearchFormSubmit(event)} className="">
          <div className="mt-4 rounded border bg-white p-6 flex flex-col max-w-[475px] justify-center flex-center mx-auto">
            <input
              placeholder="Enter restaurant name"
              className="mb-4 flex-grow bg-white-200 border rounded-lg py-4 px-4 text-2xl focus:outline-none focus:ring focus:border-blue-300"
              type="search"
              required
            />
            <input
              placeholder="Enter location"
              className="mb-4 ml-0 flex-grow bg-white-200 border rounded-lg py-4 px-4 text-2xl focus:outline-none focus:ring focus:border-blue-300"
              type="search"
              required
            />
            <button
              type="submit"
              className="bg-emerald-900	bg-blue-500 text-white font-bold py-4 px-6 rounded ml-2"
            >
              Submit
            </button>
          </div>
        </form>
        <section className="mt-4 flex flex-wrap justify-center">
          {searchResults.length > 0 &&
            searchResults.map((searchResult) => {
              return (
                <section
                  className="p-4 bg-white m-4 rounded"
                  key={searchResult.id}
                >
                  <h3 className="text-xl pb-2">
                    <a className="underline" href={searchResult.url}>
                      {searchResult.name}
                    </a>
                  </h3>
                  <a
                    className="text-blue-600 pb-2"
                    href={"tel:" + searchResult.phone}
                  >
                    {searchResult.display_phone}
                  </a>
                  <p className="pb-2 italic">
                    {searchResult.categories[0].title}
                  </p>

                  <address className="pb-2">
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
                  <HeartButton
                    list={list}
                    searchResult={searchResult}
                    setListData={setListData}
                  />
                </section>
              );
            })}
        </section>
      </section>
    </section>
  );
};

export default Search;
