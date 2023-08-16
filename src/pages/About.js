import React from "react";
import aboutUsData from "../data/about-us.js";

const About = () => {
return (
<>
    <h1 className="text-center font-semibold text-5xl m-6">
    About
    </h1>
    <p>we like food!</p>
    <ul>
    {aboutUsData.map((element) => (
        <li key={element.id}>
        <img src={element.image} />
        <h2>{element.name}</h2>
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

export default About;