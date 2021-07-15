import { createClient } from "contentful";
import HomePage from "../components/Layout/components/page_component/HomePage";
import MobileDetect from "mobile-detect";
import { API_URL, GET_DATA_API } from "../components/config/serverKey";


export async function getServerSideProps(context) {
  let deviceType;
  let userAgent;

  if (context.req) {
    userAgent = context.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }

  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = "tablet";
  } else if (md.mobile()) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }

  const client = createClient({
    space: "fo2bfrw08w1u",
    accessToken: "IhKu8CAgf6PpJbjkXkllPKIPbKDAJzJL4FzYJZlWO0w",
  });
  const allRes = await client.getEntries();
  return { props: { deviceType, totalArticles: allRes.items } };
}
var projectId;
export default function Home(props) {
projectId=props.totalArticles[0].fields.projectId;
  return (
    <div>
      <HomePage article={props.totalArticles[0]} {...props} />
    </div>
  );
}

export async function mainPageApi(){
  const res = await fetch("https://api.homesfy.in/api/leads/projectdata/"+projectId)
  const json = await res.json()
  return json.result
}