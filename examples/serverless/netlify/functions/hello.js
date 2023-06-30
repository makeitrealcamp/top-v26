exports.handler = async (event, context) => {
  //....
  const data = { message: "hello world" };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
