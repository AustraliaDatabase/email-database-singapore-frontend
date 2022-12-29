import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const CCPAMainView = () => {
  return (
    <Container className="static-content">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center">Privacy Policy</h1>
          <section>
            <h2>
              Please do not sell my personal information and remove me from your
              database.
            </h2>
            <p>
              If you are a CA State resident, you have the ability to opt-out of
              the “selling” of your Personal Data and to request that your
              information be deleted from our system in accordance with the
              California Consumer Protection Act. Filling out the webform on
              this page will allow you to request to exercise your right to
              opt-out.
            </p>
            <p>
              Following the terms of our Privacy Notice, we only receive and
              analyze information on businesses and business professionals. We
              make every effort not to gather any actual person’s personal
              information, which we do not process for our commercial
              objectives.
            </p>
            <p>
              You can exercise your right to removal and opt-out by emailing
              info@uscompanydata.com with your full name and the data you wish
              to be erased attached to your request. We may want extra
              information from you in order to verify your identity and accept
              your request.
            </p>
          </section>
          <section>
            <h2>CCPA READY</h2>
            <p>
              The Californian Consumer Privacy Act (“CCPA”) is a piece of
              legislation that was enacted to protect the data privacy rights of
              residents of the Golden State. As a result of the Act, they are
              given the opportunity to choose whether or not their information
              is utilized in a manner that they find objectionable.
            </p>
            <p>
              Personal information about you that has been made public by you is
              only collected in a professional context and shared with third
              parties strictly to serve you better.
            </p>
            <p>
              According to the applicable rules, we’ve conducted a privacy audit
              with the assistance of our legal experts and strengthened our data
              protection capabilities. We updated our privacy policies, terms of
              service, and procedures for all information processing activities.
            </p>
            <p>
              Please review the following information to learn more about the
              types of data we gather, how we use them, and your rights under
              the CCPA.
            </p>
            <h3>Personal Information We Collect:</h3>
            <ul>
              <li>Full Contact Name</li>
              <li>Company Email Address</li>
              <li>Position</li>
              <li>Company Phone Numbers (general and direct)</li>
              <li>Company Mailing Address</li>
              <li>Social Links (Public)</li>
            </ul>
            <h3>What We Use and Why We Use It:</h3>
            <ul>
              <li>We give our customers with accurate business data that they can use to promote their goods and services through direct marketing to the appropriate individuals (decision-makers, influencers, champions, and so on);
              Increasing the visibility of your company in web searches.</li>
              <li>Facilitating your interaction with services and tools on our site, such as live chat;</li>
              <li>Providing you with our current and future offerings,</li>
              <li>Improving your user experience and the functionality of our products;</li>
            </ul>
            <h3>How We Gather Information:</h3>
            <ul>
              <li>Public Information, which may have been made public by you or by a third party with your permission.</li>
              <li>Both directly and indirectly as a result of website user behavior.</li>
            </ul>
            <h3>Rights to Request Deletion:</h3>
            <p><b>With some restrictions, you can ask that we remove any of your private information that we process.</b></p>
            <p>Unless an exception applies, once we obtain your valid request, we shall erase (and request that our service providers and customers also delete) your personal info from our systems (and ask that our service providers and customers do the same).</p>
            <h3>However, in the following circumstances, we may refuse to remove your personal data:</h3>
            <ol>
              <li>To complete the transaction for which the personal information was collected, provide a good or service requested by a consumer, take actions reasonably anticipated in the context of our continuing business relationship with that consumer, or even undertake our contract with that consumer.</li>
              <li>Detect security incidents, guard against harmful, misleading, fraudulent, or unlawful conduct, and bring criminal charges against individuals responsible.</li>
              <li>Troubleshoot products to locate and correct faults that affect their intended operation.</li>
              <li>Exercise free speech, protect another consumer’s right to free expression, or exercise another legal right.</li>
              <li>Adhere to the California Electronic Communications Privacy Act (1546 et seq.).</li>
              <li>Conduct public or peer-reviewed science, historical, or statistical research in the interest of the public that complies with all of the other relevant ethics and privacy laws, when the deletion of the information would almost certainly render the research impossible or significantly impair its accomplishment if the consumer originally given informed consent.</li>
              <li>Allow for only internal uses that are fairly matched with consumer expectations depending on the nature of the consumer’s relationship with us.</li>
              <li>Adhere to a legal requirement.</li>
              <li>Use the information for other internal and legitimate purposes that are appropriate with the context in which the consumer submitted it.</li>
            </ol>
            <h3>Your CPPA Rights; Access to Certain Information and Data Portability</h3>
            <ul>
              <li>The types of private details about you that we gathered</li>
              <li>The types of resources from which we gathered personal information</li>
              <li>The business or commercial reason for which we gather or sell your personal information</li>
              <li>The types of 3rd parties with whom we disclose personal information;</li>
              <li>The particular pieces of personal information about you that we collected (also called a data portability request).</li>
            </ul>
            <h3>Right to Opt-Out of Personal Information Sale or Sharing:</h3>
            <p><b>According to the CPPA, you have the following rights, which you may exercise at any moment, and we pledge to abide by them accordingly:</b></p>
            <ol>
              <li>To direct a firm that sells or discloses personal information about a consumer with third parties to refrain from doing so. This right is sometimes described to as the right to opt-out of the sale or sharing of personal information.</li>
              <li>A business that sells or shares a consumer’s personal information with a third party shall notify consumers, according to subdivision (a) of Section 1798.135, that this information may be sold or shared and that consumers have the “right to opt-out” of such sale or sharing.</li>
              <li>Regardless of subdivision (a), a business shall not sell or share personal information about consumers if the company has actual knowledge that the consumer is less than 16 years of age, except if the consumer, in the case of consumers at least thirteen years of age but less than sixteen years of age, or the consumer’s parent or legal guardian, in the case of consumers under the age of 13, has affirmatively consented. A firm that willfully disregards a consumer’s age is assumed to have actual knowledge of the consumer’s age.</li>
              <li>A business that a consumer has directed not to sell or share the consumer’s personal information, or that has not received consent to sell or share the minor consumer’s private info, is prohibited from selling or sharing the consumer’s personal information, according to paragraph (4) of subdivision (c) of Section 1798.135.</li>
            </ol>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CCPAMainView;
