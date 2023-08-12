import React from "react";
import { Route, Routes } from "react-router-dom";
import AllLists from "../components/AllLists";
import List from "../components/List";

const Dashboard = (props) => {
  if (Object.keys(props.user).length > 0) {
    return (
      <div>
        <h1 className="text-center font-semibold text-5xl m-6">
          {" "}
          Welcome to your Dashboard!
        </h1>
        <h2 className="text-center font-light">
          On your Dashboard you have access to create new lists and manage your
          existing lists. You can get started by heading to the Search page to
          add restaurants to your favorites list!
        </h2>
        <h2 className="text-left font-bold text-2xl ml-6">
          {props.user.given_name}'s Lists
        </h2>
        <AllLists lists={props.lists} />
      </div>
    );
  }
};

export default Dashboard;
