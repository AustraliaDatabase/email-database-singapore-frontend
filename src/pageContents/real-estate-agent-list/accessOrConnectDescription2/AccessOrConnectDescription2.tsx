import React from "react";
import CollapsibleList from "../../../shared/components/collapsibleList/CollapsibleList";
import styles from "./style.module.scss";

const AccessOrConnectDescription2 = () => {
  return (
    <>
      <CollapsibleList
        collapsibleList={[
          {
            title: (
              <div className={styles.accessDescriptionTitle} style={{ fontSize: 20 }}>
                Building Business Relations Through Email From Real Estate
                Companies List
              </div>
            ),
            element: (
              <>
                <p>
                  In today’s business world, starting and closing a business
                  deal can be done anywhere in a few clicks of a button. Email
                  marketing has become widely used because of its convenience
                  and its wide reach for a small amount of time.
                </p>
                <p>
                  However, to be successful in email marketing, you need a
                  reliable realtors emails list that will provide you with
                  up-to-date email addresses of accredited real estate agents.
                  Here, we guarantee to provide you email information that 100
                  percent works all the time.
                </p>
                <p>
                  Our real estate agent email list contains email addresses of
                  real persons that will point you directly to the actual
                  person. This means that you can be assured of a high response
                  rate unlike other real estate agent email addresses that will
                  lead you to a sales team or a customer service representative.
                </p>
                <p>
                  No matter what your transaction is, you can ensure getting
                  better results in the long run. Even when you are sitting
                  inside your home or a thousand miles away from the realtors in
                  the list, there is a high delivery and more importantly, high
                  response rate using our realtor mailing list.
                </p>
              </>
            ),
          },
          {
            title: (
              <div className={styles.accessDescriptionTitle}>
                Getting Personal With Your Business Deals From Database Real
                Estate
              </div>
            ),
            element: (
              <>
                <p>
                  Whether you are sending an email or choosing to transact with
                  the realtor personally, getting a realtor e mail list that
                  have the full name, position and company name of the real
                  estate agent can bring you success.
                </p>
                <p>
                  You can personally address them and even tailor your business
                  communications depending on their title or position. This
                  works better than sending a generic email address or business
                  communication to all real estate agent emails you can find.
                </p>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default AccessOrConnectDescription2;
