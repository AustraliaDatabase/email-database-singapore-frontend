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
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["firebasestorage.googleapis.com"],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/email/alabama-email-list",
        destination: "/alabama-business-list",
        permanent: true,
      },
      {
        source: "/email/alaska-email-list",
        destination: "/alaska-business-list",
        permanent: true,
      },
      {
        source: "/email/arkansas-email-list",
        destination: "/arkansas-business-list",
        permanent: true,
      },
      {
        source: "/email/arizona-email-list",
        destination: "/arizona-business-list",
        permanent: true,
      },
      {
        source: "/email/california-email-list",
        destination: "/california-business-list",
        permanent: true,
      },
      {
        source: "/email/colorado-email-list",
        destination: "/colorado-business-list",
        permanent: true,
      },
      {
        source: "/email/connecticut-email-list",
        destination: "/connecticut-business-list",
        permanent: true,
      },
      {
        source: "/email/washington-d-c-email-list",
        destination: "/washington-d-c-business-list",
        permanent: true,
      },
      {
        source: "/email/delaware-email-list",
        destination: "/delaware-business-list",
        permanent: true,
      },
      {
        source: "/email/florida-email-list",
        destination: "/florida-business-list",
        permanent: true,
      },
      {
        source: "/email/georgia-email-list",
        destination: "/georgia-business-list",
        permanent: true,
      },
      {
        source: "/email/guam-email-list",
        destination: "/guam-business-list",
        permanent: true,
      },
      {
        source: "/email/hawaii-email-list",
        destination: "/hawaii-business-list",
        permanent: true,
      },
      {
        source: "/email/iowa-email-list",
        destination: "/iowa-business-list",
        permanent: true,
      },
      {
        source: "/email/idaho-email-list",
        destination: "/idaho-business-list",
        permanent: true,
      },
      {
        source: "/email/illinois-email-list",
        destination: "/illinois-business-list",
        permanent: true,
      },
      {
        source: "/email/indiana-email-list",
        destination: "/indiana-business-list",
        permanent: true,
      },
      {
        source: "/email/kansas-email-list",
        destination: "/kansas-business-list",
        permanent: true,
      },
      {
        source: "/email/kentucky-email-list",
        destination: "/kentucky-business-list",
        permanent: true,
      },
      {
        source: "/email/louisiana-email-list",
        destination: "/louisiana-business-list",
        permanent: true,
      },
      {
        source: "/email/massachusetts-email-list",
        destination: "/massachusetts-business-list",
        permanent: true,
      },
      {
        source: "/email/maryland-email-list",
        destination: "/maryland-business-list",
        permanent: true,
      },
      {
        source: "/email/maine-email-list",
        destination: "/maine-business-list",
        permanent: true,
      },
      {
        source: "/email/michigan-email-list",
        destination: "/michigan-business-list",
        permanent: true,
      },
      {
        source: "/email/minnesota-email-list",
        destination: "/minnesota-business-list",
        permanent: true,
      },
      {
        source: "/email/missouri-email-list",
        destination: "/missouri-business-list",
        permanent: true,
      },
      {
        source: "/email/mississippi-email-list",
        destination: "/mississippi-business-list",
        permanent: true,
      },
      {
        source: "/email/montana-email-list",
        destination: "/montana-business-list",
        permanent: true,
      },
      {
        source: "/email/north-dakota-email-list",
        destination: "/north-dakota-business-list",
        permanent: true,
      },
      {
        source: "/email/nebraska-email-list",
        destination: "/nebraska-business-list",
        permanent: true,
      },
      {
        source: "/email/new-hampshire-email-list",
        destination: "/new-hampshire-business-list",
        permanent: true,
      },
      {
        source: "/email/new-jersey-email-list",
        destination: "/new-jersey-business-list",
        permanent: true,
      },
      {
        source: "/email/new-mexico-email-list",
        destination: "/new-mexico-business-list",
        permanent: true,
      },
      {
        source: "/email/nevada-email-list",
        destination: "/nevada-business-list",
        permanent: true,
      },
      {
        source: "/email/new-york-email-list",
        destination: "/new-york-business-list",
        permanent: true,
      },
      {
        source: "/email/north-carolina-email-list",
        destination: "/north-carolina-business-list",
        permanent: true,
      },
      {
        source: "/email/ohio-email-list",
        destination: "/ohio-business-list",
        permanent: true,
      },
      {
        source: "/email/oklahoma-email-list",
        destination: "/oklahoma-business-list",
        permanent: true,
      },
      {
        source: "/email/oregon-email-list",
        destination: "/oregon-business-list",
        permanent: true,
      },
      {
        source: "/email/pennsylvania-email-list",
        destination: "/pennsylvania-business-list",
        permanent: true,
      },
      {
        source: "/email/puerto-rico-email-list",
        destination: "/puerto-rico-business-list",
        permanent: true,
      },
      {
        source: "/email/rhode-island-email-list",
        destination: "/rhode-island-business-list",
        permanent: true,
      },
      {
        source: "/email/south-carolina-email-list",
        destination: "/south-carolina-business-list",
        permanent: true,
      },
      {
        source: "/email/south-dakota-email-list",
        destination: "/south-dakota-business-list",
        permanent: true,
      },
      {
        source: "/email/tennessee-email-list",
        destination: "/tennessee-business-list",
        permanent: true,
      },
      {
        source: "/email/texas-email-list",
        destination: "/texas-business-list",
        permanent: true,
      },
      {
        source: "/email/utah-email-list",
        destination: "/utah-business-list",
        permanent: true,
      },
      {
        source: "/email/virginia-email-list",
        destination: "/virginia-business-list",
        permanent: true,
      },
      {
        source: "/email/virgin-islands-email-list",
        destination: "/virgin-islands",
        permanent: true,
      },
      {
        source: "/email/vermont-email-list",
        destination: "/vermont-business-list",
        permanent: true,
      },
      {
        source: "/email/washington-email-database",
        destination: "/washington-business-database",
        permanent: true,
      },
      {
        source: "/email/wisconsin-email-list",
        destination: "/wisconsin-business-list",
        permanent: true,
      },
      {
        source: "/email/west-virginia-email-list",
        destination: "/west-virginia-business-list",
        permanent: true,
      },
      {
        source: "/email/wyoming-email-list",
        destination: "/wyoming-business-list",
        permanent: true,
      },
      {
        source: "/email/maryland-email-list",
        destination: "/maryland-business-list",
        permanent: true,
      },
      {
        source: "/realtor/alabama-realtors",
        destination: "/alabama-realtors",
        permanent: true,
      },
      {
        source: "/realtor/alaska-realtors",
        destination: "/alaska-realtors",
        permanent: true,
      },
      {
        source: "/realtor/arizona-realtors",
        destination: "/arizona-realtors",
        permanent: true,
      },
      {
        source: "/realtor/arkansas-realtors",
        destination: "/arkansas-realtors",
        permanent: true,
      },
      {
        source: "/realtor/colorado-realtors",
        destination: "/colorado-realtors",
        permanent: true,
      },
      {
        source: "/realtor/connecticut-realtors",
        destination: "/connecticut-realtors",
        permanent: true,
      },
      {
        source: "/realtor/delaware-realtors",
        destination: "/delaware-realtors",
        permanent: true,
      },
      {
        source: "/realtor/realtors-georgia",
        destination: "/realtors-georgia",
        permanent: true,
      },
      {
        source: "/realtor/hawaii-realtors",
        destination: "/hawaii-realtors",
        permanent: true,
      },
      {
        source: "/realtor/idaho-realtors",
        destination: "/idaho-realtors",
        permanent: true,
      },
      {
        source: "/realtor/illinois-realtors",
        destination: "/illinois-realtors",
        permanent: true,
      },
      {
        source: "/realtor/indiana-realtors",
        destination: "/indiana-realtors",
        permanent: true,
      },
      {
        source: "/realtor/iowa-realtors",
        destination: "/iowa-realtors",
        permanent: true,
      },
      {
        source: "/realtor/kansas-realtors",
        destination: "/kansas-realtors",
        permanent: true,
      },
      {
        source: "/realtor/kentucky-realtors",
        destination: "/kentucky-realtors",
        permanent: true,
      },
      {
        source: "/realtor/louisiana-realtors",
        destination: "/louisiana-realtors",
        permanent: true,
      },
      {
        source: "/realtor/maine-realtors",
        destination: "/maine-realtors",
        permanent: true,
      },
      {
        source: "/realtor/maryland-realtors",
        destination: "/maryland-realtors",
        permanent: true,
      },
      {
        source: "/realtor/massachusetts-realtors",
        destination: "/massachusetts-realtors",
        permanent: true,
      },
      {
        source: "/realtor/michigan-realtors",
        destination: "/michigan-realtors",
        permanent: true,
      },
      {
        source: "/realtor/minnesota-realtors",
        destination: "/minnesota-realtors",
        permanent: true,
      },
      {
        source: "/realtor/mississippi-realtors",
        destination: "/mississippi-realtors",
        permanent: true,
      },
      {
        source: "/realtor/missouri-realtors",
        destination: "/missouri-realtors",
        permanent: true,
      },
      {
        source: "/realtor/montana-realtors",
        destination: "/montana-realtors",
        permanent: true,
      },
      {
        source: "/realtor/nebraska-realtors",
        destination: "/nebraska-realtors",
        permanent: true,
      },
      {
        source: "/realtor/nevada-realtors",
        destination: "/nevada-realtors",
        permanent: true,
      },
      {
        source: "/realtor/new-hampshire-realtors",
        destination: "/new-hampshire-realtors",
        permanent: true,
      },
      {
        source: "/realtor/new-jersey-realtors",
        destination: "/new-jersey-realtors",
        permanent: true,
      },
      {
        source: "/realtor/new-mexico-realtors",
        destination: "/new-mexico-realtors",
        permanent: true,
      },
      {
        source: "/realtor/new-york-realtors",
        destination: "/new-york-realtors",
        permanent: true,
      },
      {
        source: "/realtor/north-carolina-realtors",
        destination: "/north-carolina-realtors",
        permanent: true,
      },
      {
        source: "/realtor/north-dakota-realtors",
        destination: "/north-dakota-realtors",
        permanent: true,
      },
      {
        source: "/realtor/ohio-realtors",
        destination: "/ohio-realtors",
        permanent: true,
      },
      {
        source: "/realtor/oklahoma-realtors",
        destination: "/oklahoma-realtors",
        permanent: true,
      },
      {
        source: "/realtor/oregon-realtors",
        destination: "/oregon-realtors",
        permanent: true,
      },
      {
        source: "/realtor/pennsylvania-realtors",
        destination: "/pennsylvania-realtors",
        permanent: true,
      },
      {
        source: "/realtor/south-carolina-realtors",
        destination: "/south-carolina-realtors",
        permanent: true,
      },
      {
        source: "/realtor/south-dakota-realtors",
        destination: "/south-dakota-realtors",
        permanent: true,
      },
      {
        source: "/realtor/tennessee-realtors",
        destination: "/tennessee-realtors",
        permanent: true,
      },
      {
        source: "/realtor/texas-realtors",
        destination: "/texas-realtors",
        permanent: true,
      },
      {
        source: "/realtor/utah-realtors",
        destination: "/utah-realtors",
        permanent: true,
      },
      {
        source: "/realtor/vermont-realtors",
        destination: "/vermont-realtors",
        permanent: true,
      },
      {
        source: "/realtor/virginia-realtors",
        destination: "/virginia-realtors",
        permanent: true,
      },
      {
        source: "/realtor/washington-realtors",
        destination: "/washington-realtors",
        permanent: true,
      },
      {
        source: "/realtor/district-of-columbia-realtors",
        destination: "/district-of-columbia-realtors",
        permanent: true,
      },
      {
        source: "/realtor/west-virginia-realtors",
        destination: "/west-virginia-realtors",
        permanent: true,
      },
      {
        source: "/realtor/wisconsin-realtors",
        destination: "/wisconsin-realtors",
        permanent: true,
      },
      {
        source: "/realtor/wyoming-realtors",
        destination: "/wyoming-realtors",
        permanent: true,
      },
      {
        source: "/job-title/accounts-receivable",
        destination: "/accounts-receivable",
        permanent: true,
      },
      {
        source: "/job-title/accounts-payable",
        destination: "/accounts-payable",
        permanent: true,
      },
      {
        source: "/job-title/cfo",
        destination: "/cfo",
        permanent: true,
      },
      {
        source: "/job-title/ceo",
        destination: "/ceo",
        permanent: true,
      },
      {
        source: "/job-title/office-manager",
        destination: "/office-manager",
        permanent: true,
      },
      {
        source: "/job-title/controller",
        destination: "/controller",
        permanent: true,
      },
      {
        source: "/job-title/chairman",
        destination: "/chairman",
        permanent: true,
      },
      {
        source: "/job-title/business-owners",
        destination: "/business-owners",
        permanent: true,
      },
      {
        source: "/industry/architects",
        destination: "/architects",
        permanent: true,
      },
      {
        source: "/industry/general-contractors-and-home-builders",
        destination: "/general-contractors-and-home-builders",
        permanent: true,
      },
      {
        source: "/industry/cryptocurrency",
        destination: "/cryptocurrency",
        permanent: true,
      },
      {
        source: "/cryptocurrency/",
        destination: "/cryptocurrency",
        permanent: true,
      },
      {
        source: "/industry/super-backers-email-database",
        destination: "/super-backers-email-database",
        permanent: true,
      },
      {
        source: "/industry/crowdfunding-backer-database",
        destination: "/crowdfunding-backer-database",
        permanent: true,
      },
      {
        source: "/list-of-all-email-lists",
        destination: "/list-of-all-us-companies",
        permanent: true,
      },
      {
        source: "/us-email-database-by-state",
        destination: "/us-company-database-by-state",
        permanent: true,
      },
      {
        source: "/singapore-consumer-email-list",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uae-companies-list",
        destination: "/",
        permanent: true,
      },
      {
        source: "/singapore-email-list",
        destination: "/",
        permanent: true,
      },
      {
        source: "/switzerland-consumer-email-list",
        destination: "/",
        permanent: true,
      },
      {
        source: "/canada-business-database",
        destination: "/",
        permanent: true,
      },
      {
        source: "/germany-consumer-email-list",
        destination: "/",
        permanent: true,
      },
      {
        source: "/italy-consumer-email-list",
        destination: "/",
        permanent: true,
      },
      {
        source: "/australia-consumer-email-list",
        destination: "/",
        permanent: true,
      },
      {
        source: "/consumer-emails",
        destination: "/",
        permanent: true,
      },
      {
        source: "/other-countries",
        destination: "/",
        permanent: true,
      },
      {
        source: "/realtor/rhode-island-realtors",
        destination: "/rhode-island-realtors",
        permanent: true,
      },
      {
        source: "/us-company-database-by-state/page-3",
        destination: "/",
        permanent: true,
      },
      {
        source: "/us-company-database-by-state/page-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/us-company-database-by-state/page-5",
        destination: "/",
        permanent: true,
      },
      {
        source: "/realtors-by-state/page-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/doctor-database",
        destination: "/",
        permanent: true,
      },
      {
        source: "/us-email-database-by-states",
        destination: "/",
        permanent: true,
      },{
        source: "/realtor/real-estate-agent-email-list",
        destination: "/real-estate-agent-email-list",
        permanent: true,
      },
      {
        source: "/guam-business-list",
        destination: "/",
        permanent: true,
      }
    ];
  },
};
