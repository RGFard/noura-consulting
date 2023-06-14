import React from "react";

import Blog from "./Blog";
import Button from "../Button";

const Blogs = ({ blogs }) => {
  const wide = true;
  const caption = "See all blog articles";

  return (
    <section className="blogs">
      <div className="blogs__title">
        <h2 className="heading-2 heading-2--dark">Blogs</h2>
      </div>
      <Blog blogs={blogs} />
      <div className="blogs__footer">
        <Button wide={wide} caption={caption} />
      </div>
    </section>
  );
};

export default Blogs;