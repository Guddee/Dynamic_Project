import { API_URL, LEAD_CREATE } from "./serverKey";

const postApi = async (body) => {
 await fetch(API_URL+LEAD_CREATE, {
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
