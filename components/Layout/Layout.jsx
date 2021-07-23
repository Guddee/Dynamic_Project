import React from "react";
import { Footer } from "./components/Footer";
import MetaTags from "./components/MetaTags";

export default function Layout({ children }) {
  return <>
  <MetaTags/>
  {children}
  </>;
}
