import { API_URL, GET_DATA_API } from "./serverKey";


const getApi = async () => {
  const res = await fetch(API_URL + GET_DATA_API)
  const json = await res.json()
  return json.result
}

const postApi = async (body) => {
 await fetch(API_URL + "leads", {
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

export { getApi,postApi };
