import React from "react";

const Dashboard = () => {
  const data = {
    user: {
      firstName: "Ariel",
    },
  };

  return <h1>Hello, {data.user.firstName}</h1>;
};

export default Dashboard;
