import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const LegalNoticeMainView = () => {
  return (
    <Container className="static-content">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center">Legal Notice</h1>
          <section>
            <h2>Legal</h2>
            <p>uscompanydata.com owns the intellectual property rights to this website and its content.</p>
            <p>All forms of redistribution or reproduction of part or all of the materials, in any form or by any means, are strictly banned, including but not limited to:</p>
            <p>Extracts for private and non-use may not be printed or downloaded to a local hard disk for storage on your computer&apos;s hard drive.</p>
            <p>You are not permitted to disseminate or commercially exploit the content unless you obtain our express written consent to do so. You are also prohibited from transmitting or storing it on any other website or another type of electronic retrieval system without our express permission.</p>
          </section>
          <section>
            <h2>TRADE MARK</h2>
            <p>A trademark is a term, name, symbol, or device (or a combination of these) that distinguishes the goods or services of a person or business from the goods and services of others and recognizes them as belonging to that person or firm. A trademark informs consumers that the goods or services they purchase will be of consistent quality, and it also aids in the promotion of those goods or services.</p>
            <p>You are not entitled to use any trademark asset owned by uscompanydata.com unless you have obtained a license or other permission from uscompanydata.com following the terms of the agreement. Please get in touch with us if you have any issues with the trademark guidelines contained above.</p>
          </section>
          <section>
            <h2>DISCLAIMER</h2>
            <p>This website&apos;s content is given purely to give general information. The data for this page was given by CompanyData.com in the USA.</p>
            <p>We will not be liable for any loss or damage, including indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website, even if we have been advised of the possibility of such loss or damage.</p>
            <p>Every effort is being made to keep the website online and operational. UsCompanyData.com bears responsibility and will not be responsible for any damages from the website being temporarily unavailable due to technical causes beyond our control.</p>
          </section>
        </Col>
      </Row>
    </Container>
  )
};

export default LegalNoticeMainView;
