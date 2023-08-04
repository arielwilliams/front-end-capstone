import React from "react";
import Button from "../components/Button";

// notes: we will need an input field wrapped in form field and an event listener for on form submit
// when user clicks the submit button then hit the yelp API once for those suggestions
// if user wants to add a restaurant to their list, it would immediately get added to their favorites list.
// THEN, that restaurant will get saved to the BE database.

// UNLESS WE WANT SEARCH SUGGESTIONS (that would be on key down... which would probs be more work)

const Search = () => {
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");
  };

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
          className="bg-blue-200 rounded-lg py-4 px-6 text-2xl focus:outline-none focus:ring focus:border-blue-300"
          type="search"
          required
        />
        <button className="bg-blue-500 text-white font-bold py-4 px-6 rounded ml-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default Search;
