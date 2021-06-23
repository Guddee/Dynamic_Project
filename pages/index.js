import { createClient } from "contentful";
import HomePage from "../components/Layout/components/page_component/HomePage";

import MobileDetect from "mobile-detect";

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
    space:"pha7sszc3ldj",
     accessToken:"-SIMfYNijVldSsS6v1hMVIRjlcICaDlLLwJVu5WMfzo",
   })
  const res = await client.getEntries({ content_type: "lodhaGoup" });

  return { props: { deviceType, articles: res.items } };
}

export default function Home(props) {
  return (
    <div>
      {props.articles.map((article, index) => (
        <HomePage key={index} article={article} {...props} />
      ))}
    </div>
  );
}
