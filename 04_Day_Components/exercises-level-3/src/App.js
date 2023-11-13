import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { Card } from "@mui/material";

function App() {
  return (
    <div
      className="App"
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
        <Main />
        <Footer />
      </Card>
    </div>
  );
}

export default App;
