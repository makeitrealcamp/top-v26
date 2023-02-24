import React from "react";
import { useParams } from "react-router-dom";

const RAMDetails = () => {
  const { id } = useParams();

  return <div>RAMDetails: {id} </div>;
};

export default RAMDetails;
