import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button";

// ISSUE: logic for calling API is meant for development environment,
// not certain if it will work in production environment (deployed)

// This is our proxy server that requires you to validate you are human here: https://cors-anywhere.herokuapp.com/corsdemo
// link to the issue that as to why you have to validate you are human: https://github.com/Rob--W/cors-anywhere/issues/301

// we CAN make our our proxy server following these directions: https://github.com/Rob--W/cors-anywhere
// if we use a proxy server then the BE does not have to call the yelp API BUT
// at this point it would be less work to just have the BE call the yelp API

// This is the case bc of CORS policy. Whatever the website url will be, is not the same as yelp's api url
// this is for security purposes. Therefore, yelp's api is telling us to make a BE service to make the request.

// Yelp will NOT allow our app's url, meaning we can communicate to yelp from the BE to let yelp know it's a secured request,
// because the BE is a service, NOT a website. The issue comes from the browser, browser is not letting us make request bc of the url.
// ** The problem is not the api key, it is our url that is not api.yelp.com (OUR URL IS NOT AUTHORIZED)
// Yelp will DENY our request to authorize our url, it suggests to make api call on BE so that api key does NOT get exposed

// If we did this from BE we would have 1 api key vs 4 on FE (one per person)
// What we will send to the BE is the search term and the location of the user
// IF we end up doing this, we would need a condition in the fetchData func that would determine whether to make
// a production or development request.

const Search = () => {
  const [input, setInput] = useState("");
  // API call requires user location AND input. It throws error if these are missing.
  // If we want to search for a restaurant in a different location we need a location input field in the form
  const [userLocation, setUserLocation] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const yelpUrl = {
    proxy: "https://cors-anywhere.herokuapp.com/",
    api: "https://api.yelp.com/v3/businesses/search",
    backend: "https://jakd-backend-capstone.onrender.com/search",
  };

  // gets user's current location when the webpage loads
  useEffect(() => {
    getUserLocation();
  }, []);

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
    fetchData();
  };

  const sanitizeInput = (input) => {
    return input.toLowerCase().trim();
  };

  ////// fetchData makes GET request to BE to grab response from yelp API ///////
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    // .toLowerCase makes everything lowercase, .trim removes white space before and after search term
    // these need to be in request and response in order to work properly
    const apiURL = `${yelpUrl.backend}?term=${sanitizeInput(input)}`;

    await fetch(apiURL, options)
      .then((response) => response.json())
      .then((response) => {
        setSearchResults(
          response.businesses.filter((business) =>
            sanitizeInput(business.name).includes(sanitizeInput(input))
          )
        );
      });
  };

  ////////////// FE calls yelp API (previous fetchData func) ////////////
  // const fetchData = async () => {
  //   const options = {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
  //     },
  //   };

  //   const apiURL = `${yelpUrl.proxy}${yelpUrl.api}?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&term=${input}`;

  //   await fetch(apiURL, options)
  //     .then((response) => response.json())
  //     .then((response) => setSearchResult(response));
  // };
  /////////////////////////////////////////////////////////////////////////
  return (
    <>
      <h1 className="text-center font-semibold text-5xl m-6">
        Welcome to the Search Page
      </h1>
      <h2 className="font-semibold">
        Please enter any restaurant or key terms into the search field below.
      </h2>
      <form onSubmit={(event) => handleSearchFormSubmit(event)}>
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
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
        searchResults.map((searchResult) => {
          return (
            <section className="pb-4">
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
              {/* <button type="button">❤️</button> */}
            </section>
          );
        })}
    </>
  );
};

// WHAT THE JSX WAS BEFORE
//   return (
//     <>
//       <h1 className="text-center font-semibold text-5xl m-6">
//         Welcome to the Search Page
//       </h1>
//       <h2 className="font-semibold">
//         Please enter any restaurant or key terms into the search field below.
//       </h2>
//       <form onSubmit={(event) => handleSearchFormSubmit(event)}>
//         <input
//           className="bg-blue-200 rounded-lg py-4 px-6 text-2xl focus:outline-none focus:ring focus:border-blue-300"
//           type="search"
//           required
//         />
//         <button className="bg-blue-500 text-white font-bold py-4 px-6 rounded ml-2">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

export default Search;
