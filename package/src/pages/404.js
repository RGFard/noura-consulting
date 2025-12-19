import * as React from "react";
import { Link } from "gatsby";

import "../sass/style.scss";
import Head from "../components/general/Head";

export default function ErrorPage() {
  return (
    <>
      <Head pageTitle="Error Page" />

      <main className="template1">
        <section>
          <h1 className="heading-1 heading-1--dark">404</h1>
          <h3 className="heading-3">Page not found!</h3>

          <Link
            to="/"
            className="template1--text"
          >
            Return Home
          </Link>
        </section>
      </main>
    </>
  );
}
