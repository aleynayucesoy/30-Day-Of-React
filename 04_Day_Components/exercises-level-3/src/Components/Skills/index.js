import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JS", "SASS", "REACT", "REDUX"];
  const techList = skills.map((skill) => (
    <li
      style={{
        marginRight: "10px",
        padding: "10px 20px",
        backgroundColor: "#2ACFCF",
        borderRadius: "15px",
        color: "#FFFFFF",
      }}
    >
      {skill}
    </li>
  ));
  return (
    <div style={{ textAlign: "start", padding: "20px" }}>
      <h5 style={{ textTransform: "uppercase" }}>Skills</h5>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          padding: "0",
          margin: "0",
        }}
      >
        {techList}
      </ul>
    </div>
  );
};

export default Skills;
