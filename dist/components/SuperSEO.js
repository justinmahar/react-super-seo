"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperSEO = void 0;
const React = __importStar(require("react"));
const react_helmet_1 = require("react-helmet");
/**
 * See documentation: [SuperSEO](https://justinmahar.github.io/react-super-seo/?path=/story/components-superseo--page)
 *
 * An SEO component that adds a `title`, `description`, [OpenGraph](https://ogp.me/), and [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards) meta properties to the `head`.
 *
 * Also supports adding an [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) `lang` attribute to the `html` element.
 *
 * Uses sensible fallbacks where possible and features automatic [MIME type inference](https://justinmahar.github.io/react-super-seo/list-of-mime-types) for media URLs.
 */
function SuperSEO(props) {
    const title = props.title;
    const description = props.description;
    const lang = props.lang;
    const titleElement = title ? React.createElement("title", null, title) : undefined;
    const htmlAttributes = lang ? { lang } : undefined;
    const meta = [];
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
    return (React.createElement(React.Fragment, null,
        React.createElement(react_helmet_1.Helmet, null,
            props.contentType && React.createElement("meta", { httpEquiv: "content-type", content: props.contentType }),
            props.charset && React.createElement("meta", { charSet: props.charset })),
        React.createElement(react_helmet_1.Helmet, { htmlAttributes: htmlAttributes, meta: meta }, titleElement),
        typeof props.children !== 'undefined' && React.createElement(react_helmet_1.Helmet, null, props.children)));
}
exports.SuperSEO = SuperSEO;
function createOpenGraphMetadataObjects(data, fallbackTitle, fallbackDescription) {
    data = data ? data : {};
    const meta = [];
    // og:title
    if (data.ogTitle) {
        meta.push({
            property: 'og:title',
            content: data.ogTitle,
        });
    }
    else if (fallbackTitle) {
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
                meta.push(...createOpenGraphTypeArticleMetadataObjects(data.ogTypeObject));
                break;
            case 'book':
                meta.push(...createOpenGraphTypeBookMetadataObjects(data.ogTypeObject));
                break;
            case 'profile':
                meta.push(...createOpenGraphTypeProfileMetadataObjects(data.ogTypeObject));
                break;
            case 'website':
                // No additional properties needed for website.
                break;
            default:
                // Otherwise, assume they provided MetaPropertiesFunction themselves.
                if (data.ogTypeObject) {
                    const metaPropsFunction = data.ogTypeObject;
                    if (typeof metaPropsFunction === 'function') {
                        meta.push(...metaPropsFunction());
                    }
                }
                break;
        }
    }
    // og:image
    if (data.ogImage) {
        const images = Array.isArray(data.ogImage) ? data.ogImage : [data.ogImage];
        images.forEach((image) => {
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
        const audios = Array.isArray(data.ogAudio) ? data.ogAudio : [data.ogAudio];
        audios.forEach((audio) => {
            meta.push(...createOpenGraphAudioMetadataObjects(audio));
        });
    } // END og:audio
    // og:description
    if (data.ogDescription) {
        meta.push({
            property: 'og:description',
            content: data.ogDescription,
        });
    }
    else if (fallbackDescription) {
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
        data.ogLocaleAlternate.forEach((localeAlternate) => {
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
        const videos = Array.isArray(data.ogVideo) ? data.ogVideo : [data.ogVideo];
        videos.forEach((video) => {
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
function createOpenGraphImageMetadataObjects(image) {
    if (!image) {
        return [];
    }
    const meta = [];
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
        }
        else if (image.ogImage.startsWith('https')) {
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
        }
        else {
            // If not specified, infer the MIME type for common image formats
            const mimeTypes = {
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
            const mimeTypeKeys = Object.keys(mimeTypes);
            for (let i = 0; i < mimeTypeKeys.length; i++) {
                const extension = mimeTypeKeys[i];
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
function createOpenGraphVideoMetadataObjects(video) {
    if (!video) {
        return [];
    }
    const meta = [];
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
        }
        else if (video.ogVideo.startsWith('https')) {
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
        }
        else {
            // If not specified, infer the MIME type for common video formats
            const mimeTypes = {
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
            const mimeTypeKeys = Object.keys(mimeTypes);
            for (let i = 0; i < mimeTypeKeys.length; i++) {
                const extension = mimeTypeKeys[i];
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
function createOpenGraphAudioMetadataObjects(audio) {
    if (!audio) {
        return [];
    }
    const meta = [];
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
        }
        else if (audio.ogAudio.startsWith('https')) {
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
        }
        else {
            // If not specified, infer the MIME type for common audio formats
            const mimeTypes = {
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
            const mimeTypeKeys = Object.keys(mimeTypes);
            for (let i = 0; i < mimeTypeKeys.length; i++) {
                const extension = mimeTypeKeys[i];
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
function createOpenGraphTypeArticleMetadataObjects(article) {
    if (!article) {
        return [];
    }
    const meta = [];
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
        article.articleAuthor.forEach((authorUri) => {
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
        article.articleTag.forEach((tag) => {
            meta.push({
                property: 'article:tag',
                content: tag,
            });
        });
    }
    return meta;
}
function createOpenGraphTypeBookMetadataObjects(book) {
    if (!book) {
        return [];
    }
    const meta = [];
    // book:author
    if (book.bookAuthor) {
        book.bookAuthor.forEach((authorUri) => {
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
        book.bookTag.forEach((tag) => {
            meta.push({
                property: 'book:tag',
                content: tag,
            });
        });
    }
    return meta;
}
function createOpenGraphTypeProfileMetadataObjects(profile) {
    if (!profile) {
        return [];
    }
    const meta = [];
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
function createTwitterMetadataObjects(data, fallbackTitle, fallbackDescription) {
    if (!data) {
        return [];
    }
    const meta = [];
    if (data.twitterSummaryCard) {
        meta.push(...createTwitterSummaryCardMetadataObjects(data.twitterSummaryCard, fallbackTitle, fallbackDescription));
    }
    if (data.twitterSummaryCardWithLargeImage) {
        meta.push(...createTwitterSummaryCardWithLargeImageMetadataObjects(data.twitterSummaryCardWithLargeImage, fallbackTitle, fallbackDescription));
    }
    if (data.twitterPlayerCard) {
        meta.push(...createTwitterPlayerCardMetadataObjects(data.twitterPlayerCard, fallbackTitle, fallbackDescription));
    }
    if (data.twitterAppCard) {
        meta.push(...createTwitterAppCardMetadataObjects(data.twitterAppCard, fallbackTitle, fallbackDescription));
    }
    return meta;
}
function createTwitterSummaryCardMetadataObjects(summaryCard, fallbackTitle, fallbackDescription) {
    if (!summaryCard) {
        return [];
    }
    const meta = [];
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
    }
    else if (fallbackTitle) {
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
    }
    else if (fallbackDescription) {
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
function createTwitterSummaryCardWithLargeImageMetadataObjects(summaryCard, fallbackTitle, fallbackDescription) {
    if (!summaryCard) {
        return [];
    }
    const meta = [];
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
    }
    else if (fallbackTitle) {
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
    }
    else if (fallbackDescription) {
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
function createTwitterPlayerCardMetadataObjects(playerCard, fallbackTitle, fallbackDescription) {
    if (!playerCard) {
        return [];
    }
    const meta = [];
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
    }
    else if (fallbackTitle) {
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
    }
    else if (fallbackDescription) {
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
function createTwitterAppCardMetadataObjects(appCard, fallbackTitle, fallbackDescription) {
    if (!appCard) {
        return [];
    }
    const meta = [];
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
    }
    else if (fallbackTitle && (appCard.appCardAppIdIphone || appCard.appCardAppUrlIphone)) {
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
    }
    else if (fallbackTitle && (appCard.appCardAppIdIpad || appCard.appCardAppUrlIpad)) {
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
    }
    else if (fallbackTitle && (appCard.appCardAppIdGoogleplay || appCard.appCardAppUrlGoogleplay)) {
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
    }
    else if (fallbackDescription) {
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
function createGoogleMetadataObjects(data) {
    data = data ? data : {};
    const meta = [];
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
