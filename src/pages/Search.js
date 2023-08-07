import React from "react";
import { useState } from "react";
import Button from "../components/Button";

const Search = () => {
  const [input, setInput] = useState("");

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    console.log("Hello", { event });
    console.log(process.env.REACT_APP_YELP_API_KEY);
    // fetchYelpData();
    fetchData();
  };

  // make call with fetch syntax
  // when you make api request you have to point to the service and the service
  // will ask do you have a key and then you provide the key then the service
  // approves access.
  // Then you need to take what's in the input field and ask the service to
  // search for that info

  const fetchData = (value) => {
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_YELP_API_KEY,
        "Access-Control-Allow-Origin": "https://api.yelp.com/*",
        mode: "cors",
        "Access-Control-Allow-Headers": process.env.REACT_APP_YELP_API_KEY,
      },
    };
    console.log(input);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${input}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  // const fetchYelpData = () => {
  //   fetch(YELP_API_KEY)
  //     .get((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       handleSearchFormSubmit(data);
  //     });
  // };

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
