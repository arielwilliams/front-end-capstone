import React from "react";

const Dashboard = (props) => {
  return (
    <div>
      <h1 className="text-center font-semibold text-5xl m-6">
        {" "}
      </h1>
      <h2>{props.user.given_name}'s Restaurants</h2>
    </div>
  );
};


export default Dashboard;
