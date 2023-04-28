import { Button, AppBar } from "@mui/material";

const Header = ({ setIndexUrl }) => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Button
        variant="contained"
        sx={{ mr: 1, width: "30%" }}
        onClick={() => setIndexUrl("people")}
      >
        CHARACTERS
      </Button>
      <Button
        variant="contained"
        sx={{ mr: 1, width: "30%" }}
        onClick={() => setIndexUrl("planets")}
      >
        PLANETS
      </Button>
      <Button
        variant="contained"
        sx={{ mr: 1, width: "30%" }}
        onClick={() => setIndexUrl("starships")}
      >
        STARSHIPS
      </Button>
    </AppBar>
  );
};

export default Header;