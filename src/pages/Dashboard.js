import React from "react";

const Dashboard = () => {
  const data = {
    user: {
      firstName: "Ariel",
    },
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-5xl m-6">
        {" "}
        Welcome to Dashboard
      </h1>
      <h2>Hello, {data.user.firstName}</h2>
    </div>
  );
};

export default Dashboard;
