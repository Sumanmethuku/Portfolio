/* eslint-disable */

import type { Metadata } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, SITE_NAME, SITE_KEYWORDS } from './constants';

export const generateMetadata = (
  title: string = '',
  description?: string,
  keywords?: string[],
  imageUrl?: string,
  path: string = '',
): Metadata => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;
  const pageDescription = description || SITE_DESCRIPTION;
  const pageKeywords = keywords || SITE_KEYWORDS;
  const url = `${SITE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: imageUrl ? [{ url: imageUrl }] : [{ url: `${SITE_URL}og-image.png` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: imageUrl ? [imageUrl] : [`${SITE_URL}og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};