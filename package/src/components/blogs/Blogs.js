import React from "react";

import Blog from "./Blog";

const Blogs = ({ blogs }) => {

  return (
    <section className="blogs">
      <div className="blogs__title">
        <h2 className="heading-2 heading-2--dark">Blogs</h2>
      </div>
      <Blog blogs={blogs} />

      <div className="blogs__footer">
        <button className="blog__article-button blogs__footer-button">
          See all blog articles
        </button>
      </div>
    </section>
  );
};

export default Blogs;