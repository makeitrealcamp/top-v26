import { useEffect, useState } from "react";

const useCharacters = (fn) => {
  const [error, setError] = useState();
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState();

  const getData = async () => {
    const data = await fn();
    setData(data);

    try {
      const data = await fn();
      setError();
      setStatus("success");
      setData(data);
    } catch (error) {
      setError(error);
      setStatus("error");
    }
  };

  useEffect(() => {
    const load = async () => {
      await getData();
    };
    load();
  }, []);

  return {
    data,
    error,
    isLoading: status === "success" ? false : true,
    isError: status === "error",
    refetch: getData,
  };
};

export default useCharacters;
