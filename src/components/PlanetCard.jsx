import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const PlanetCard = ({ data, imgSrc }) => {

  return (
    <Card>
      <CardMedia 
        component="img"
        height="400"
        image={imgSrc}
        alt={data.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">{data.name}</Typography>
          <li>Climate: {data.climate}</li>
          <li>Terrain: {data.terrain}</li>
          <li>Population: {data.population}</li>
      </CardContent>
    </Card>
  );
};

export default PlanetCard;