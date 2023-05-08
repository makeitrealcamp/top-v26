import { useEffect } from "react";
import { Typography } from "@mui/material";
import { useGlobalStore } from "../redux-toolkit/store";
import { BikeList } from "../components/BikeList";
import { Loader } from "../components/Loader";

const HomePage = () => {
  const { getBikeList, bikeSelect } = useGlobalStore();
  const { bikeList, loading } = bikeSelect;

  useEffect(() => {
    getBikeList();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Typography variant="h2" component="h1">
        Bicycles to rent
      </Typography>
      <BikeList list={bikeList} />
    </>
  );
};

export default HomePage;
