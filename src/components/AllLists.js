import React from "react";
import { useState } from "react";
import List from "./List";

const AllLists = ({ list, setListData }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSetIsVisible = (boolean) => {
    setIsVisible(boolean);
  };

  return (
    <div>
      <h4>
        <button onClick={() => handleSetIsVisible(!isVisible)}>
          Favorites
        </button>
      </h4>

      {isVisible && <List list={list} setListData={setListData} />}
    </div>
  );
};

export default AllLists;
