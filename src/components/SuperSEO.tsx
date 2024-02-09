import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface SuperSEOProps {
  // === Standard Meta ===
  /** The title of the page. */
  title?: string;
  /** Specify a description. This is shown in Google results and should be 50-160 characters long. Anything beyond that length will be truncated with an ellipsis "..." by most search engines. */
  description?: string;
  /** Specify the site language as an [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), such as `en` for English. */
  lang?: string;
  // === Open Graph (Facebook) ===
  // See: https://ogp.me/
  // Use https://developers.facebook.com/tools/debug/ to validate.
  /**
   * Provide an [OpenGraphMetadata](https://justinmahar.github.io/react-super-seo/?path=/story/components-superseo--page#opengraph-prop-opengraphmetadata) object.
   *
   * [OpenGraph](https://ogp.me/) (Facebook) metadata. Will fall back to use title, description, and general "website" type if each respective OpenGraph value is not specified.
   */
  openGraph?: OpenGraphMetadata;
  // === Twitter Cards ===
  // See: https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup.html
  // Use https://cards-dev.twitter.com/validator to validate
  /**
   * Provide a [TwitterMetadata](https://justinmahar.github.io/react-super-seo/?path=/story/components-superseo--page#twitter-prop-twittermetadata) object.
   *
   * Twitter metadata. Uses the [Cards markup](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup.html) to enhance tweets. Twitter will check for the meta properties you specify here and render a nice-looking card for you.
   *
   * Specify **only one** of the following cards:
   * - `twitterSummaryCard: TwitterSummaryCardType`
   * - `twitterSummaryCardWithLargeImage: TwitterSummaryCardWithLargeImageCardType`
   * - `twitterPlayerCard: TwitterPlayerCardType`
   * - `twitterAppCard: TwitterAppCardType`
   *
   * If no Twitter card is specified, then Twitter itself will fall back on OpenGraph meta properties such as `og:type`, `og:title`, `og:description`, and `og:image`.
   *
   * For instance, if an `og:type`, `og:title`, and `og:description` exist in the markup but `twitter:card` is absent, then a `summary` card may be rendered.
   */
  twitter?: TwitterMetadata;
  /**
   * Provide a [GoogleMetadata](https://justinmahar.github.io/react-super-seo/?path=/story/components-superseo--page#google-prop-googlemetadata) object.
   *
   * Google-specific metadata. These meta tags all use meta name `google`.
   *
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en) for all `google` meta tags.
   */
  google?: GoogleMetadata;
  /**
   * This meta tag controls the behavior of search engine crawling and indexing. See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   *
   * The <meta name="robots"> tag applies to all search engines, while the <meta name="googlebot"> tag is specific to Google.
   *
   * In the case of conflicting robots (or googlebot) meta tags, the more restrictive tag applies. For example, if a page has both max-snippet:50 and nosnippet tags, the nosnippet tag will apply.
   *
   * The default values are "index, follow" and do not need to be specified. We understand the following values (when specifying multiple values, separate them with a comma):
   *
   * - index - Allow the page to be indexed.
   * - follow - Follow any links in the page as part of crawling.
   * - noindex - Prevents the page from being indexed.
   * - nofollow - Don't follow links from this page as part of crawling.
   * - nosnippet - Don't show a text snippet or video preview from being shown in the search results. For video, a static image will be shown instead, if possible. Example: <meta name="robots" content="nosnippet">
   * - max-snippet:[number] - Limit the text snippet length for this page to [number] characters; specify 0 for no snippet or -1 to allow any snippet length.
   * - max-image-preview:[size] - Limit the size of any image associated with this page. [size] can be "none", "standard", or "large".
   * - max-video-preview:[number] - Limit any video preview associated with this page to [number] seconds; specify 0 to allow only a still image or -1 to allow any preview length
   * - noarchive - Don't show a Cached link for a page in search results.
   * - unavailable_after:[date] - Lets you specify the exact time and date you want to stop crawling and indexing of this page.
   * - noimageindex - Don't show the page as the referring page for an image in Google Image search results. This has the effect of preventing all images on this page from being indexed in this page; if the image appears in another page, it might be crawled and indexed according to the permissions on that page. Note that this is not yet an internet standard; the standard way to block images is to use a robots.txt rule.
   * - none - Equivalent to noindex, nofollow.
   * - all - [Default] Equivalent to "index, follow".
   *
   * You can also specify this information in the header of your pages using the "X-Robots-Tag" HTTP header directive. This is particularly useful if you wish to limit indexing of non-HTML files like graphics or other kinds of documents.
   */
  robots?: string;
  /**
   * This meta tag controls the behavior of search engine crawling and indexing. See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   *
   * The <meta name="robots"> tag applies to all search engines, while the <meta name="googlebot"> tag is specific to Google.
   *
   * In the case of conflicting robots (or googlebot) meta tags, the more restrictive tag applies. For example, if a page has both max-snippet:50 and nosnippet tags, the nosnippet tag will apply.
   *
   * The default values are "index, follow" and do not need to be specified. We understand the following values (when specifying multiple values, separate them with a comma):
   *
   * - index - Allow the page to be indexed.
   * - follow - Follow any links in the page as part of crawling.
   * - noindex - Prevents the page from being indexed.
   * - nofollow - Don't follow links from this page as part of crawling.
   * - nosnippet - Don't show a text snippet or video preview from being shown in the search results. For video, a static image will be shown instead, if possible. Example: <meta name="robots" content="nosnippet">
   * - max-snippet:[number] - Limit the text snippet length for this page to [number] characters; specify 0 for no snippet or -1 to allow any snippet length.
   * - max-image-preview:[size] - Limit the size of any image associated with this page. [size] can be "none", "standard", or "large".
   * - max-video-preview:[number] - Limit any video preview associated with this page to [number] seconds; specify 0 to allow only a still image or -1 to allow any preview length
   * - noarchive - Don't show a Cached link for a page in search results.
   * - unavailable_after:[date] - Lets you specify the exact time and date you want to stop crawling and indexing of this page.
   * - noimageindex - Don't show the page as the referring page for an image in Google Image search results. This has the effect of preventing all images on this page from being indexed in this page; if the image appears in another page, it might be crawled and indexed according to the permissions on that page. Note that this is not yet an internet standard; the standard way to block images is to use a robots.txt rule.
   * - none - Equivalent to noindex, nofollow.
   * - all - [Default] Equivalent to "index, follow".
   *
   * You can also specify this information in the header of your pages using the "X-Robots-Tag" HTTP header directive. This is particularly useful if you wish to limit indexing of non-HTML files like graphics or other kinds of documents.
   */
  googlebot?: string;
  /**
   * You can use this tag on the top-level page of your site to verify ownership for Search Console. Please note that while the values of the "name" and "content" attributes must match exactly what is provided to you (including upper and lower case), it doesn't matter if you change the tag from XHTML to HTML or if the format of the tag matches the format of your page.
   *
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   */
  googleSiteVerification?: string;
  /**
   * Specifies the character encoding for the document, such as `text/html; charset=UTF-8`
   *
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   */
  contentType?: string;
  /**
   * Specifies the character encoding for the HTML document. See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   *
   * Common values:
   *
   * - `UTF-8` - Character encoding for Unicode
   * - `ISO-8859-1` - Character encoding for the Latin alphabet
   *
   * In theory, any character encoding can be used, but no browser understands all of them. The more widely a character encoding is used, the better the chance that a browser will understand it.
   *
   * To view all available character encodings, look at [IANA character sets](https://www.iana.org/assignments/character-sets/character-sets.xhtml).
   */
  charset?: string;
  /**
   * This tag tells the browser how to render a page on a mobile device. Presence of this tag indicates to Google that the page is mobile friendly.
   *
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   *
   * For example: `width=device-width, initial-scale=1`
   *
   * - The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
   * - The `initial-scale=1` part sets the initial zoom level when the page is first loaded by the browser.
   */
  viewport?: string;
  /**
   * Provide a rating for the site. For instance, use `adult` or [RTA rating](https://www.rtalabel.org/#) `RTA-5042-1996-1400-1577-RTA` if it contains adult content, to signal that it be filtered by SafeSearch results.
   *
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   */
  rating?: string;
  /**
   * Provide children to add custom meta tags in addition to the ones above, or for anything else you'd
   * like to add to `head`. Children are rendered directly inside head.
   */
  children?: React.ReactNode;
}

/**
 * See documentation: [SuperSEO](https://justinmahar.github.io/react-super-seo/?path=/story/components-superseo--page)
 *
 * An SEO component that adds a `title`, `description`, [OpenGraph](https://ogp.me/), and [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards) meta properties to the `head`.
 *
 * Also supports adding an [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) `lang` attribute to the `html` element.
 *
 * Uses sensible fallbacks where possible and features automatic [MIME type inference](https://justinmahar.github.io/react-super-seo/?path=/story/docs-list-of-mime-types--page) for media URLs.
 */
export function SuperSEO(props: SuperSEOProps): JSX.Element {
  const title = props.title;
  const description = props.description;
  const lang = props.lang;

  const titleElement = title ? <title>{title}</title> : undefined;
  const htmlAttributes = lang ? { lang } : undefined;
  const meta: Meta[] = [];
  if (description) {
    meta.push({
      name: 'description',
      content: description,
    });
  }
  meta.push(...createOpenGraphMetadataObjects(props.openGraph, title, description));
  meta.push(...createTwitterMetadataObjects(props.twitter, title, description));
  meta.push(...createGoogleMetadataObjects(props.google));

  // Additional meta properties
  if (props.robots) {
    meta.push({
      name: 'robots',
      content: props.robots,
    });
  }

  if (props.googlebot) {
    meta.push({
      name: 'googlebot',
      content: props.googlebot,
    });
  }

  if (props.googleSiteVerification) {
    meta.push({
      name: 'google-site-verification',
      content: props.googleSiteVerification,
    });
  }

  if (props.viewport) {
    meta.push({
      name: 'viewport',
      content: props.viewport,
    });
  }

  if (props.rating) {
    meta.push({
      name: 'rating',
      content: props.rating,
    });
  }

  return (
    <>
      <Helmet>
        {props.contentType && <meta httpEquiv="content-type" content={props.contentType} />}
        {props.charset && <meta charSet={props.charset} />}
      </Helmet>
      <Helmet htmlAttributes={htmlAttributes} meta={meta}>
        {titleElement}
      </Helmet>
      {typeof props.children !== 'undefined' && <Helmet>{props.children}</Helmet>}
    </>
  );
}

export type MetaName = {
  name: string;
  content: string;
};

export type MetaProperty = {
  property: string;
  content: string;
};

export type Meta = MetaName | MetaProperty;

// === OPEN GRAPH ===

export type OpenGraphMetadata = {
  // == REQUIRED ==
  /** (Required) `og:title` - The title of your object as it should appear within the graph, e.g., "The Rock". */
  ogTitle?: string;
  /** (Required) `og:type` - The type of your object. Supports `article`, `book`, `profile`, `website`. Specify the related properties in `ogTypeObject`. If another type is provided, use a `MetaPropertiesFunction` for the `ogTypeObject` to specify your meta properties for the type. This function should return an array of `MetaProperty` in the format `{property: string, content: string}`. */
  ogType?: string;
  /** (Required) The meta properties object for the type specified. Use {} to default to "website". */
  ogTypeObject?:
    | OpenGraphTypeArticle
    | OpenGraphTypeBook
    | OpenGraphTypeProfile
    | OpenGraphTypeWebsite
    | MetaPropertiesFunction;
  /** (Required) `og:image` - An image URL which should represent your object within the graph. Provide an array for multiple images. */
  ogImage?: OpenGraphImage | OpenGraphImage[];
  /** (Required) `og:url` - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., `"http://www.imdb.com/title/tt0117500/"`. */
  ogUrl?: string;
  // == OPTIONAL ==
  /** (Optional) `og:audio` - Audio file(s) to accompany this object. */
  ogAudio?: OpenGraphAudio | OpenGraphAudio[];
  /** (Optional) `og:description` - A one to two sentence description of your object. */
  ogDescription?: string;
  /** (Optional) `og:determiner` - The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto). If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank). */
  ogDeterminer?: 'a' | 'an' | 'the' | '' | 'auto';
  /** (Optional) `og:locale` - The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US. */
  ogLocale?: string;
  /** (Optional) `og:locale:alternate` - An array of other locales this page is available in. */
  ogLocaleAlternate?: string[];
  /** (Optional) `og:site_name` - If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb". */
  ogSiteName?: string;
  /** (Optional) `og:video` - Video file(s) that complement this object. */
  ogVideo?: OpenGraphVideo | OpenGraphVideo[];
  /** (Optional) `fb:app_id` - The Facebook App ID lets Facebook know the identify of your site, which provides additional benefits like social analytics, comments moderation and authentication capabilities to your site. */
  fbAppId?: string;
};
function createOpenGraphMetadataObjects(
  data?: OpenGraphMetadata,
  fallbackTitle?: string,
  fallbackDescription?: string,
): MetaProperty[] {
  data = data ? data : {};
  const meta: MetaProperty[] = [];

  // og:title
  if (data.ogTitle) {
    meta.push({
      property: 'og:title',
      content: data.ogTitle,
    });
  } else if (fallbackTitle) {
    meta.push({
      property: 'og:title',
      content: fallbackTitle,
    });
  }

  // og:type
  meta.push({
    property: 'og:type',
    content: data.ogType ? data.ogType : 'website',
  });

  if (data.ogType) {
    switch (data.ogType) {
      case 'article':
        meta.push(...createOpenGraphTypeArticleMetadataObjects(data.ogTypeObject as OpenGraphTypeArticle));
        break;
      case 'book':
        meta.push(...createOpenGraphTypeBookMetadataObjects(data.ogTypeObject as OpenGraphTypeBook));
        break;
      case 'profile':
        meta.push(...createOpenGraphTypeProfileMetadataObjects(data.ogTypeObject as OpenGraphTypeProfile));
        break;
      case 'website':
        // No additional properties needed for website.
        break;
      default:
        // Otherwise, assume they provided MetaPropertiesFunction themselves.
        if (data.ogTypeObject) {
          const metaPropsFunction = data.ogTypeObject as MetaPropertiesFunction;
          if (typeof metaPropsFunction === 'function') {
            meta.push(...metaPropsFunction());
          }
        }
        break;
    }
  }

  // og:image
  if (data.ogImage) {
    const images: OpenGraphImage[] = Array.isArray(data.ogImage) ? data.ogImage : [data.ogImage];
    images.forEach((image: OpenGraphImage) => {
      meta.push(...createOpenGraphImageMetadataObjects(image));
    });
  } // END og:image

  // og:url
  if (data.ogUrl) {
    meta.push({
      property: 'og:url',
      content: data.ogUrl,
    });
  } // END og:url

  // og:audio
  if (data.ogAudio) {
    const audios: OpenGraphAudio[] = Array.isArray(data.ogAudio) ? data.ogAudio : [data.ogAudio];
    audios.forEach((audio: OpenGraphAudio) => {
      meta.push(...createOpenGraphAudioMetadataObjects(audio));
    });
  } // END og:audio

  // og:description
  if (data.ogDescription) {
    meta.push({
      property: 'og:description',
      content: data.ogDescription,
    });
  } else if (fallbackDescription) {
    meta.push({
      property: 'og:description',
      content: fallbackDescription,
    });
  } // END og:description

  // og:determiner
  if (data.ogDeterminer) {
    meta.push({
      property: 'og:determiner',
      content: data.ogDeterminer,
    });
  } // END og:determiner

  // og:locale
  if (data.ogLocale) {
    meta.push({
      property: 'og:locale',
      content: data.ogLocale,
    });
  } // END og:locale

  // og:locale:alternate
  if (data.ogLocaleAlternate) {
    data.ogLocaleAlternate.forEach((localeAlternate: string) => {
      meta.push({
        property: 'og:locale:alternate',
        content: localeAlternate,
      });
    });
  } // END og:locale:alternate

  // og:site_name
  if (data.ogSiteName) {
    meta.push({
      property: 'og:site_name',
      content: data.ogSiteName,
    });
  } // END og:site_name

  // og:video
  if (data.ogVideo) {
    const videos: OpenGraphVideo[] = Array.isArray(data.ogVideo) ? data.ogVideo : [data.ogVideo];
    videos.forEach((video: OpenGraphVideo) => {
      meta.push(...createOpenGraphVideoMetadataObjects(video));
    });
  } // END og:video

  // fb:app_id
  if (data.fbAppId) {
    meta.push({
      property: 'fb:app_id',
      content: data.fbAppId,
    });
  }
  // END fb:app_id

  return meta;
}

export type OpenGraphOptionalMetadata = Record<string, never>;

export type OpenGraphImage = {
  /** `og:image` - An image URL which should represent your object within the graph. */
  ogImage?: string;
  /** `og:image:secure_url` - An alternate url to use if the webpage requires HTTPS. */
  ogImageSecureUrl?: string;
  /** `og:image:type` - A MIME type for this image, such as `image/jpeg` for JPG or `image/png` for PNG. If not provided, the MIME type will be inferred from the extension (e.g. `.jpg`, `.png`) at the end of the URL. */
  ogImageType?: string;
  /** `og:image:width` - The number of pixels wide. */
  ogImageWidth?: number | string;
  /** `og:image:height` - The number of pixels high. */
  ogImageHeight?: number | string;
  /** `og:image:alt` - A description of what is in the image (not a caption). If the page specifies an og:image it should specify og:image:alt. */
  ogImageAlt?: string;
};
function createOpenGraphImageMetadataObjects(image: OpenGraphImage): MetaProperty[] {
  if (!image) {
    return [];
  }
  const meta: MetaProperty[] = [];
  if (image.ogImage) {
    // og:image
    meta.push({
      property: 'og:image',
      content: image.ogImage,
    });
    // og:image:url
    meta.push({
      property: 'og:image:url',
      content: image.ogImage,
    });
    // og:image:secure_url
    if (image.ogImageSecureUrl) {
      meta.push({
        property: 'og:image:secure_url',
        content: image.ogImageSecureUrl,
      });
    } else if (image.ogImage.startsWith('https')) {
      // If the link is already secure, supply it.
      meta.push({
        property: 'og:image:secure_url',
        content: image.ogImage,
      });
    }
    // og:image:type
    if (image.ogImageType) {
      meta.push({
        property: 'og:image:type',
        content: image.ogImageType,
      });
    } else {
      // If not specified, infer the MIME type for common image formats
      const mimeTypes: { [x: string]: string } = {
        '.art': 'image/x-jg',
        '.bm': 'image/bmp',
        '.bmp': 'image/bmp',
        '.dwg': 'image/vnd.dwg',
        '.dxf': 'image/vnd.dwg',
        '.fif': 'image/fif',
        '.flo': 'image/florian',
        '.fpx': 'image/vnd.fpx',
        '.g3': 'image/g3fax',
        '.gif': 'image/gif',
        '.ico': 'image/x-icon',
        '.ief': 'image/ief',
        '.iefs': 'image/ief',
        '.jfif': 'image/jpeg',
        '.jfif-tbnl': 'image/jpeg',
        '.jpe': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpeg',
        '.jps': 'image/x-jps',
        '.jut': 'image/jutvision',
        '.mcf': 'image/vasa',
        '.nap': 'image/naplps',
        '.naplps': 'image/naplps',
        '.nif': 'image/x-niff',
        '.niff': 'image/x-niff',
        '.pbm': 'image/x-portable-bitmap',
        '.pct': 'image/x-pict',
        '.pcx': 'image/x-pcx',
        '.pgm': 'image/x-portable-graymap',
        '.pic': 'image/pict',
        '.pict': 'image/pict',
        '.pm': 'image/x-xpixmap',
        '.png': 'image/png',
        '.pnm': 'image/x-portable-anymap',
        '.ppm': 'image/x-portable-pixmap',
        '.qif': 'image/x-quicktime',
        '.qti': 'image/x-quicktime',
        '.qtif': 'image/x-quicktime',
        '.ras': 'image/cmu-raster',
        '.rast': 'image/cmu-raster',
        '.rf': 'image/vnd.rn-realflash',
        '.rgb': 'image/x-rgb',
        '.rp': 'image/vnd.rn-realpix',
        '.svf': 'image/vnd.dwg',
        '.tif': 'image/tiff',
        '.tiff': 'image/tiff',
        '.turbot': 'image/florian',
        '.wbmp': 'image/vnd.wap.wbmp',
        '.webp': 'image/webp',
        '.x-png': 'image/png',
        '.xbm': 'image/xbm',
        '.xif': 'image/vnd.xiff',
        '.xpm': 'image/xpm',
        '.xwd': 'image/x-xwd',
      };
      const mimeTypeKeys: string[] = Object.keys(mimeTypes);
      for (let i = 0; i < mimeTypeKeys.length; i++) {
        const extension: string = mimeTypeKeys[i];
        if (image && image.ogImage && image.ogImage.endsWith(extension)) {
          meta.push({
            property: 'og:image:type',
            content: mimeTypes[extension],
          });
          break;
        }
      }
    }
    // og:image:width
    if (image.ogImageWidth) {
      meta.push({
        property: 'og:image:width',
        content: image.ogImageWidth + '',
      });
    }
    // og:image:height
    if (image.ogImageHeight) {
      meta.push({
        property: 'og:image:height',
        content: image.ogImageHeight + '',
      });
    }
    // og:image:alt
    if (image.ogImageAlt) {
      meta.push({
        property: 'og:image:alt',
        content: image.ogImageAlt,
      });
    }
  }
  return meta;
}

export type OpenGraphVideo = {
  /** `og:video` - A video URL which should represent your object within the graph. */
  ogVideo?: string;
  /** `og:video:secure_url` - An alternate url to use if the webpage requires HTTPS. */
  ogVideoSecureUrl?: string;
  /** `og:video:type` - A MIME type for this video, such as `video/mp4` for MP4. If not provided, the MIME type will be inferred from the extension (e.g. `.mp4`) at the end of the URL. */
  ogVideoType?: string;
  /** `og:video:width` - The number of pixels wide. */
  ogVideoWidth?: number | string;
  /** `og:video:height` - The number of pixels high. */
  ogVideoHeight?: number | string;
};
function createOpenGraphVideoMetadataObjects(video: OpenGraphVideo): MetaProperty[] {
  if (!video) {
    return [];
  }
  const meta: MetaProperty[] = [];
  if (video.ogVideo) {
    // og:video
    meta.push({
      property: 'og:video',
      content: video.ogVideo,
    });
    // og:video:url
    meta.push({
      property: 'og:video:url',
      content: video.ogVideo,
    });
    // og:video:secure_url
    if (video.ogVideoSecureUrl) {
      meta.push({
        property: 'og:video:secure_url',
        content: video.ogVideoSecureUrl,
      });
    } else if (video.ogVideo.startsWith('https')) {
      // If the link is already secure, supply it.
      meta.push({
        property: 'og:video:secure_url',
        content: video.ogVideo,
      });
    }
    // og:video:type
    if (video.ogVideoType) {
      meta.push({
        property: 'og:video:type',
        content: video.ogVideoType,
      });
    } else {
      // If not specified, infer the MIME type for common video formats
      const mimeTypes: { [x: string]: string } = {
        '.ts': 'video/MP2T',
        '.webm': 'video/webm',
        '.3gp': 'video/3gpp',
        '.afl': 'video/animaflex',
        '.asf': 'video/x-ms-asf',
        '.asx': 'video/x-ms-asf',
        '.avi': 'video/avi',
        '.avs': 'video/avs-video',
        '.dif': 'video/x-dv',
        '.dl': 'video/dl',
        '.dv': 'video/x-dv',
        '.fli': 'video/fli',
        '.flv': 'video/x-flv',
        '.fmf': 'video/x-atomic3d-feature',
        '.gl': 'video/gl',
        '.isu': 'video/x-isvideo',
        '.m1v': 'video/mpeg',
        '.m2v': 'video/mpeg',
        '.m3u8': 'application/x-mpegURL',
        '.m4a': 'video/mp4',
        '.m4b': 'video/mp4',
        '.m4p': 'video/mp4',
        '.m4r': 'video/mp4',
        '.m4v': 'video/mp4',
        '.mjpg': 'video/x-motion-jpeg',
        '.moov': 'video/quicktime',
        '.mov': 'video/quicktime',
        '.movie': 'video/x-sgi-movie',
        '.mp2': 'video/mpeg',
        '.mp3': 'video/mpeg',
        '.mp4': 'video/mp4',
        '.mpa': 'video/mpeg',
        '.mpe': 'video/mpeg',
        '.mpeg': 'video/mpeg',
        '.mpg': 'video/mpeg',
        '.mv': 'video/x-sgi-movie',
        '.ogg': 'video/ogg',
        '.qt': 'video/quicktime',
        '.qtc': 'video/x-qtc',
        '.rv': 'video/vnd.rn-realvideo',
        '.scm': 'video/x-scm',
        '.vdo': 'video/vdo',
        '.viv': 'video/vivo',
        '.vivo': 'video/vivo',
        '.vos': 'video/vosaic',
        '.wmv': 'video/x-ms-wmv',
        '.xdr': 'video/x-amt-demorun',
        '.xsr': 'video/x-amt-showrun',
      };
      const mimeTypeKeys: string[] = Object.keys(mimeTypes);
      for (let i = 0; i < mimeTypeKeys.length; i++) {
        const extension: string = mimeTypeKeys[i];
        if (video && video.ogVideo && video.ogVideo.endsWith(extension)) {
          meta.push({
            property: 'og:video:type',
            content: mimeTypes[extension],
          });
          break;
        }
      }
    }
    // og:video:width
    if (video.ogVideoWidth) {
      meta.push({
        property: 'og:video:width',
        content: video.ogVideoWidth + '',
      });
    }
    // og:video:height
    if (video.ogVideoHeight) {
      meta.push({
        property: 'og:video:height',
        content: video.ogVideoHeight + '',
      });
    }
  }
  return meta;
}

export type OpenGraphAudio = {
  /** `og:audio` - A audio URL which should represent your object within the graph. */
  ogAudio?: string;
  /** `og:audio:secure_url` - An alternate url to use if the webpage requires HTTPS. */
  ogAudioSecureUrl?: string;
  /** `og:audio:type` - A MIME type for this audio, such as `audio/mpeg3` for MP3. If not provided, the MIME type will be inferred from the extension (e.g. `.mp3`) at the end of the URL. */
  ogAudioType?: string;
};
function createOpenGraphAudioMetadataObjects(audio: OpenGraphAudio): MetaProperty[] {
  if (!audio) {
    return [];
  }
  const meta: MetaProperty[] = [];
  if (audio.ogAudio) {
    // og:audio
    meta.push({
      property: 'og:audio',
      content: audio.ogAudio,
    });
    // og:audio:url
    meta.push({
      property: 'og:audio:url',
      content: audio.ogAudio,
    });
    // og:audio:secure_url
    if (audio.ogAudioSecureUrl) {
      meta.push({
        property: 'og:audio:secure_url',
        content: audio.ogAudioSecureUrl,
      });
    } else if (audio.ogAudio.startsWith('https')) {
      // If the link is already secure, supply it.
      meta.push({
        property: 'og:audio:secure_url',
        content: audio.ogAudio,
      });
    }
    // og:audio:type
    if (audio.ogAudioType) {
      meta.push({
        property: 'og:audio:type',
        content: audio.ogAudioType,
      });
    } else {
      // If not specified, infer the MIME type for common audio formats
      const mimeTypes: { [x: string]: string } = {
        '.aac': 'audio/aac',
        '.aif': 'audio/aiff',
        '.aifc': 'audio/aiff',
        '.aiff': 'audio/aiff',
        '.au': 'audio/basic',
        '.funk': 'audio/make',
        '.gsd': 'audio/x-gsm',
        '.gsm': 'audio/x-gsm',
        '.it': 'audio/it',
        '.jam': 'audio/x-jam',
        '.kar': 'audio/midi',
        '.la': 'audio/nspaudio',
        '.lam': 'audio/x-liveaudio',
        '.lma': 'audio/nspaudio',
        '.m2a': 'audio/mpeg',
        '.m3u': 'audio/x-mpequrl',
        '.mid': 'audio/midi',
        '.midi': 'audio/midi',
        '.mjf': 'audio/x-vnd.audioexplosion.mjuicemediafile',
        '.mod': 'audio/mod',
        '.mp2': 'audio/mpeg',
        '.mp3': 'audio/mpeg3',
        '.mp4': 'audio/mp4',
        '.mpa': 'audio/mpeg',
        '.mpg': 'audio/mpeg',
        '.mpga': 'audio/mpeg',
        '.my': 'audio/make',
        '.oga': 'audio/ogg',
        '.pfunk': 'audio/make',
        '.qcp': 'audio/vnd.qcelp',
        '.ra': 'audio/x-pn-realaudio',
        '.ram': 'audio/x-pn-realaudio',
        '.rm': 'audio/x-pn-realaudio',
        '.rmi': 'audio/mid',
        '.rmm': 'audio/x-pn-realaudio',
        '.rmp': 'audio/x-pn-realaudio',
        '.rpm': 'audio/x-pn-realaudio-plugin',
        '.s3m': 'audio/s3m',
        '.sid': 'audio/x-psid',
        '.snd': 'audio/basic',
        '.tsi': 'audio/tsp-audio',
        '.tsp': 'audio/tsplayer',
        '.voc': 'audio/voc',
        '.vox': 'audio/voxware',
        '.vqe': 'audio/x-twinvq-plugin',
        '.vqf': 'audio/x-twinvq',
        '.vql': 'audio/x-twinvq-plugin',
        '.wav': 'audio/wav',
        '.weba': 'audio/webm',
        '.xm': 'audio/xm',
      };
      const mimeTypeKeys: string[] = Object.keys(mimeTypes);
      for (let i = 0; i < mimeTypeKeys.length; i++) {
        const extension: string = mimeTypeKeys[i];
        if (audio && audio.ogAudio && audio.ogAudio.endsWith(extension)) {
          meta.push({
            property: 'og:audio:type',
            content: mimeTypes[extension],
          });
          break;
        }
      }
    }
  }
  return meta;
}

// ↓↓↓↓↓ OpenGraph Types ↓↓↓↓↓

export type OpenGraphTypeArticle = {
  /** `article:published_time` - datetime - When the article was first published. */
  articlePublishedTime?: string;
  /** `article:modified_time` - datetime - When the article was last changed. */
  articleModifiedTime?: string;
  /** `article:expiration_time` - datetime - When the article is out of date after. */
  articleExpirationTime?: string;
  /** `article:author` - string array - URI(s) to writers of the article. */
  articleAuthor?: string[];
  /** `article:section` - string - A high-level section name. E.g. Technology. For blogs, this should be the category. */
  articleSection?: string;
  /** `article:tag` - string array - Tag words associated with this article. */
  articleTag?: string[];
};
function createOpenGraphTypeArticleMetadataObjects(article: OpenGraphTypeArticle): MetaProperty[] {
  if (!article) {
    return [];
  }
  const meta: MetaProperty[] = [];
  // article:published_time
  if (article.articlePublishedTime) {
    meta.push({
      property: 'article:published_time',
      content: article.articlePublishedTime,
    });
  }
  // article:modified_time
  if (article.articleModifiedTime) {
    meta.push({
      property: 'article:modified_time',
      content: article.articleModifiedTime,
    });
  }
  // article:expiration_time
  if (article.articleExpirationTime) {
    meta.push({
      property: 'article:expiration_time',
      content: article.articleExpirationTime,
    });
  }
  // article:author
  if (article.articleAuthor) {
    article.articleAuthor.forEach((authorUri: string) => {
      meta.push({
        property: 'article:author',
        content: authorUri,
      });
    });
  }
  // article:section
  if (article.articleSection) {
    meta.push({
      property: 'article:section',
      content: article.articleSection,
    });
  }
  // article:tag
  if (article.articleTag) {
    article.articleTag.forEach((tag: string) => {
      meta.push({
        property: 'article:tag',
        content: tag,
      });
    });
  }
  return meta;
}

export type OpenGraphTypeBook = {
  /** `book:author` - string array - URI(s) to writers of the book. */
  bookAuthor?: string[];
  /** `book:isbn` - string - The ISBN */
  bookIsbn?: string;
  /** `book:release_date` - datetime - The date the book was released. */
  bookReleaseDate?: string;
  /** `book:tag` - string array - Tag words associated with this book. */
  bookTag?: string[];
};
function createOpenGraphTypeBookMetadataObjects(book: OpenGraphTypeBook): MetaProperty[] {
  if (!book) {
    return [];
  }
  const meta: MetaProperty[] = [];
  // book:author
  if (book.bookAuthor) {
    book.bookAuthor.forEach((authorUri: string) => {
      meta.push({
        property: 'book:author',
        content: authorUri,
      });
    });
  }
  // book:isbn
  if (book.bookIsbn) {
    meta.push({
      property: 'book:isbn',
      content: book.bookIsbn,
    });
  }
  // book:release_date
  if (book.bookReleaseDate) {
    meta.push({
      property: 'book:release_date',
      content: book.bookReleaseDate,
    });
  }
  // book:tag
  if (book.bookTag) {
    book.bookTag.forEach((tag: string) => {
      meta.push({
        property: 'book:tag',
        content: tag,
      });
    });
  }
  return meta;
}

export type OpenGraphTypeProfile = {
  /** `profile:first_name` - string - A name normally given to an individual by a parent or self-chosen. */
  profileFirstName?: string;
  /** `profile:last_name` - string - A name inherited from a family or marriage and by which the individual is commonly known. */
  profileLastName?: string;
  /** `profile:username` - string - A short unique string to identify them. */
  profileUsername?: string;
  /** `profile:gender` - enum(male, female) - Their gender. */
  profileGender?: string;
};
function createOpenGraphTypeProfileMetadataObjects(profile: OpenGraphTypeProfile): MetaProperty[] {
  if (!profile) {
    return [];
  }
  const meta: MetaProperty[] = [];
  // profile:first_name
  if (profile.profileFirstName) {
    meta.push({
      property: 'profile:first_name',
      content: profile.profileFirstName,
    });
  }
  // profile:last_name
  if (profile.profileLastName) {
    meta.push({
      property: 'profile:last_name',
      content: profile.profileLastName,
    });
  }
  // profile:username
  if (profile.profileUsername) {
    meta.push({
      property: 'profile:username',
      content: profile.profileUsername,
    });
  }
  // profile:gender
  if (profile.profileGender) {
    meta.push({
      property: 'profile:gender',
      content: profile.profileGender,
    });
  }
  return meta;
}

export type OpenGraphTypeWebsite = Record<string, never>;

export type MetaPropertiesFunction = () => MetaProperty[];

// ↑↑↑↑↑ END OpenGraph Types ↑↑↑↑↑

// === END OPEN GRAPH ===

export type TwitterMetadata = {
  // === Twitter Cards ===
  /** `twitter:card` value `summary` - [Summary Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary) - Gives the reader a preview of the content before clicking through to your website. */
  twitterSummaryCard?: TwitterSummaryCardType;
  /** `twitter:card` value `summary_large_image` - [Summary Card with Large Image](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image) - Features a large, full-width prominent image alongside a tweet. */
  twitterSummaryCardWithLargeImage?: TwitterSummaryCardWithLargeImageCardType;
  /** `twitter:card` value `player` - [Player Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/player-card) - Embed a playable video or audio clip into a Tweet. */
  twitterPlayerCard?: TwitterPlayerCardType;
  /** `twitter:card` value `app` - [App Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/app-card) - Provides mobile app information along with a tweet to drive installs. */
  twitterAppCard?: TwitterAppCardType;
};
function createTwitterMetadataObjects(
  data: TwitterMetadata | undefined,
  fallbackTitle?: string,
  fallbackDescription?: string,
): MetaProperty[] {
  if (!data) {
    return [];
  }
  const meta: MetaProperty[] = [];
  if (data.twitterSummaryCard) {
    meta.push(
      ...createTwitterSummaryCardMetadataObjects(
        data.twitterSummaryCard as TwitterSummaryCardType,
        fallbackTitle,
        fallbackDescription,
      ),
    );
  }

  if (data.twitterSummaryCardWithLargeImage) {
    meta.push(
      ...createTwitterSummaryCardWithLargeImageMetadataObjects(
        data.twitterSummaryCardWithLargeImage as TwitterSummaryCardWithLargeImageCardType,
        fallbackTitle,
        fallbackDescription,
      ),
    );
  }

  if (data.twitterPlayerCard) {
    meta.push(
      ...createTwitterPlayerCardMetadataObjects(
        data.twitterPlayerCard as TwitterPlayerCardType,
        fallbackTitle,
        fallbackDescription,
      ),
    );
  }

  if (data.twitterAppCard) {
    meta.push(
      ...createTwitterAppCardMetadataObjects(
        data.twitterAppCard as TwitterAppCardType,
        fallbackTitle,
        fallbackDescription,
      ),
    );
  }

  return meta;
}

/**
 * `twitter:card` value `summary`
 *
 * The Summary Card can be used for many kinds of web content, from blog posts and news articles, to products and restaurants. It is designed to give the reader a preview of the content before clicking through to your website.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary
 */
export type TwitterSummaryCardType = {
  /** (Optional) `twitter:site` - The Twitter @username the card should be attributed to. */
  summaryCardSiteUsername?: string;
  /** (Required) `twitter:title` - A concise title for the related content. */
  summaryCardTitle?: string;
  /** (Optional) `twitter:description` - A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description or use this field to describe the general services provided by the website. */
  summaryCardDescription?: string;
  /** (Optional) `twitter:image` - A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages.
   *
   * ### Image
   * Images for this Card support an aspect ratio of 1:1 with minimum dimensions of 144x144 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. The image will be cropped to a square on all platforms. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
   */
  summaryCardImage?: string;
  /** (Optional) `twitter:image:alt` - A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters. */
  summaryCardImageAlt?: string;
};
function createTwitterSummaryCardMetadataObjects(
  summaryCard: TwitterSummaryCardType,
  fallbackTitle?: string,
  fallbackDescription?: string,
): MetaProperty[] {
  if (!summaryCard) {
    return [];
  }
  const meta: MetaProperty[] = [];
  // twitter:card
  meta.push({
    property: 'twitter:card',
    content: 'summary',
  });
  // twitter:site
  if (summaryCard.summaryCardSiteUsername) {
    meta.push({
      property: 'twitter:site',
      content: summaryCard.summaryCardSiteUsername,
    });
  }
  // twitter:title
  if (summaryCard.summaryCardTitle) {
    meta.push({
      property: 'twitter:title',
      content: summaryCard.summaryCardTitle,
    });
  } else if (fallbackTitle) {
    meta.push({
      property: 'twitter:title',
      content: fallbackTitle,
    });
  }
  // twitter:description
  if (summaryCard.summaryCardDescription) {
    meta.push({
      property: 'twitter:description',
      content: summaryCard.summaryCardDescription,
    });
  } else if (fallbackDescription) {
    meta.push({
      property: 'twitter:description',
      content: fallbackDescription,
    });
  }
  // twitter:image
  if (summaryCard.summaryCardImage) {
    meta.push({
      property: 'twitter:image',
      content: summaryCard.summaryCardImage,
    });
  }
  // twitter:image:alt
  if (summaryCard.summaryCardImageAlt) {
    meta.push({
      property: 'twitter:image:alt',
      content: summaryCard.summaryCardImageAlt,
    });
  }
  return meta;
}

/**
 * `twitter:card` value `summary_large_image`
 *
 * The Summary Card with Large Image features a large, full-width prominent image alongside a tweet. It is designed to give the reader a rich photo experience, and clicking on the image brings the user to your website.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image
 */
export type TwitterSummaryCardWithLargeImageCardType = {
  /** (Optional) `twitter:site` - The Twitter @username the card should be attributed to. */
  summaryCardSiteUsername?: string;
  /** (Required) `twitter:title` - A concise title for the related content. */
  summaryCardTitle?: string;
  /** (Optional) `twitter:description` - A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description or use this field to describe the general services provided by the website. */
  summaryCardDescription?: string;
  /** (Optional) `twitter:image` - A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages.
   *
   * ### Image
   * Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
   */
  summaryCardImage?: string;
  /** (Optional) `twitter:image:alt` - A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters. */
  summaryCardImageAlt?: string;
};
function createTwitterSummaryCardWithLargeImageMetadataObjects(
  summaryCard: TwitterSummaryCardWithLargeImageCardType,
  fallbackTitle?: string,
  fallbackDescription?: string,
): MetaProperty[] {
  if (!summaryCard) {
    return [];
  }
  const meta: MetaProperty[] = [];
  // twitter:card
  meta.push({
    property: 'twitter:card',
    content: 'summary_large_image',
  });
  // twitter:site
  if (summaryCard.summaryCardSiteUsername) {
    meta.push({
      property: 'twitter:site',
      content: summaryCard.summaryCardSiteUsername,
    });
  }
  // twitter:title
  if (summaryCard.summaryCardTitle) {
    meta.push({
      property: 'twitter:title',
      content: summaryCard.summaryCardTitle,
    });
  } else if (fallbackTitle) {
    meta.push({
      property: 'twitter:title',
      content: fallbackTitle,
    });
  }
  // twitter:description
  if (summaryCard.summaryCardDescription) {
    meta.push({
      property: 'twitter:description',
      content: summaryCard.summaryCardDescription,
    });
  } else if (fallbackDescription) {
    meta.push({
      property: 'twitter:description',
      content: fallbackDescription,
    });
  }
  // twitter:image
  if (summaryCard.summaryCardImage) {
    meta.push({
      property: 'twitter:image',
      content: summaryCard.summaryCardImage,
    });
  }
  // twitter:image:alt
  if (summaryCard.summaryCardImageAlt) {
    meta.push({
      property: 'twitter:image:alt',
      content: summaryCard.summaryCardImageAlt,
    });
  }
  return meta;
}

/**
 * `twitter:card` value `player`
 *
 * Video and audio clips have a special place on the Twitter platform thanks to the Player Card. By implementing a few HTML meta tags to your website and following the Twitter Developer Policy, you can deliver your rich media to users across the globe.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/player-card
 */
export type TwitterPlayerCardType = {
  /** (Required) `twitter:title` - The title of your content as it should appear in the card */
  playerCardTitle?: string;
  /** (Required) `twitter:site` - The Twitter @username the card should be attributed to. */
  playerCardSiteUsername?: string;
  /** (Optional) `twitter:description` - A description of the content in a maximum of 200 characters */
  playerCardDescription?: string;
  /** (Required) `twitter:player` - HTTPS URL to iFrame player. This must be a HTTPS URL which does not generate active mixed content warnings in a web browser. The audio or video player must not require plugins such as Adobe Flash. */
  playerCardPlayer?: string;
  /** (Required) `twitter:player:width` - Width of iFrame specified in twitter:player in pixels */
  playerCardPlayerWidth?: number | string;
  /** (Required) `twitter:player:height` - Height of iFrame specified in twitter:player in pixels */
  playerCardPlayerHeight?: number | string;
  /** (Required) `twitter:image` - Image to be displayed in place of the player on platforms that don’t support iFrames or inline players. You should make this image the same dimensions as your player. Images with fewer than 68,600 pixels (a 262x262 square image, or a 350x196 16:9 image) will cause the player card not to render. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported. */
  playerCardImage?: string;
  /** (Optional) `twitter:image:alt` - A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters. */
  playerCardImageAlt?: string;
};
function createTwitterPlayerCardMetadataObjects(
  playerCard: TwitterPlayerCardType,
  fallbackTitle?: string,
  fallbackDescription?: string,
): MetaProperty[] {
  if (!playerCard) {
    return [];
  }
  const meta: MetaProperty[] = [];
  // twitter:card
  meta.push({
    property: 'twitter:card',
    content: 'player',
  });
  // twitter:title
  if (playerCard.playerCardTitle) {
    meta.push({
      property: 'twitter:title',
      content: playerCard.playerCardTitle,
    });
  } else if (fallbackTitle) {
    meta.push({
      property: 'twitter:title',
      content: fallbackTitle,
    });
  }
  // twitter:site
  if (playerCard.playerCardSiteUsername) {
    meta.push({
      property: 'twitter:site',
      content: playerCard.playerCardSiteUsername,
    });
  }
  // twitter:description
  if (playerCard.playerCardDescription) {
    meta.push({
      property: 'twitter:description',
      content: playerCard.playerCardDescription,
    });
  } else if (fallbackDescription) {
    meta.push({
      property: 'twitter:description',
      content: fallbackDescription,
    });
  }
  // twitter:player
  if (playerCard.playerCardPlayer) {
    meta.push({
      property: 'twitter:player',
      content: playerCard.playerCardPlayer,
    });
  }
  // twitter:player:width
  if (playerCard.playerCardPlayerWidth) {
    meta.push({
      property: 'twitter:player:width',
      content: playerCard.playerCardPlayerWidth + '',
    });
  }
  // twitter:player:height
  if (playerCard.playerCardPlayerHeight) {
    meta.push({
      property: 'twitter:player:height',
      content: playerCard.playerCardPlayerHeight + '',
    });
  }
  // twitter:image
  if (playerCard.playerCardImage) {
    meta.push({
      property: 'twitter:image',
      content: playerCard.playerCardImage,
    });
  }
  // twitter:image:alt
  if (playerCard.playerCardImageAlt) {
    meta.push({
      property: 'twitter:image:alt',
      content: playerCard.playerCardImageAlt,
    });
  }
  return meta;
}

/**
 * `twitter:card` value `app`
 *
 * The App Card represents mobile applications on Twitter and is aimed at driving installs. The App Card was designed to allow for a name, description and icon, and also to highlight attributes such as the rating and the price.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/app-card
 */
export type TwitterAppCardType = {
  /** (Required) `twitter:site` - The Twitter @username the card should be attributed to. */
  appCardSiteUsername?: string;
  /** (Optional) `twitter:description` - You can use this as a more concise description than what you may have on the app store. This field has a maximum of 200 characters */
  appCardDescription?: string;
  /** (Required) `twitter:app:id:iphone` - String value, and should be the numeric representation of your app ID in the App Store (.i.e. “307234931”) */
  appCardAppIdIphone?: string;
  /** (Required) `twitter:app:id:ipad` - String value, should be the numeric representation of your app ID in the App Store (.i.e. “307234931”) */
  appCardAppIdIpad?: string;
  /** (Required) `twitter:app:id:googleplay` - String value, and should be the numeric representation of your app ID in Google Play (.i.e. “com.android.app”) */
  appCardAppIdGoogleplay?: string;
  /** (Optional) `twitter:app:url:iphone` - Your app’s custom URL scheme (you must include ”://” after your scheme name) */
  appCardAppUrlIphone?: string;
  /** (Optional) `twitter:app:url:ipad` - Your app’s custom URL scheme */
  appCardAppUrlIpad?: string;
  /** (Optional) `twitter:app:url:googleplay` - Your app’s custom URL scheme */
  appCardAppUrlGoogleplay?: string;
  /** (Optional) `twitter:app:name:iphone` - Your app’s name (iphone). */
  appCardAppNameIphone?: string;
  /** (Optional) `twitter:app:name:ipad` - Your app’s name (ipad). */
  appCardAppNameIpad?: string;
  /** (Optional) `twitter:app:name:googleplay` - Your app’s name (googleplay). */
  appCardAppNameGoogleplay?: string;
  /** (Optional) `twitter:app:country` - If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application. */
  appCardAppCountry?: string;
};
function createTwitterAppCardMetadataObjects(
  appCard: TwitterAppCardType,
  fallbackTitle?: string,
  fallbackDescription?: string,
): MetaProperty[] {
  if (!appCard) {
    return [];
  }
  const meta: MetaProperty[] = [];
  // twitter:card
  meta.push({
    property: 'twitter:card',
    content: 'app',
  });
  // twitter:site
  if (appCard.appCardSiteUsername) {
    meta.push({
      property: 'twitter:site',
      content: appCard.appCardSiteUsername,
    });
  }
  // twitter:app:name:iphone
  if (appCard.appCardAppNameIphone) {
    meta.push({
      property: 'twitter:app:name:iphone',
      content: appCard.appCardAppNameIphone,
    });
  } else if (fallbackTitle && (appCard.appCardAppIdIphone || appCard.appCardAppUrlIphone)) {
    // Use fallback title if they gave iphone details but left out the title.
    meta.push({
      property: 'twitter:app:name:iphone',
      content: fallbackTitle,
    });
  }
  // twitter:app:name:ipad
  if (appCard.appCardAppNameIpad) {
    meta.push({
      property: 'twitter:app:name:ipad',
      content: appCard.appCardAppNameIpad,
    });
  } else if (fallbackTitle && (appCard.appCardAppIdIpad || appCard.appCardAppUrlIpad)) {
    // Use fallback title if they gave ipad details but left out the title.
    meta.push({
      property: 'twitter:app:name:ipad',
      content: fallbackTitle,
    });
  }
  // twitter:app:name:googleplay
  if (appCard.appCardAppNameGoogleplay) {
    meta.push({
      property: 'twitter:app:name:googleplay',
      content: appCard.appCardAppNameGoogleplay,
    });
  } else if (fallbackTitle && (appCard.appCardAppIdGoogleplay || appCard.appCardAppUrlGoogleplay)) {
    // Use fallback title if they gave googleplay details but left out the title.
    meta.push({
      property: 'twitter:app:name:googleplay',
      content: fallbackTitle,
    });
  }
  // twitter:description
  if (appCard.appCardDescription) {
    meta.push({
      property: 'twitter:description',
      content: appCard.appCardDescription,
    });
  } else if (fallbackDescription) {
    meta.push({
      property: 'twitter:description',
      content: fallbackDescription,
    });
  }
  // twitter:app:id:iphone
  if (appCard.appCardAppIdIphone) {
    meta.push({
      property: 'twitter:app:id:iphone',
      content: appCard.appCardAppIdIphone,
    });
  }
  // twitter:app:id:ipad
  if (appCard.appCardAppIdIpad) {
    meta.push({
      property: 'twitter:app:id:ipad',
      content: appCard.appCardAppIdIpad,
    });
  }
  // twitter:app:id:googleplay
  if (appCard.appCardAppIdGoogleplay) {
    meta.push({
      property: 'twitter:app:id:googleplay',
      content: appCard.appCardAppIdGoogleplay,
    });
  }
  // twitter:app:url:iphone
  if (appCard.appCardAppUrlIphone) {
    meta.push({
      property: 'twitter:app:url:iphone',
      content: appCard.appCardAppUrlIphone,
    });
  }
  // twitter:app:url:ipad
  if (appCard.appCardAppUrlIpad) {
    meta.push({
      property: 'twitter:app:url:ipad',
      content: appCard.appCardAppUrlIpad,
    });
  }
  // twitter:app:country
  if (appCard.appCardAppCountry) {
    meta.push({
      property: 'twitter:app:country',
      content: appCard.appCardAppCountry,
    });
  }
  // twitter:app:url:googleplay
  if (appCard.appCardAppUrlGoogleplay) {
    meta.push({
      property: 'twitter:app:url:googleplay',
      content: appCard.appCardAppUrlGoogleplay,
    });
  }
  return meta;
}

// === GOOGLE ===

/**
 * [Google's metadata tags.](https://support.google.com/webmasters/answer/79812?hl=en)
 *
 * Used to change how the search engine lists a site in Search.
 */
export type GoogleMetadata = {
  /**
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   *
   * When users search for your site, Google Search results sometimes display a search box specific to your site, along with other direct links to your site. This tag tells Google not to show the sitelinks search box.
   */
  noSiteLinksSearchBox?: boolean;
  /**
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   *
   * When Google recognizes that the contents of a page are not in the language that the user is likely to want to read, Google often provides a link to a translation in the search results. In general, this gives you the chance to provide your unique and compelling content to a much larger group of users. However, there may be situations where this is not desired. This meta tag tells Google that you don't want us to provide a translation for this page.
   */
  noTranslate?: boolean;
  /**
   * See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
   *
   * Prevents web browsers from reading aloud the tagged page using the Google Assistant voice commands "Read this page" and "Read it."
   */
  noPageReadAloud?: boolean;
};
function createGoogleMetadataObjects(data?: GoogleMetadata): MetaProperty[] {
  data = data ? data : {};
  const meta: MetaProperty[] = [];

  if (data.noSiteLinksSearchBox) {
    meta.push({
      property: 'google',
      content: 'nositelinkssearchbox',
    });
  }

  if (data.noTranslate) {
    meta.push({
      property: 'google',
      content: 'notranslate',
    });
  }

  if (data.noPageReadAloud) {
    meta.push({
      property: 'google',
      content: 'nopagereadaloud',
    });
  }

  return meta;
}
