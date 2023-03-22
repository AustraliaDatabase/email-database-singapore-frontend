import React from "react";
import classNames from "classnames";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./styles.module.scss";

const CCPAMainView = () => {
  return (
    <Container className={classNames("static-content", styles.sectionFix)}>
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center">CCPA Privacy Policy</h1>
          <p>
            EmailDatas (the “Company,” “we,” “us,” or “our”) respects your
            privacy and is committed to complying with the California Consumer
            Privacy Act of 2018 (CCPA) and other applicable data privacy laws.
            This policy explains how we collect, use, disclose, and protect
            personal information that we collect from California residents who
            use our services.
          </p>
          <section>
            <h2>Information We Collect</h2>
            <p>
              <b>
                We may collect the following categories of personal information
                from California residents who use our services:
              </b>
            </p>
            <ul>
              <li>Identifiers, such as name, email address, and IP address</li>
              <li>
                Personal information categories listed in the California
                Customer Records statute (Cal. Civ. Code § 1798.80(e)), such as
                address, telephone number, and credit card number
              </li>
              <li>
                Commercial information, such as products or services purchased
              </li>
              <li>
                Internet or other electronic network activity information, such
                as browsing history or search queries
              </li>
              <li>Geolocation data</li>
              <li>
                Inferences drawn from other personal information, such as
                preferences or characteristics
              </li>
            </ul>
            <p>
              <b>
                We may collect personal information from the following sources:
              </b>
            </p>
            <ol>
              <li>
                Directly from you, such as when you provide information on our
                website or purchase our services
              </li>
              <li>
                Indirectly from you, such as when we track your use of our
                website or interact with you through social media
              </li>
              <li>
                Third-party sources, such as data brokers or advertising
                partners
              </li>
            </ol>
            <p>
              <b>
                We may collect personal information for the following purposes:
              </b>
            </p>
            <ul>
              <li>To provide our services to you</li>
              <li>To communicate with you about our services</li>
              <li>To analyze and improve our services</li>
              <li>To personalize your experience on our website</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2>Use of Personal Information</h2>
            <p>
              <b>We may use personal information for the following purposes:</b>
            </p>
            <ul>
              <li>To provide our services to you</li>
              <li>To communicate with you about our services</li>
              <li>To personalize your experience on our website</li>
              <li>To analyze and improve our services</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>
              <b>
                We may share personal information with the following categories
                of third parties:
              </b>
            </p>
            <ul>
              <li>
                Service providers, such as hosting or payment processing
                companies
              </li>
              <li>
                Advertising partners, such as ad networks or social media
                platforms
              </li>
              <li>Affiliates or subsidiaries of our company</li>
              <li>Law enforcement or regulatory agencies</li>
            </ul>
            <p>
              We do not sell personal information to third parties, and we do
              not have actual knowledge that we sell personal information of
              minors under 16 years of age without their affirmative
              authorization.
            </p>
          </section>
          <section>
            <h2>Individual Rights</h2>
            <p>
              <b>You have the following rights under the CCPA:</b>
            </p>
            <ul>
              <li>
                Right to know what personal information we collect: You have the
                right to request that we disclose what personal information we
                have collected about you over the past 12 months and the
                categories of sources from which the personal information was
                collected.
              </li>
              <li>
                Right to request deletion of personal information: You have the
                right to request that we delete personal information that we
                have collected from you, subject to certain exceptions.
              </li>
              <li>
                Right to opt-out of sale of personal information: You have the
                right to opt-out of the sale of your personal information. We do
                not sell personal information to third parties, but we may
                disclose personal information for valuable consideration, such
                as for interest-based advertising.
              </li>
              <li>
                Right to non-discrimination for exercising privacy rights: We
                will not discriminate against you for exercising your privacy
                rights, such as by denying you services, charging you different
                prices or rates, or providing you with a different level or
                quality of services.
              </li>
            </ul>
            <p>
              To exercise your rights, please submit a verifiable consumer
              request to us by visiting our Contact Us page. We will respond to
              your request within 45 days, unless we need additional time, in
              which case we will notify you.
            </p>
          </section>
          <section>
            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect personal information from
              unauthorized access, use, disclosure, and destruction. These
              measures include
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CCPAMainView;
