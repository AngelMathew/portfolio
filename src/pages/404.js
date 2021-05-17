import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location = "/portfolio";
  }

  return <Link to="/">Go home</Link>;
  // return (
  //   <main style={pageStyles}>
  //     <title>Not found</title>
  //     <h1 style={headingStyles}>Page not found</h1>
  //     <p style={paragraphStyles}>
  //       Sorry{" "}
  //       <span role="img" aria-label="Pensive emoji">
  //         😔
  //       </span>{" "}
  //       vygcgtcycouldn’t find what you were looking for.
  //       <br />
  //       {process.env.NODE_ENV === "development" ? (
  //         <>
  //           <br />
  //           Try creating a page in <code style={codeStyles}>src/pages/</code>.
  //           <br />
  //         </>
  //       ) : null}
  //       <br />
  //       <Link to="/">Go home</Link>.
  //     </p>
  //   </main>
  // )
}

export default NotFoundPage
