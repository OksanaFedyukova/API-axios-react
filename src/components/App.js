import React, { useState, useEffect } from "react";
import { swService } from "../services/sw-service";
import Header from "./Header";
import PersonCard from "./PersonCard";
import PlanetCard from "./PlanetCard";
import StarshipCard from "./StarShips";
import { CssBaseline, Container, Button, Card, Box } from "@mui/material";

const App = () => {
  const [id, setId] = useState(1);
  const [indexUrl, setIndexUrl] = useState("people");
  const [data, setData] = useState([]);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    async function fetchData() {
      const newData = await swService.getData(indexUrl, id);
      setData(newData);
    }
    fetchData();
  }, [id, indexUrl]);

  useEffect(() => {
    async function getPath() {
      const path = await swService.getImageUrl(indexUrl, id);
      return path;
    }
    getPath().then((res) => setImgSrc(res));
  }, [id, indexUrl]);

  useEffect(() => {
    setId(1);
  }, [indexUrl]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header setIndexUrl={setIndexUrl} />
      <Container maxWidth="sm">
        <Box
          sx={{
            width: 470,
            height: 50,
            backgroundColor: "secondary",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            disabled={id === 1}
            onClick={() => setId((prev) => +prev - 1)}
            sx={{ mr: 1, width: "33.33%" }}
          >
            PREVIOUS
          </Button>

          <Button
            variant="contained"
            onClick={() => setId((prev) => +prev + 1)}
            sx={{ width: "33.33%" }}
          >
            NEXT
          </Button>
        </Box>
        <Card sx={{ maxWidth: 470, mt: 2 }}>
          {indexUrl === "people" && <PersonCard data={data} imgSrc={imgSrc} />}
          {indexUrl === "planets" && <PlanetCard data={data} imgSrc={imgSrc} />}
          {indexUrl === "starships" && (
            <StarshipCard data={data} imgSrc={imgSrc} />
          )}
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default App;