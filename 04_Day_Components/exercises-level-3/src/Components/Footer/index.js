import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const Footer = () => {
  const [results, setResults] = useState("");
  const date = new Date();
  useEffect(() => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleDateString("en-us", { month: "short" });
    const year = date.getFullYear();
    setResults(`${month} ${day}, ${year}`);
  }, []);
  return (
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
  );
};

export default Footer;
