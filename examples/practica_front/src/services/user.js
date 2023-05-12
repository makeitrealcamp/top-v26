export const registerUser = async (body) => {
  try {
    const req = await fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await req.json();
    return Promise.resolve(true);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

/** TODO: request to api. Don't forget header token */
export const authUser = (body, token) => {
  // http://localhost:4000/user/login
  console.log("[services: authUser]");

  /*EXAMPLE
   const req = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        "email": "test@email.com",
        "password": "123"
        }),
    });
   */
};
