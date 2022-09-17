import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

const Blog = ({data}) => {
          console.log(data);
  return (
    <Layout pageTitle={"My blog page"}>
         {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`
export const Head = () => <Seo title="My blog page" />;

export default Blog;
