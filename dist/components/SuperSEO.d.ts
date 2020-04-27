import * as React from 'react';
export interface SuperSEOProps {
    /** The title of the page. */
    title?: string;
    /** Specify a description. This is shown in Google results and should be 50-160 characters long. Anything beyond that length will be truncated with an ellipsis "...". */
    description?: string;
    /** Specify the site language as an [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), such as `en` for English. */
    lang?: string;
    /**
     * Provide an [OpenGraphMetadata](https://devboldly.github.io/react-super-seo/SuperSEO#opengraph-prop-opengraphmetadata) object.
     *
     * [OpenGraph](https://ogp.me/) (Facebook) metadata. Will fall back to use title, description, and general "website" type if each respective OpenGraph value is not specified.
     */
    openGraph?: OpenGraphMetadata;
    /**
     * Provide a [TwitterMetadata](https://devboldly.github.io/react-super-seo/SuperSEO#twitter-prop-twittermetadata) object.
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
     * Provide a [GoogleMetadata](https://devboldly.github.io/react-super-seo/SuperSEO#google-prop-googlemetadata) object.
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
     * This meta tag control the behavior of search engine crawling and indexing. See [documentation from Google](https://support.google.com/webmasters/answer/79812?hl=en).
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
 * See documentation: https://devboldly.github.io/react-super-seo
 *
 * An SEO component that adds a `title`, `description`, [OpenGraph](https://ogp.me/), and [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards) meta properties to the `head`.
 *
 * Also supports adding an [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) `lang` attribute to the `html` element.
 *
 * Uses sensible fallbacks where possible and features automatic [MIME type inference](/list-of-mime-types) for media URLs.
 */
export declare function SuperSEO(props: SuperSEOProps): JSX.Element;
export declare type MetaName = {
    name: string;
    content: string;
};
export declare type MetaProperty = {
    property: string;
    content: string;
};
export declare type Meta = MetaName | MetaProperty;
export declare type OpenGraphMetadata = {
    /** (Required) `og:title` - The title of your object as it should appear within the graph, e.g., "The Rock". */
    ogTitle?: string;
    /** (Required) `og:type` - The type of your object. Supports `article`, `book`, `profile`, `website`. Specify the related properties in `ogTypeObject`. If another type is provided, use a `MetaPropertiesFunction` for the `ogTypeObject` to specify your meta properties for the type. This function should return an array of `MetaProperty` in the format `{property: string, content: string}`. */
    ogType?: string;
    /** (Required) The meta properties object for the type specified. Use {} to default to "website". */
    ogTypeObject?: OpenGraphTypeArticle | OpenGraphTypeBook | OpenGraphTypeProfile | OpenGraphTypeWebsite | MetaPropertiesFunction;
    /** (Required) `og:image` - An image URL which should represent your object within the graph. Provide an array for multiple images. */
    ogImage?: OpenGraphImage | OpenGraphImage[];
    /** (Required) `og:url` - The canonical URL of your object that will be used as its permanent ID in the graph, e.g., `"http://www.imdb.com/title/tt0117500/"`. */
    ogUrl?: string;
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
export declare type OpenGraphOptionalMetadata = {};
export declare type OpenGraphImage = {
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
export declare type OpenGraphVideo = {
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
export declare type OpenGraphAudio = {
    /** `og:audio` - A audio URL which should represent your object within the graph. */
    ogAudio?: string;
    /** `og:audio:secure_url` - An alternate url to use if the webpage requires HTTPS. */
    ogAudioSecureUrl?: string;
    /** `og:audio:type` - A MIME type for this audio, such as `audio/mpeg3` for MP3. If not provided, the MIME type will be inferred from the extension (e.g. `.mp3`) at the end of the URL. */
    ogAudioType?: string;
};
export declare type OpenGraphTypeArticle = {
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
export declare type OpenGraphTypeBook = {
    /** `book:author` - string array - URI(s) to writers of the book. */
    bookAuthor?: string[];
    /** `book:isbn` - string - The ISBN */
    bookIsbn?: string;
    /** `book:release_date` - datetime - The date the book was released. */
    bookReleaseDate?: string;
    /** `book:tag` - string array - Tag words associated with this book. */
    bookTag?: string[];
};
export declare type OpenGraphTypeProfile = {
    /** `profile:first_name` - string - A name normally given to an individual by a parent or self-chosen. */
    profileFirstName?: string;
    /** `profile:last_name` - string - A name inherited from a family or marriage and by which the individual is commonly known. */
    profileLastName?: string;
    /** `profile:username` - string - A short unique string to identify them. */
    profileUsername?: string;
    /** `profile:gender` - enum(male, female) - Their gender. */
    profileGender?: string;
};
export declare type OpenGraphTypeWebsite = {};
export declare type MetaPropertiesFunction = () => MetaProperty[];
export declare type TwitterMetadata = {
    /** `twitter:card` value `summary` - [Summary Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary) - Gives the reader a preview of the content before clicking through to your website. */
    twitterSummaryCard?: TwitterSummaryCardType;
    /** `twitter:card` value `summary_large_image` - [Summary Card with Large Image](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image) - Features a large, full-width prominent image alongside a tweet. */
    twitterSummaryCardWithLargeImage?: TwitterSummaryCardWithLargeImageCardType;
    /** `twitter:card` value `player` - [Player Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/player-card) - Embed a playable video or audio clip into a Tweet. */
    twitterPlayerCard?: TwitterPlayerCardType;
    /** `twitter:card` value `app` - [App Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/app-card) - Provides mobile app information along with a tweet to drive installs. */
    twitterAppCard?: TwitterAppCardType;
};
/**
 * `twitter:card` value `summary`
 *
 * The Summary Card can be used for many kinds of web content, from blog posts and news articles, to products and restaurants. It is designed to give the reader a preview of the content before clicking through to your website.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary
 */
export declare type TwitterSummaryCardType = {
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
/**
 * `twitter:card` value `summary_large_image`
 *
 * The Summary Card with Large Image features a large, full-width prominent image alongside a tweet. It is designed to give the reader a rich photo experience, and clicking on the image brings the user to your website.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary-card-with-large-image
 */
export declare type TwitterSummaryCardWithLargeImageCardType = {
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
/**
 * `twitter:card` value `player`
 *
 * Video and audio clips have a special place on the Twitter platform thanks to the Player Card. By implementing a few HTML meta tags to your website and following the Twitter Developer Policy, you can deliver your rich media to users across the globe.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/player-card
 */
export declare type TwitterPlayerCardType = {
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
/**
 * `twitter:card` value `app`
 *
 * The App Card represents mobile applications on Twitter and is aimed at driving installs. The App Card was designed to allow for a name, description and icon, and also to highlight attributes such as the rating and the price.
 *
 * https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/app-card
 */
export declare type TwitterAppCardType = {
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
/**
 * [Google's metadata tags.](https://support.google.com/webmasters/answer/79812?hl=en)
 *
 * Used to change how the search engine lists a site in Search.
 */
export declare type GoogleMetadata = {
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
