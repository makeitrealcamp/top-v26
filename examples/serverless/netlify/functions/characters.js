const axios = require("axios");

exports.handler = async (event, context) => {
  const response = await axios({
    method: "GET",
    url: "https://rickandmortyapi.com/api/character",
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
};
