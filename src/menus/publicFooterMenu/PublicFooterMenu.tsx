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

const PublicFooterMenu = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg md={12} className="text-center text-md-start">
            <div className={styles.header}>Boost your sales</div>
            <p className="mb-4">
              Most Accurate Bulk Contact Database Provider!
            </p>
            <div className="d-flex w-75 justify-content-between mx-auto mx-md-0">
              <a href="https://www.facebook.com/listofcompaniesinusa">
                <FacebookLogo size={24} />
              </a>
              <a href="https://twitter.com/uscompanydata">
                <TwitterLogo size={24} />
              </a>
              <a href="https://www.aedin.com/company/listofcompaniesinusa">
                <LinkedinLogo size={24} />
              </a>
              <a href="https://www.pinterest.com/listofcompanies">
                <RedditLogo size={24} />
              </a>
              {/* <a href="https://www.reddit.com"><a><PinterestLogo size={24} /></a></a> */}
            </div>
          </Col>
          <Col lg md={12} className="text-center text-md-start pt-4 pt-md-0">
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
          <Col lg md={12} className="text-center text-md-start">
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
                <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/office-manager`}>
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
                <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/business-owners`}>
                  Business Owners
                </a>
              </li>
            </ul>
          </Col>
          <Col lg md={12} className="text-center text-md-start">
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
                <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/cryptocurrency`}>
                  Cryptocurrency
                </a>
              </li>
            </ul>
          </Col>
          <Col lg md={12} className="text-center text-md-start">
            Blogs
          </Col>
        </Row>
        <hr className="mt-4 mb-4" />
        <Row>
          <Col xs="12">
            <p className={styles.privacy}>
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/terms`}>
                Terms &amp; Conditions
              </a>{" "}
              &middot;{" "}
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`}>
                Privacy Policy
              </a>{" "}
              &middot;{" "}
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/ccpa`}>CCPA</a>{" "}
              &middot;{" "}
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/gdpr-ready`}>
                GDPR Ready
              </a>{" "}
              &middot;{" "}
              <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/legal-notice`}>
                Legal Notice
              </a>
            </p>
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <Image
              width={201}
              layout="fixed"
              height={61}
              src="/jozdata-logo-white.png"
              alt="usdata logo"
            />
          </Col>
          <Col xs={12}>
            <p className="text-center mb-0 mt-3">
              <small>
                &copy; All rights reserved &middot; <span>{getYear()}</span>{" "}
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PublicFooterMenu;
