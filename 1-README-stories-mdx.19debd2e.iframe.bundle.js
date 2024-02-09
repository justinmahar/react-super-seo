/*! For license information please see 1-README-stories-mdx.19debd2e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_super_seo=self.webpackChunkreact_super_seo||[]).push([[836],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='<h2 align="center">\n  🔱 React Super SEO\n</h2>\n<h3 align="center">\n  React SEO component that handles metadata so you don\'t have to.<br/>Supports Google, OpenGraph, Twitter, and beyond. 🚀\n</h3>\n<p align="center">\n  <a href="https://badge.fury.io/js/react-super-seo" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-super-seo.svg" alt="npm Version" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-super-seo/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-super-seo/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-super-seo/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>\n</p>\n\x3c!-- [lock:donate-badges] 🚫--------------------------------------- --\x3e\n<p align="center">\n  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n</p>\n\x3c!-- [/lock:donate-badges] ---------------------------------------🚫 --\x3e\n\n## Documentation\n\nRead the **[official documentation](https://justinmahar.github.io/react-super-seo/)**.\n\n## Overview\n\nThis component adds SEO (search engine optimization) metadata tags to the `head` element for you. \n\nIt includes full support for [OpenGraph](https://ogp.me/), [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards), and [Google](https://support.google.com/webmasters/answer/79812?hl=en), as well as support for numerous popular meta tags, and any custom tags you might want to add beyond that!\n\n### Why Super SEO?\n\nThere are no less than a hundred different React SEO components floating around the web, and most have half-baked or zero support for OpenGraph, and many don\'t support Twitter Cards at all. Worse, documentation for them is sparse.\n\nThe goal of this project was to create the end all, be all, super SEO component for React.\n\nThis component supports OpenGraph and Twitter Cards fully, and includes TypeScript type definitions and fully documented code (including image size recommendations from the official specs) for an enjoyable coding experience. It also falls back where possible and infers MIME types automatically.\n\nIs it super? You decide!\n\n### Features include:\n\n- **🔌 Essential tags**\n  - Supports essential SEO tags like `title`, `description`, and more.\n- **💯 Full OpenGraph and Twitter Cards support**\n  - Control how your content appears on the most popular social networks.\n- **💁 Metadata fallback**\n  - OpenGraph and Twitter Cards fall back on title and description automatically.\n- **🕷️ Crawler configuration**\n  - Configure search engine crawlers with `robots` and `googlebot`.\n- **✅ Google site verification**\n  - Easily add your verification meta tag for Google Search Console.\n- **⚒️ Custom meta tags**\n  - Need to include something else? Custom meta tags are quick and painless.\n- **🖼️ Automatic MIME type inference**\n  - Media MIME types are inferred automatically, meaning one less thing to configure.\n- **✨ TypeScript support and rich documentation**\n  - Includes full TypeScript type definitions and rich documentation, inside and out. Knowledge is power!\n\n\x3c!-- [lock:donate] 🚫--------------------------------------- --\x3e\n\n## Donate \n\nIf this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!\n\n<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n\n\x3c!-- [/lock:donate] ---------------------------------------🚫 --\x3e\n\n## Table of Contents \n\n- [Documentation](#documentation)\n- [Overview](#overview)\n  - [Why Super SEO?](#why-super-seo)\n  - [Features include:](#features-include)\n- [Donate](#donate)\n- [Table of Contents](#table-of-contents)\n- [Installation](#installation)\n- [Quick Start](#quick-start)\n  - [Custom Meta Tags](#custom-meta-tags)\n- [TypeScript](#typescript)\n- [Icon Attribution](#icon-attribution)\n- [Contributing](#contributing)\n- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)\n- [License](#license)\n\n## Installation\n\n```\nnpm i react-super-seo\n```\n\n## Quick Start\n\n```jsx\nimport { SuperSEO } from "react-super-seo";\n```\n\n```jsx\n<SuperSEO\n  title="Home | React Super SEO"\n  description="React SEO component with OpenGraph and Twitter Cards support."\n  lang="en"\n  openGraph={{\n    ogImage: {\n      ogImage: "http://placekitten.com/1200/630",\n      ogImageAlt: "Kittens",\n      ogImageWidth: 1200,\n      ogImageHeight: 630,\n      ogImageType: "image/jpeg",\n    },\n  }}\n  twitter={{\n    twitterSummaryCard: {\n      summaryCardImage: "http://placekitten.com/1200/630",\n      summaryCardImageAlt: "Kittens",\n      summaryCardSiteUsername: "justinmahar",\n    },\n  }}\n/>\n```\n\n### Custom Meta Tags\n\nWrap custom meta tags with `SuperSEO`. They will be rendered directly inside the `head` element.\n\n```jsx\n<SuperSEO\n  title="My Page"\n  description="An awesome page that does a lot of cool stuff"\n>\n  <meta name="custom-meta" content="my-value" />\n  <meta property="custom-meta-2" content="my-other-value" />\n</SuperSEO>\n```\n\nRefer to the [SuperSEO component](https://justinmahar.github.io/react-super-seo/?path=/story/components-superseo--page) usage for all available options.\n\n\x3c!-- [lock:typescript] 🚫--------------------------------------- --\x3e\n\n## TypeScript\n\nType definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.\n\n\x3c!-- [/lock:typescript] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:icon] 🚫--------------------------------------- --\x3e\n\n## Icon Attribution\n\nFavicon by [Twemoji](https://github.com/twitter/twemoji).\n\n\x3c!-- [/lock:icon] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:contributing] 🚫--------------------------------------- --\x3e\n\n## Contributing\n\nOpen source software is awesome and so are you. 😎\n\nFeel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.\n\nFor major changes, open an issue first to discuss what you\'d like to change.\n\n\x3c!-- [/lock:contributing] --------------------------------------🚫 --\x3e\n\n## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-super-seo/stargazers)\n\nIf you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-super-seo/stargazers): [👉⭐](https://github.com/justinmahar/react-super-seo/stargazers)\n\n## License\n\nSee [LICENSE.md](https://justinmahar.github.io/react-super-seo/?path=/story/license--page).';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Ih,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _1_README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);