import fs from "fs";
import { COMPLETE_DATABASE } from "../shared/seeds/completeDatabase";
import { REALTORS } from "../shared/seeds/realtors";
import { JOB_TITLES } from "../shared/seeds/jobTitles";
import { JOB_INDUSTRIES } from "../shared/seeds/jobIndustry";
import { COUNTRIES_DATABASE } from "../shared/seeds/countries";
import { CONSUMER_EMAIL_DATABASE } from "../shared/seeds/consumers";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://uscompanydata.com";

  const staticPages = fs
    .readdirSync("src/pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "_app.tsx",
        "api",
        ".DS_Store",
        "404.tsx",
        "site-map",
        "[companyDBState].tsx",
        "admin",
        "billing",
        "cart",
        "ccpa",
        "checkout",
        "index.tsx",
        "legal-notice",
        "sitemap.xml",
        "terms",
        "support",
        "gdpr-ready",
        "downloads",
        "redirect",
        "orders",
        "my-account",
        "privacy-policy",
        "all-orders",
        "generate-download-links",
        "test",
        "test.js",
        "dashboard",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const completeDatabaseUrls = COMPLETE_DATABASE?.map((element) => {
    return `${baseUrl}/${element.url?.toLowerCase()?.split("/").join("")}`;
  });

  const realtorsDatabaseUrls = REALTORS?.map((element) => {
    return `${baseUrl}/${element.url?.toLowerCase()?.split("/").join("")}`;
  });

  const jobTitlesDatabaseUrls = JOB_TITLES?.map((element) => {
    return `${baseUrl}/${element.url?.toLowerCase()?.split("/").join("")}`;
  });

  const jobIndustriesDatabaseUrls = JOB_INDUSTRIES?.map((element) => {
    return `${baseUrl}/${element.url?.toLowerCase()?.split("/").join("")}`;
  });

  const contriesDatabaseUrls = COUNTRIES_DATABASE?.map((element) => {
    return `${baseUrl}/${element.url?.toLowerCase()?.split("/").join("")}`;
  });

  const consumerDatabaseUrls = CONSUMER_EMAIL_DATABASE?.map((element) => {
    return `${baseUrl}/${element.url?.toLowerCase()?.split("/").join("")}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${staticPages
        .map((url) => {
          if (url === "https://leadslibrary.com/index.tsx") {
            return `
            <url>
            <loc>https://leadslibrary.com</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>1.00</priority>
          </url>
          `;
          }
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>1.00</priority>
            </url>
          `;
        })
        .join("")}
        ${completeDatabaseUrls
          .map((url) => {
            return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <priority>0.80</priority>
                </url>
              `;
          })
          .join("")}
          ${realtorsDatabaseUrls
            .map((url) => {
              return `
                  <url>
                    <loc>${url}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <priority>0.80</priority>
                  </url>
                `;
            })
            .join("")}
            ${jobTitlesDatabaseUrls
              .map((url) => {
                return `
                      <url>
                        <loc>${url}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <priority>0.80</priority>
                      </url>
                    `;
              })
              .join("")}
              ${jobIndustriesDatabaseUrls
                .map((url) => {
                  return `
                        <url>
                          <loc>${url}</loc>
                          <lastmod>${new Date().toISOString()}</lastmod>
                          <priority>0.80</priority>
                        </url>
                      `;
                })
                .join("")}
                ${contriesDatabaseUrls
                  .map((url) => {
                    return `
                            <url>
                              <loc>${url}</loc>
                              <lastmod>${new Date().toISOString()}</lastmod>
                              <priority>0.80</priority>
                            </url>
                          `;
                  })
                  .join("")}
                  ${consumerDatabaseUrls
                    .map((url) => {
                      return `
                              <url>
                                <loc>${url}</loc>
                                <lastmod>${new Date().toISOString()}</lastmod>
                                <priority>0.80</priority>
                              </url>
                            `;
                    })
                    .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
