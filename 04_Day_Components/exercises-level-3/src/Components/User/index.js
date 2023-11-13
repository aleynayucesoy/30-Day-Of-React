import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import userImg from "./images/asabeneh.jpg";

const User = () => {
  const userInfo = {
    name: "Asabeneh",
    surname: "Yetayeh",
  };
  const userTitle = "Senior Developer";
  const city = "Finland";
  return (
    <div>
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
    </div>
  );
};

export default User;
