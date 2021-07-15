const postApi = async (body) => {
 await fetch("https://api.homesfy.in/api/leads/create", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((result) => {
    result.json().then((resp) => {
    });
  });
};

export {postApi };
