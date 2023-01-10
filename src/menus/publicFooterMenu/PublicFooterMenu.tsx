import Image from "next/image";
import {
  FacebookLogo,
  LinkedinLogo,
  RedditLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getYear } from "../../shared/utils";
import styles from "./publicFooterMenu.module.scss";
import CopyRightContent from "./views/copyRightContent/CopyRightContent";
import DatabasePricing from "./views/databasePricing/DatabasePricing";
import FooterLogo from "./views/footerLogo/FooterLogo";
import MenuLinkList from "./views/menuLinkList/MenuLinkList";
import SocialIcons from "./views/socialIcons/SocialIcons";

const JOB_LIST = [
  { name: "CEO", url: "/ceo-email-list" },
  { name: "CFO", url: "/cfo-email-lists" },
  { name: "HR", url: "#" },
  { name: "Chairman", url: "/chairman-email-list" },
];

const INDUSTRY_LIST = [
  { name: "Hospital", url: "/hospital-and-clinic-email-list" },
  { name: "Financial", url: "/finance-email-list" },
  { name: "Government", url: "/government-email-list" },
  { name: "Retail", url: "/retail-email-list" },
];

const LOCATION_LIST = [
  { name: "US States", url: "/pre-made-list/states" },
  { name: "US Cities", url: "/pre-made-list/cities" },
  { name: "International", url: "/international" },
];

const PublicFooterMenu = () => {
  return (
    <footer className={styles.footer}>
      <Row>
        <Col lg md={12}>
          <Row className={styles.firstRows}>
            <FooterLogo />
            <DatabasePricing title="Job Titles" list={JOB_LIST} />
            <DatabasePricing title="Industries" list={INDUSTRY_LIST} />
            <DatabasePricing title="Locations" list={LOCATION_LIST} />
            {/* <Col lg md={6} className="text-center text-md-start pt-4 pt-md-0">
              <div className={styles.header}>USA</div>
              <ul>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/list-of-all-email-lists`}
                  >
                    Business Database
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/us-company-database-by-state`}
                  >
                    Business Database By State
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/real-estate-agent-email-list`}
                  >
                    Realtors
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/realtors-by-state`}
                  >
                    Realtors By State
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/general-contractors-and-home-builders`}
                  >
                    Home Builders & Contractors
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/architects`}>
                    Architect & Building Designers
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg md={6} className="text-center text-md-start">
              <div className={styles.header}>Job Titles</div>
              <ul>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/accounts-receivable`}
                  >
                    Accounts Receivable
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/accounts-payable`}
                  >
                    Account Payable
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/cfo`}>CFO</a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/ceo`}>CEO</a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/office-manager`}
                  >
                    Office Managers
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/controller`}>
                    Controllers
                  </a>
                </li>
                <li>
                  <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/chairman`}>
                    Chairmans
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/business-owners`}
                  >
                    Business Owners
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg md={6} className="text-center text-md-start">
              <div className={styles.header}>Industries</div>
              <ul>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/super-backers-email-database`}
                  >
                    Super Backers
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/crowdfunding-backer-database`}
                  >
                    Crowdfunding Backers
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cryptocurrency`}
                  >
                    Cryptocurrency
                  </a>
                </li>
              </ul>
            </Col> */}
          </Row>
          <Row className={styles.lastRows}>
            <SocialIcons />
          </Row>
        </Col>
        <Col lg md={12}>
          <Row className={styles.firstRows}>
            <MenuLinkList />
          </Row>
          <Row className={styles.lastRows}>
            <CopyRightContent />
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </footer>
  );
};

export default PublicFooterMenu;
