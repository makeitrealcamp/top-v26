import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { BikeItem } from "../../types";
import withRedirect from "../../HOC/withRedirect";

const Bike: FC<BikeItem> = ({
  id,
  name,
  picture,
  type,
  redirect,
}: BikeItem) => {
  const handleClick = (): void => {
    redirect(id);
  };

  return (
    <Card sx={{ minWidth: 150, m: 1 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="100" image={picture} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const EnhancedBike = withRedirect(Bike);

export default EnhancedBike;

export { Bike };
