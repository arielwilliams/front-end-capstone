import React from "react";
import aboutUsData from "../data/about-us.js";

const Home = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-5xl m-6">
        Welcome to the Home Page
      </h1>
      <p>We like food</p>
      <ul>
        {aboutUsData.map((element) => (
          <li key={element.id}>
            <img src={element.image} />
            <h4>{element.name}</h4>
            <p>{element.blurb}</p>
            <p>
              <a target="_blank" href={element.github}>
                GitHub
              </a>
              <br />
              <a target="_blank" href={element.linkedin}>
                LinkedIn
              </a>
            </p>
          </li>
        ))}
      </ul>
    </>
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
