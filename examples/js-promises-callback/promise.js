console.log("Promises...");

const isPair = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(JSON.stringify({ error: false, results: [] }));
      } else {
        reject({ error: true });
      }
    }, 2000);
  });

isPair(2)
  .then((data) => {
    console.log("resolve", data);
  })
  .catch((err) => {
    console.log("reject", err);
  });
