import React from "react";

import Blog from "./Blog";


const blog1 = {
    title: "Charitable Giving using Blockchain Technology",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sagittis id consectetur purus ut.Non odio euismod lacinia at quis.Eu scelerisque felis imperdiet proin fermentum.Tempor orci dapibus ultrices in iaculis nunc sed augue lacus.Quis vel eros donec ac odio tempor.Quam vulputate dignissim suspendisse in est."
};
const blog2 = {
    title: "digitization and cybersecurity",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sagittis id consectetur purus ut.Non odio euismod lacinia at quis.Eu scelerisque felis imperdiet proin fermentum.Tempor orci dapibus ultrices in iaculis nunc sed augue lacus.Quis vel eros donec ac odio tempor.Quam vulputate dignissim suspendisse in est."
};
const blog3 = {
    title: "digital identity and digital credentials",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sagittis id consectetur purus ut.Non odio euismod lacinia at quis.Eu scelerisque felis imperdiet proin fermentum.Tempor orci dapibus ultrices in iaculis nunc sed augue lacus.Quis vel eros donec ac odio tempor.Quam vulputate dignissim suspendisse in est."
};

var blogs = [blog1, blog2, blog3];

const Blogs = () => {
    return (
        <section className="blogs">
            <div className="blogs__title">
                <h2 className="heading-2 heading-2--dark">Blogs</h2>
            </div>
            {/* <div className="blog">
                <div className="blog__pictures--1">
                    <StaticImage
                        src="../../assets/images/blogs/charity.jpg"
                        alt="Charitable Giving"
                        className="blog__picture--1"
                    />
                </div>

                <div className="blog__article">
                    <h3 className="heading-3 heading-3--secondry-dark">
                        {blog1.title}
                    </h3>
                    <p className="blog__article__body">
                        {blog1.body}
                    </p>
                    <div className="blog__article__footer">
                        <button className="blog__article-button">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="blog">
                <div className="blog__article">
                    <h3 className="heading-3 heading-3--secondry-dark">
                        {blog2.title}
                    </h3>
                    <p className="blog__article__body">
                        {blog2.body}
                    </p>
                    <div className="blog__article__footer">
                        <button className="blog__article-button">Learn more</button>
                    </div>
                </div>
                <div className="blog__pictures--2">
                    <StaticImage
                        src="../../assets/images/blogs/digitization-cybersecurity-fg.jpg"
                        alt="Digitization and Cybersecurity"
                        className="blog__picture--2"
                    />
                </div>
            </div> */}
            <Blog blogs={blogs} />

            <div className="blogs__footer">
                <button className="blog__article-button blogs__footer-button">
                    See all blog articles
                </button>
            </div>
        </section>
    );
};
{/* <Blog /> */ }

export default Blogs;