import React from "react";
import classNames from "classnames";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./styles.module.scss";

const TermsMainView = () => {
  return (
    <Container className={classNames("static-content", styles.sectionFix)}>
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center">Terms and Conditions</h1>
          <p>
            Welcome to EmailDatas, the premier provider of email marketing
            services to help grow your business. By using our services, you
            agree to be bound by the following terms and conditions:
          </p>
          <section>
            <h2>Service Description and Use</h2>
            <p>
              EmailDatas provides access to a comprehensive database of email
              addresses for marketing purposes. By using our services, you agree
              that you will use the email addresses only for legitimate
              marketing purposes and not for spamming, phishing, or any other
              illegal activity.
            </p>
          </section>
          <section>
            <h2>Subscription and Payment:</h2>
            <p>
              To access our database, you must purchase a subscription plan. We
              offer different plans to suit your needs, and you can cancel your
              subscription at any time. Payment for your subscription will be
              processed through our secure payment gateway.
            </p>
          </section>
          <section>
            <h2>Intellectual Property:</h2>
            <p>
              EmailDatas makes no warranties, express or implied, with respect
              to the accuracy, completeness, or suitability of the email
              addresses or other data provided through our services. We cannot
              guarantee that our data will result in increased sales or
              conversions.
            </p>
          </section>
          <section>
            <h2>Limitation of Liability:</h2>
            <p>
              In no event shall EmailDatas be liable for any direct, indirect,
              incidental, special, or consequential damages arising from the use
              or inability to use our services, even if we have been advised of
              the possibility of such damages.
            </p>
          </section>
          <section>
            <h2>Termination:</h2>
            <p>
              EmailDatas may terminate this agreement at any time if we suspect
              that you are engaging in illegal activity or violating the terms
              of this agreement. You may terminate this agreement at any time by
              canceling your subscription.
            </p>
          </section>
          <section>
            <h2>User Privacy:</h2>
            <p>
              EmailDatas respects the privacy of our users and complies with all
              applicable data protection laws. We collect and use personal data
              in accordance with our Privacy Policy, which you can access on our
              website.
            </p>
          </section>
          <section>
            <h2>Governing Law:</h2>
            <p>
              This agreement shall be governed by and construed in accordance
              with the laws of the jurisdiction in which EmailDatas operates.
              Any disputes arising from or related to this agreement shall be
              resolved through arbitration.
            </p>
          </section>
          <section>
            <h2>Updates to Terms and Conditions</h2>
            <p>
              EmailDatas may update these terms and conditions at any time
              without prior notice. We encourage you to review this page
              periodically to stay informed of any changes.
            </p>
          </section>
          <section>
            <p>
              By accessing or using our services, you acknowledge that you have
              read, understood, and agree to be bound by these terms and
              conditions. If you do not agree to these terms and conditions, do
              not access or use our services.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsMainView;
