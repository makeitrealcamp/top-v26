import React, { useState, useEffect } from "react";

// Return data of anything function
const useData = (initialState, fn) => {
  const [data, setData] = useState(initialState);

  const getData = async () => {
    const data = await fn();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data };
};

export default useData;
