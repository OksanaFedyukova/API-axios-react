import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const PersonCard = ({ data, imgSrc }) => {

  return (
    <Card>
      <CardMedia 
        component="img"
        height="400"
        image={imgSrc}
        alt={data.name}
        >
         </CardMedia>
      <CardContent>
      <Typography gutterBottom variant="h3" component="div">{data.name}</Typography>
          <li>Gender: {data.gender}</li>
          <li>Birth Year: {data.birth_year}</li>
          <li>Eye Color: {data.eye_color}</li>
        </CardContent>
    </Card>
  );
};

export default PersonCard;