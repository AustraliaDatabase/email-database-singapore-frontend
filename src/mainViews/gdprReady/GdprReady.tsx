import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const GdprReadyMainView = () => {
  return (
    <Container className="static-content">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center">GDPR Ready</h1>
          <p>The General Data Protection Regulation (<b className="text-highlight">&quot;GDPR&quot;</b>) is the primary piece of legislation in Europe that significantly impacts all aspects of personal data processing. While the GDPR imposes significant changes on businesses, such as monetary fines of up to 4% of global revenue or 20 million euros, it also expands the rights of data subjects, such as <b className="text-highlight">&quot;right to be forgotten&quot;</b> claims. In such a dynamic world where privacy is <b className="text-highlight">&quot;by design,&quot;</b> the guiding idea should be to provide owners more control over their private data.</p>
          <p>Given that explicit consent is the fundamental need for data processing, <b className="text-highlight">&quot;legitimate interest&quot;</b> is one of the exceptions and the most flexible legal foundation for processing.</p>
          <p className="text-decoration-underline"><b>We are treating it with caution because to its flexibility and fragility! We closely monitor the related European governmental and independent regulatory agencies and have painstakingly adapted our operations to their standards.</b></p>
          <section>
            <h2>HOWEVER, WHAT IS LEGAL INTEREST?</h2>
            <p>An &apos;interest&apos; can be regarded &apos;legitimate&apos; if the Controller can pursue it in a manner consistent with data security and other applicable laws.</p>
            <p>Legitimate interest is defined in both Article 6 1(f) and Recital 47 of the GDPR. Recital 47 expressly determines marketing purposes as legitimate: “…the processing of personal data for direct marketing purposes may be regarded as carried out for a legitimate aim.”</p>
            <p>This does not, however, imply that all processing for commercial reasons is permissible on this basis. You must still demonstrate that your processing meets the requirements for necessity and balance.</p>
            <h3>When considering the balance test, you should also take this into consideration:</h3>
            <ul>
              <li>if individuals would be expected you to utilize their information in this manner;</li>
              <li>the annoyance factor associated with unwanted marketing messages; and</li>
              <li>Consider the impact your communication technique and frequency may have on more susceptible persons, such as children.</li>
            </ul>
            <p>Given that people have an equal right to object to marketing strategy per Article 21(2), it becomes harder to pass the balancing test if you do not provide consumers with a clear choice to opt out of direct marketing at the time their information is collected (or in your initial communication with the subject, if the information was not gathered directly from them).</p>
            <p>Legitimate interests may be your own or those of third parties. They may be commercial, individual, or societal in nature.</p>
            <p>It would be best if you weighed your own interests against those of others. If they did not reasonably anticipate the processing or if it would result in unjustifiable harm, their interest are likely to take precedence over your legitimate interests.</p>
          </section>
          <section>
            <h2>CAN WE USE LEGAL INTERESTS FOR B2B CONTACTS?</h2>
            <p>Indeed, “Yes.” This form of processing is also legal if legitimate interests justify it, but you must follow the three-part Legitimate Interest Assessment criteria.</p>
            <p>Consider using legitimate interests as a legal justification for such processing. You must, however, define the exact reason for which the processing is being carried out and ensure that the processing is genuinely essential for that purpose.</p>
            <p>If you pass the first two components of the three-part test, you must also pass the balancing test. You may discover that it is uncomplicated, as business contacts are more likely to anticipate processing their personal data in a commercial context reasonably, and the processing is less likely to have a material impact on them personally.</p>
            <p>Please see for additional information on the legitimate interest principle and its assessment test, which we have also strictly followed and applied in our business operations <a href="https://dma.org.uk/uploads/misc/59ca0f2e17ef3-dpn-li-guidance-publication/59ca0f2e17e5a.pdf">https://dma.org.uk/uploads/misc/59ca0f2e17ef3-dpn-li-guidance-publication/59ca0f2e17e5a.pdf</a> or contact us via e-mail.</p>
          </section>
        </Col>
      </Row>
    </Container>
  )
};

export default GdprReadyMainView;
