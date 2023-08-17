// import React from "react";
// import aboutUsData from "../data/about-us.js";

// const About = () => {

//     const aboutImage = "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// return (
// <div
//     className="bg-cover bg-center relative"
//     style={{ backgroundImage: `url(${aboutImage})` }}
//     >
//     <div className="bg-black bg-opacity-50 p-8">
//     <h1 className="text-center font-semibold text-5xl text-white mb-6">
//         About
//     </h1>
//     <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {aboutUsData.map((element) => (
//         <li key={element.id} className="border p-4 my-4 rounded shadow bg-white bg-opacity-90">
//             {element.image && (
//             <img
//                 src={element.image}
//                 alt={element.name}
//                 className="mx-auto mb-4"
//             />
//             )}
//             <h2 className="text-xl font-semibold text-emerald-900">
//             {element.name}
//             </h2>
//             <p className="text-emerald-900">{element.blurb}</p>
//             {element.github || element.linkedin ? (
//             <p>
//                 {element.github && (
//                 <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={element.github}
//                     className="text-blue-500 hover:text-blue-600 mr-2"
//                 >
//                     GitHub
//                 </a>
//                 )}
//                 {element.linkedin && (
//                 <a
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     href={element.linkedin}
//                     className="text-blue-500 hover:text-blue-600"
//                 >
//                     LinkedIn
//                 </a>
//                 )}
//             </p>
//             ) : null}
//         </li>
//         ))}
//     </ul>
//     </div>
// </div>
// );
// };

// export default About;

import React from "react";
import aboutUsData from "../data/about-us.js";

const About = () => {
const aboutImage = "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";

return (
<div
    className="bg-cover bg-center relative"
    style={{ backgroundImage: `url(${aboutImage})` }}
>
    <div className="bg-black bg-opacity-50 p-8">
    <h1 className="text-center font-semibold text-5xl text-white mb-6">
        About
    </h1>
    <div className="grid grid-cols-1 gap-4">
        {aboutUsData.map((element) => (
        <div key={element.id} className="border p-4 rounded shadow bg-white bg-opacity-90">
            {element.image && (
            <img
                src={element.image}
                alt={element.name}
                className="mx-auto mb-4"
            />
            )}
            <h2 className="text-xl font-semibold text-emerald-900">
            {element.name}
            </h2>
            <p className="text-emerald-900">{element.blurb}</p>
            {element.github || element.linkedin ? (
            <p>
                {element.github && (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.github}
                    className="text-blue-500 hover:text-blue-600 mr-2"
                >
                    GitHub
                </a>
                )}
                {element.linkedin && (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={element.linkedin}
                    className="text-blue-500 hover:text-blue-600"
                >
                    LinkedIn
                </a>
                )}
            </p>
            ) : null}
        </div>
        ))}
    </div>
    </div>
</div>
);
};

export default About;
