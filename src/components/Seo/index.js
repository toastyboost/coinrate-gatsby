import React from 'react';
import { Helmet } from 'react-helmet';

const site = 'https://coinrate.com';

const Seo = ({ title, desc, slug }) => (
  <Helmet>
    <html lang="en" />
    <title>{title}</title>
    <meta name="description" content={desc} />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui, viewport-fit=cover"
    />

    <meta name="imagetoolbar" content="no" />
    <meta name="msthemecompatible" content="no" />
    <meta name="cleartype" content="on" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={site} />
    <meta property="og:image" content="https://coinrate.com/static/og.jpg" />
    <meta property="og:image:height" content="600" />
    <meta property="og:image:width" content="315" />

    <link rel="canonical" href={`${site}${slug}`} />
  </Helmet>
);

export { Seo };
