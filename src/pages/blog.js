import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";

const Blog = ({data}) => {
          console.log(data);
  return (
    <Layout pageTitle={"My blog page"}>
         <ul>
      {
        data?.allFile?.nodes?.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
export const Head = () => <Seo title="My blog page" />;

export default Blog;
