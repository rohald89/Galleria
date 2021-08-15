import React from "react"
import {Helmet} from "react-helmet"

export const Seo = ({title}) => {
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content="Basic example" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin ></link>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" ></link>
      </Helmet>
    </div>
  );
}