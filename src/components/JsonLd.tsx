import React from 'react';

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Church", "Organization"],
        "@id": "https://fireflamemission.org/#organization",
        "name": "Fire Flame Mission",
        "alternateName": "அக்கினி ஜுவாலை ஊழியம்",
        "url": "https://fireflamemission.org",
        "logo": "https://fireflamemission.org/assets/founder.jpg",
        "image": "https://fireflamemission.org/assets/founder.jpg",
        "foundingDate": "1996",
        "description": "Proclaiming Christ Through Prayer, Teaching and Publications Since 1996. Founded by Pastor. V. Jeremias.",
        "founder": {
          "@type": "Person",
          "name": "Pastor. V. Jeremias",
          "alternateName": "பாஸ்டர் வி ஜெரோமியாஸ்",
          "jobTitle": "Founder & Senior Pastor"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "K.R. Complex, Chithambaranagar, P.W.D. Road",
          "addressLocality": "Nagercoil",
          "addressRegion": "Kanyakumari District",
          "postalCode": "629002",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+918870083746",
          "contactType": "customer service",
          "email": "fireflamemission07@gmail.com",
          "availableLanguage": ["English", "Tamil"]
        },
        "sameAs": [
          "https://wa.me/918870083746"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://fireflamemission.org/#website",
        "url": "https://fireflamemission.org",
        "name": "Fire Flame Mission",
        "description": "Fire Flame Mission - Timeless Christian Library, Prayer Ministry & Publications.",
        "publisher": {
          "@id": "https://fireflamemission.org/#organization"
        },
        "inLanguage": ["en", "ta"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://fireflamemission.org/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://fireflamemission.org"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://fireflamemission.org/about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Books",
            "item": "https://fireflamemission.org/books"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Sermons",
            "item": "https://fireflamemission.org/sermons"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Promises",
            "item": "https://fireflamemission.org/promises"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Ministries",
            "item": "https://fireflamemission.org/ministries"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Gallery",
            "item": "https://fireflamemission.org/gallery"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "Prayer Request",
            "item": "https://fireflamemission.org/prayer-request"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Contact",
            "item": "https://fireflamemission.org/contact"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
