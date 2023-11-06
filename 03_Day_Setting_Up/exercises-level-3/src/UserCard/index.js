import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import { FaCheckCircle, FaRegClock } from "react-icons/fa";

import userImg from "./images/asabeneh.jpg";

const UserCard = () => {
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

  const userInfo = {
    name: "Asabeneh",
    surname: "Yetayeh",
  };
  const userTitle = "Senior Developer";
  const city = "Finland";

  const [results, setResults] = useState("");
  const date = new Date();
  useEffect(() => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleDateString("en-us", { month: "short" });
    const year = date.getFullYear();
    setResults(`${month} ${day}, ${year}`);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "20px",
            paddingBottom: "0",
            width: "200px",
            height: "200px",
          }}
        >
          <img
            src={userImg}
            style={{ borderRadius: "100%", width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <h4 style={{ textTransform: "uppercase", paddingRight: "10px" }}>
            {userInfo.name} {userInfo.surname}
          </h4>
          <FaCheckCircle color="#2ACFCF" />
        </div>
        <div style={{ textAlign: "start", paddingLeft: "20px" }}>
          <span>
            {userTitle}, {city}
          </span>
        </div>
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
        <div style={{ textAlign: "start", padding: "20px" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaRegClock style={{ paddingRight: "10px" }} />
            Joined on {results}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default UserCard;
