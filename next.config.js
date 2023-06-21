/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    NEXT_PUBLIC_TAWKTO_PROPERTY: process.env.NEXT_PUBLIC_TAWKTO_PROPERTY,
    NEXT_PUBLIC_MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    NEXT_PUBLIC_MAILCHIMP_API_SERVER:
      process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER,
    NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID:
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
    NEXT_PUBLIC_CAPTCHA_API_KEY: process.env.NEXT_PUBLIC_CAPTCHA_API_KEY,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:
      process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_PUBLIC_TAWKTO_ID: process.env.NEXT_PUBLIC_TAWKTO_ID,
  },

  async redirects() {
    return [
      {
        source: "/alternative-for-bookyourdata",
        destination: "/",
        permanent: true,
      },
      {
        source: "/alternative-for-infousa",
        destination: "/",
        permanent: true,
      },
      {
        source: "/alternative-for-leadgenius-com",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-com",
        destination: "/",
        permanent: true,
      },
      {
        source: "/databaseusa",
        destination: "/",
        permanent: true,
      },
      {
        source: "/emaildatas-vs-experian",
        destination: "/",
        permanent: true,
      },
      {
        source: "/exactdata-review",
        destination: "/",
        permanent: true,
      },
      {
        source: "/insideview-review",
        destination: "/",
        permanent: true,
      },
      {
        source: "/lead411-review",
        destination: "/",
        permanent: true,
      },
      {
        source: "/listgiant-review",
        destination: "/",
        permanent: true,
      },
      {
        source: "/salesgenie-review",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uscompanydata-reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/zoominfo-review",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["firebasestorage.googleapis.com"],
    formats: ["image/avif", "image/webp"],
  },
};
