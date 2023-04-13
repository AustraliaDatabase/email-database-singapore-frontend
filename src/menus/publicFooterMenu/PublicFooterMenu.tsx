import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FOOTER_MENUS } from "../../shared/constants";
import styles from "./publicFooterMenu.module.scss";
import CopyRightContent from "./views/copyRightContent/CopyRightContent";
import DatabasePricing from "./views/databasePricing/DatabasePricing";
import FooterLogo from "./views/footerLogo/FooterLogo";
import MenuLinkList from "./views/menuLinkList/MenuLinkList";
import SocialIcons from "./views/socialIcons/SocialIcons";
import classNames from "classnames";
import { useRouter } from "next/router";

const PublicFooterMenu = () => {
  const router = useRouter();
  const productPath = "/[productId]";
  return (
    <footer
      className={classNames(styles.footer, {
        [styles.gapFix]: productPath == router.pathname,
      })}
    >
      <Row>
        <Col lg md={12}>
          <Row className={styles.firstRows}>
            <FooterLogo />
            <DatabasePricing title="By States" list={FOOTER_MENUS.BY_STATES} />
            <DatabasePricing title="Job Titles" list={FOOTER_MENUS.JOB_LIST} />
            <DatabasePricing
              title="Industries"
              list={FOOTER_MENUS.INDUSTRY_LIST}
            />
            <DatabasePricing
              title="International"
              list={FOOTER_MENUS.INTERNATIONAL_LIST}
            />
          </Row>
          <Row className={styles.lastRows}>
            <SocialIcons />
          </Row>
        </Col>
        <Col lg={5} md={12}>
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
