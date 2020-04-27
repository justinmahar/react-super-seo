<h2 align="center">
  <a href="https://github.com/devboldly/react-super-seo">React Super SEO</a>
</h2>
<h3 align="center">
  React SEO component that handles metadata so you don't have to.<br/>Supports Google, OpenGraph, Twitter, and beyond. 🚀
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-super-seo">
    <img src="https://badge.fury.io/js/react-super-seo.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/devboldly/react-super-seo/actions?query=workflow%3ATests">
    <img src="https://github.com/devboldly/react-super-seo/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/devboldly/react-super-seo/actions?query=workflow%3ADeploy">
    <img src="https://github.com/devboldly/react-super-seo/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://devboldly.github.io/react-super-seo/)**.

👁️ **[Live Demo](https://devboldly.github.io/react-super-seo/SuperSEO#usage)**

## Overview

This component adds SEO (search engine optimization) metadata tags to the `head` element for you. It includes full support for [OpenGraph](https://ogp.me/), [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards), and [Google](https://support.google.com/webmasters/answer/79812?hl=en), as well as support for numerous popular meta tags, and any custom tags you might want to add beyond that!

👁️ **[Live Demo](https://devboldly.github.io/react-super-seo/SuperSEO#usage)**

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

## Installation

```
npm i react-super-seo
```

## Quick Start

```jsx
import { SuperSEO } from 'react-super-seo';
```

```jsx
<SuperSEO
  title="Home | React Super SEO"
  description="React SEO component with OpenGraph and Twitter Cards support."
  lang="en"
  openGraph={{
    ogImage: {
      ogImage: 'http://placekitten.com/1200/630',
      ogImageAlt: 'Kittens',
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageType: 'image/jpeg',
    },
  }}
  twitter={{
    twitterSummaryCard: {
      summaryCardImage: 'http://placekitten.com/1200/630',
      summaryCardImageAlt: 'Kittens',
      summaryCardSiteUsername: 'devboldly',
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


Refer to the [SuperSEO component](https://devboldly.github.io/react-super-seo/SuperSEO) usage for all available options.

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See the [library template](https://tinyurl.com/ya3k258d) for npm script documentation.

## ⭐ Found It Helpful? [Star It!](https://github.com/devboldly/react-super-seo/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/devboldly/react-super-seo/stargazers): [👉⭐](https://github.com/devboldly/react-super-seo/stargazers)

## MIT License

```
Copyright © 2020 DevBoldly https://devboldly.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```