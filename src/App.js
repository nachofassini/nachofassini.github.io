import "./App.css";
import Countdown from "./Countdown";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/system";

import {
  SentimentDissatisfied,
  SentimentVerySatisfied,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";
import { useState } from "react";
import { Button } from "@mui/material";

const initialDate = Date.parse("oct 21, 2021 14:25:00");
const returnDate = Date.parse("nov 12, 2021 09:30:00");
const now = new Date();

const travel = returnDate - initialDate;
const left = returnDate - now;
const completed = 100 - (left * 100) / travel;

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      {!showCounter ? (
        <>
          <h2>Hola, Bonita! Amor de mi vida :)</h2>
          <h3>
            Te amo infinito!
            <Favorite sx={{ fontSize: 30, color: "red", ml: 1 }} />
          </h3>
          <Button
            onClick={() => setShowCounter(true)}
            variant="outlined"
            // sx={{ color: "#fff" }}
          >
            Es por aqui!{" "}
          </Button>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              mb: 10,
              alignItems: "center",
            }}
          >
            <FavoriteBorder sx={{ fontSize: 20 }} />
            <SentimentDissatisfied sx={{ fontSize: 20 }} />
            <ProgressBar
              animated
              now={completed}
              style={{ width: "100%", margin: "0 30px" }}
            />
            <SentimentVerySatisfied sx={{ fontSize: 20 }} />
            <Favorite sx={{ fontSize: 20, color: "red" }} />
          </Box>
          <h2>Nos vemos en</h2>
          <Countdown />
        </>
      )}
    </div>
  );
}

export default App;
