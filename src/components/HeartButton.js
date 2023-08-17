import React, { useState } from "react";

function HeartButton({ list, searchResult, setListData }) {
  // Check to see if favorite list element has the searchResult.id
  // We force with !! to be type of boolean
  const [isDisabled, setIsDisabled] = useState(
    !!list.find((element) => element.id === searchResult.id)
  );

  const saveFavoriteUrl =
    "https://jakd-backend-capstone.onrender.com/search/save-favorite";

  const handleClickAddToFavoriteList = async (searchResult) => {
    await postDataToFavList(searchResult);
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
      const response = await fetch(saveFavoriteUrl, options);
      if (response.ok) {
        setListData([...list, searchResult]);
        setIsDisabled(true);
        console.log("Restaurant saved to favorites");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <button
      onClick={() => handleClickAddToFavoriteList(searchResult)}
      type="button"
      disabled={isDisabled}
    >
      {isDisabled ? <>♥️</> : <>♡</>}
    </button>
  );
}

export default HeartButton;
