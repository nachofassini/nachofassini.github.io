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
import { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";

const initialDate = Date.parse("oct 21, 2021 14:25:00");
const returnDate = Date.parse("nov 12, 2021 09:30:00");
const travelDuration = returnDate - initialDate;

function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [completed, setCompleted] = useState(0);

  const updateCompleted = useCallback(() => {
    const now = new Date();
    const left = returnDate - now;
    setCompleted(100 - (left * 100) / travelDuration);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateCompleted, 1000);
    return () => clearInterval(interval);
  }, [updateCompleted]);

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
              px: 2,
            }}
          >
            <FavoriteBorder sx={{ fontSize: 20 }} />
            <SentimentDissatisfied sx={{ fontSize: 20 }} />
            <ProgressBar
              animated
              now={completed}
              label={`${completed.toFixed(4)}%`}
              style={{
                width: "100%",
                margin: "0 20px",
                fontWeight: 600,
                backgroundColor: "transparent",
                border: "1px solid gray",
              }}
              variant="info"
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
