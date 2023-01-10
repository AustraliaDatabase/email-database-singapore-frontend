import { IFooterLinks, ISocialMediaLinks } from "./interfaces";
import { LinkedinLogo, FacebookLogo } from "phosphor-react";

export const FOOTER_LINKS: IFooterLinks[] = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Pre-Made Lists",
    route: "/pre-made-list",
  },
  {
    name: "Price plans",
    route: "/price-plans",
  },
  {
    name: "Legal Notice",
    route: "/legal-notice",
  },
  {
    name: "FAQs",
    route: "/faqs",
  },
  {
    name: "Privacy Policy",
    route: "/privacy-policy",
  },
  {
    name: "Do Not Sell My Information",
    route: "/ccpa-opt-out",
  },
  // {
  //   name: "About Us",
  //   route: "/about-us",
  // },
  {
    name: "CCPA Privacy Policy",
    route: "/ccpa-privacy-policy",
  },
  // {
  //   name: "Review",
  //   route: "/review",
  // },
  // {
  //   name: "Site Map",
  //   route: "/site-map",
  // },
  {
    name: "Terms and Conditions",
    route: "/terms-and-conditions",
  },
  // {
  //   name: "Blogs",
  //   route: "/blogs",
  // },
  {
    name: "Contact Us",
    route: "/contact-us",
  },
];
