import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const About = () => {
  return (
    <Layout pageTitle={"About page"}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="About page" />;
export default About;
