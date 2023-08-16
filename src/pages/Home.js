import React from "react";


const Home = () => {

  const homeImageURL = "https://images.unsplash.com/photo-1569246294372-ed319c674f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
  
  const logo = "https://adas19.slack.com/files/U04M925HJSG/F05MYT6BX98/untitled_design.png";

  return (
    <div className="flex items-center justify-center h-screen">
      <img src={logo} alt="Logo" className="absolute top-4 right-4 w-16 h-16" />
      <div className="w-1/2 bg-cover bg-center h-full" 
        style={{ backgroundImage: `url(${homeImageURL})`,
        marginTop: "7rem",
      }}
    ></div>

      <div className="w-1/2 p-8 text-emerald-900 font-raleway">
        <div className="flex flex-col justify-center h-full">
        <h1 className="text-center font-semibold text-5xl m-6">
          Welcome to EateryEase!
        </h1>
        <p className="text-lg mb-4">
        Have you ever stumbled upon enticing restaurants you wanted to try, only to have their names lost in the disorganized labyrinth of your notes app? 
        We've been there too. That's why we created EateryEase – your solution to the dining chaos.</p>
        <p className="text-lg"> 
        Our website is simple and easy to use! </p>
        <ul className="list-disc list-inside mb-4 pl-6">
          <li>Look up any restaurant you’re curious to try and effortlessly add it to your favorites list</li>
          <li>Get all the essential details for a restaurant in one place. Making a reservation is easier than ever!</li>
          <li>Too many good options? We’ve got you covered! Our randomizer will handpick a restaurant from your favorites for you to try</li>
          </ul>
        <p className="text-lg"> As avid food enthusiasts, we cherish the experience of dining out with our nearest and dearest.
        EateryEase emerged from our shared passion and the determination to simplify your restaurant selection process. 
        The next time the age-old question, "Where should we go?" arises, you'll have EateryEase by your side.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
