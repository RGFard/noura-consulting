import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Blog from "./Blog";

// const query = graphql`
// {
//   allContentfulContent(sort: {order: ASC}, filter:  {type: {eq: "blog"}}) {
//     nodes {
//       description {
//         description
//       }
//       image {
//         gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
//       }
//       title
//     }
//   }
// }
// `;

const Blogs = () => {

  // const {
  //   allContentfulContent: { nodes: blogs }
  // } = useStaticQuery(query);

  return (
    <section className="blogs">
      <div className="blogs__title">
        <h2 className="heading-2 heading-2--dark">Blogs</h2>
      </div>
      {/* <Blog blogs={blogs} /> */}

      <div className="blogs__footer">
        <button className="blog__article-button blogs__footer-button">
          See all blog articles
        </button>
      </div>
    </section>
  );
};

export default Blogs;