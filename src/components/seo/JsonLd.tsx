// src/components/seo/JsonLd.tsx
// Structured Data (Schema.org) for Google Rich Search Snippets.

interface EducationalOrgSchemaProps {
  url?: string;
}

export function EducationalOrganizationJsonLd({
  url = 'https://ayatbridge.academy',
}: EducationalOrgSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'AyatBridge Academy',
    alternateName: 'AyatBridge Online Quran Academy',
    url: url,
    logo: `${url}/logo.png`,
    description:
      'International online Quran academy connecting students and families worldwide with certified male and female Quran teachers. Flexible classes on Google Meet across USA, UK, and Europe.',
    sameAs: [
      'https://wa.me/447700000000',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
    },
    priceRange: '££',
    areaServed: [
      'United States',
      'United Kingdom',
      'Germany',
      'France',
      'Italy',
      'Spain',
      'Netherlands',
      'Canada',
      'Australia',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Quran & Islamic Courses',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Noorani Qaida for Beginners',
            description: 'Learn Arabic letters and foundational Quran reading.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Quran with Tajweed',
            description: 'Master the rules of authentic Quran recitation with Tajweed.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Quran Memorization (Hifz)',
            description: 'Structured Hifz program with daily revision.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
