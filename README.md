<h2 align="center">
  🔱 React Super SEO
</h2>
<h3 align="center">
  React SEO component that handles metadata so you don't have to.<br/>Supports Google, OpenGraph, Twitter, and beyond. 🚀
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-super-seo" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-super-seo.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-super-seo/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-super-seo/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-super-seo/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://paypal.me/thejustinmahar/5"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-super-seo/)**.

## Overview

This component adds SEO (search engine optimization) metadata tags to the `head` element for you. 

It includes full support for [OpenGraph](https://ogp.me/), [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards), and [Google](https://support.google.com/webmasters/answer/79812?hl=en), as well as support for numerous popular meta tags, and any custom tags you might want to add beyond that!

### Why Super SEO?

There are no less than a hundred different React SEO components floating around the web, and most have half-baked or zero support for OpenGraph, and many don't support Twitter Cards at all. Worse, documentation for them is sparse.

The goal of this project was to create the end all, be all, super SEO component for React.

This component supports OpenGraph and Twitter Cards fully, and includes TypeScript type definitions and fully documented code (including image size recommendations from the official specs) for an enjoyable coding experience. It also falls back where possible and infers MIME types automatically.

Is it super? You decide!

### Features include:

- **🔌 Essential tags**
  - Supports essential SEO tags like `title`, `description`, and more.
- **💯 Full OpenGraph and Twitter Cards support**
  - Control how your content appears on the most popular social networks.
- **💁 Metadata fallback**
  - OpenGraph and Twitter Cards fall back on title and description automatically.
- **🕷️ Crawler configuration**
  - Configure search engine crawlers with `robots` and `googlebot`.
- **✅ Google site verification**
  - Easily add your verification meta tag for Google Search Console.
- **⚒️ Custom meta tags**
  - Need to include something else? Custom meta tags are quick and painless.
- **🖼️ Automatic MIME type inference**
  - Media MIME types are inferred automatically, meaning one less thing to configure.
- **✨ TypeScript support and rich documentation**
  - Includes full TypeScript type definitions and rich documentation, inside and out. Knowledge is power!

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped save you time, please consider buying me a coffee, which powers my development (and life). Your support is much appreciated!

<a href="https://github.com/sponsors/justinmahar"><img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Why Super SEO?](#why-super-seo)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Custom Meta Tags](#custom-meta-tags)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-super-seo
```

## Quick Start

```jsx
import { SuperSEO } from "react-super-seo";
```

```jsx
<SuperSEO
  title="Home | React Super SEO"
  description="React SEO component with OpenGraph and Twitter Cards support."
  lang="en"
  openGraph={{
    ogImage: {
      ogImage: "http://placekitten.com/1200/630",
      ogImageAlt: "Kittens",
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageType: "image/jpeg",
    },
  }}
  twitter={{
    twitterSummaryCard: {
      summaryCardImage: "http://placekitten.com/1200/630",
      summaryCardImageAlt: "Kittens",
      summaryCardSiteUsername: "justinmahar",
    },
  }}
/>
```

### Custom Meta Tags

Wrap custom meta tags with `SuperSEO`. They will be rendered directly inside the `head` element.

```jsx
<SuperSEO
  title="My Page"
  description="An awesome page that does a lot of cool stuff"
>
  <meta name="custom-meta" content="my-value" />
  <meta property="custom-meta-2" content="my-other-value" />
</SuperSEO>
```

Refer to the [SuperSEO component](https://justinmahar.github.io/react-super-seo/?path=/story/components-superseo--docs) usage for all available options.

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] --------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-super-seo/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-super-seo/stargazers): [👉⭐](https://github.com/justinmahar/react-super-seo/stargazers)

<!-- [lock:support] 🚫--------------------------------------- -->
Want to support the project? Feel free to grab me a coffee, which is my main source of fuel for development:

<a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:support] ---------------------------------------🚫 -->

## License

See [LICENSE.md](https://justinmahar.github.io/react-super-seo/?path=/docs/license--docs).