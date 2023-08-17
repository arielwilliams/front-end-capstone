import React from "react";


const Home = () => {

  const homeImageURL = "https://images.unsplash.com/photo-1569246294372-ed319c674f14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80";
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 bg-cover bg-center h-full" 
        style={{ backgroundImage: `url(${homeImageURL})`,
        // marginTop: "7rem",
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

// import React from "react";
// import aboutUsData from "../data/about-us.js";

// const Home = () => {
//   return (
//     <>
//       <h1 className="text-center font-semibold text-5xl m-6">
//         Welcome to the Home Page
//       </h1>
//       <h2 className="text-center text-4xl py-4">We like food</h2>
//       <ul className="flex justify-center items-center gap-4 flex-wrap mt-4">
//         {aboutUsData.map((element) => (
//           <li
//             key={element.id}
//             className="max-w-[25%] flex flex-col justify-center items-center"
//           >
//             <div className="relative h-[150px] w-[150px]">
//               <img
//                 className="absolute object-cover w-full h-full rounded-full"
//                 src={element.image}
//                 height="150"
//                 width="150"
//               />
//             </div>
//             <div className="text-center mt-4">
//               <h4 className="text-2xl mb-2">{element.name}</h4>
//               <p className="mb-2">{element.blurb}</p>
//               <p>
//                 <a
//                   className="text-blue-600"
//                   target="_blank"
//                   href={element.github}
//                 >
//                   GitHub
//                 </a>
//                 <br />
//                 <a
//                   className="text-blue-600"
//                   target="_blank"
//                   href={element.linkedin}
//                 >
//                   LinkedIn
//                 </a>
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Home;
