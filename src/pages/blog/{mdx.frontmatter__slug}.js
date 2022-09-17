import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

const SinglePost = ({data,children}) => {
  return (
    <Layout pageTitle={data?.mdx?.frontmatter?.title}>
      <p>{data?.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
export const Head = ({data}) => <Seo title={data?.mdx?.frontmatter?.title} />;
export default SinglePost;
