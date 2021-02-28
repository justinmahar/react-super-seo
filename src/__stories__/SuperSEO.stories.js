import React from 'react';
import { SuperSEO } from '../components/SuperSEO';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'SEO',
  component: SuperSEO,
};

// The named exports define the stories
export const SEOStory = () => {
  const siteName = 'SEO Example';
  const siteDescription = 'This is an example description.';
  const siteImage = 'https://picsum.photos/1200/630';
  const siteImageAlt = 'Placeholder image.';
  return (
    <>
      <SuperSEO
        title={`${siteName} | Home`}
        description={siteDescription}
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: siteImage,
            ogImageAlt: siteImageAlt,
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: 'image/jpeg',
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: siteImage,
            summaryCardImageAlt: siteImageAlt,
            summaryCardSiteUsername: 'justinmahar',
          },
        }}
      />
      <div>
        <h1>SEO Example</h1>
        <p>
          If you inspect this iframe's elements, you can see that the title and meta tags in the{' '}
          <code>{`<head/>`}</code> element have been set.
        </p>
        <p>Click the "Open canvas in new tab" button (upper right) to view this iframe in its own tab.</p>
      </div>
      <div>
        <h4>Code: </h4>
        <code>
          <pre>{`const siteName = 'SEO Example';
const siteDescription = 'This is an example description.';
const siteImage = 'https://picsum.photos/1200/630';
const siteImageAlt = 'Placeholder image.';

// ...

<SuperSEO
  title={\`\${siteName} | Home\`}
  description={siteDescription}
  lang="en"
  openGraph={{
    ogImage: {
      ogImage: siteImage,
      ogImageAlt: siteImageAlt,
      ogImageWidth: 1200,
      ogImageHeight: 630,
      ogImageType: 'image/jpeg',
    },
  }}
  twitter={{
    twitterSummaryCard: {
      summaryCardImage: siteImage,
      summaryCardImageAlt: siteImageAlt,
      summaryCardSiteUsername: 'justinmahar',
    },
  }}
/>
`}</pre>
        </code>
      </div>
    </>
  );
};

SEOStory.story = {
  name: 'SEO',
};
