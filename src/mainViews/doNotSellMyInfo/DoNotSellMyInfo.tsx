import React from "react";
import { Container } from "react-bootstrap";

import styles from "./styles.module.scss";

const DoNotSellMyInfo = () => {
  return (
    <section className={styles.sectionFix}>
      <Container>
        <div>
          <h2>Protecting Your Privacy - Do Not Sell My Info</h2>
          <p>
            At EmailDatas, we understand the importance of protecting your
            personal information and respect your privacy rights. We do not sell
            your personal information to third parties for monetary gain.
          </p>
          <p>
            {`However, if you wish to opt-out of any future sales of your personal
            information, you may exercise your right to "do not sell my info" by
            following the instructions below.`}
          </p>
        </div>
        <div>
          <h2>How to Opt-Out</h2>
          <p>{`If you wish to opt-out of any future sales of your personal information, please fill out the form on our contact us page with the subject line "Do Not Sell My Info." Please provide us with your full name, email address, and any additional information you would like us to know.`}</p>
          <p>{`Once we receive your request, we will remove your personal information from our sales list within 30 days. Please note that this will not affect any prior sales of your information, and we cannot guarantee that third parties will not continue to sell your information.`}</p>
        </div>
        <div>
          <h2>Your Rights</h2>
          <p>{`We take the protection of your personal information seriously and understand that you have certain rights regarding your data. If you would like to learn more about your privacy rights, please refer to our privacy policy.`}</p>
          <p>{`We are committed to providing you with the highest level of service and support. If you have any questions or concerns, please contact us at any time, and we will be happy to assist you.`}</p>
        </div>
      </Container>
    </section>
  );
};

export default DoNotSellMyInfo;
