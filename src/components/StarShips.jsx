import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const StarshipCard = ({ data, imgSrc }) => {

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
          <li>Model: {data.model}</li>
          <li>Passengers: {data.passengers}</li>
          <li>Cargo Capacity: {data.cargo_capacity}</li>
          <li>Starship Class: {data.starship_class}</li>
      </CardContent>
    </Card>
  );
};

export default StarshipCard;