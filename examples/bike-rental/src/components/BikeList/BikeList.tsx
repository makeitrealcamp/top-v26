import React, { FC } from "react";
import Box from "@mui/material/Box";
import { BikeListProps } from "../../types";
import { EnhancedBike } from "../Bike";

const BikeList: FC<BikeListProps> = ({ list }: BikeListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        p: 1,
        m: 1,
        borderRadius: 1,
      }}
    >
      {list.map((item, i) => (
        <EnhancedBike key={i} {...item} />
      ))}
    </Box>
  );
};

export default BikeList;
