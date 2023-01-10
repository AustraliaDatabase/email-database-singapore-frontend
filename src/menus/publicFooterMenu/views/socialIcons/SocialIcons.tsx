import classNames from "classnames";
import { InstagramLogo, YoutubeLogo } from "phosphor-react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { LinkedinIcon, FacebookIcon, TwitterIcon } from "react-share";


import styles from "./style.module.scss";

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Instragram",
    url: "https://www.instagram.com/leadslibrary",
    icon: <InstagramLogo size={32} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/LeadsLibrary",
    icon: <TwitterIcon size={32} />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/leadslibraryllc",
    icon: <FacebookIcon size={32} />,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCRw_QglGdZjhIzn2R4474TA",
    icon: <YoutubeLogo size={32} />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/leadslibrary",
    icon: <LinkedinIcon size={32} />,
  },
];

const SocialIcons = () => {
  return (
    <Col className={styles.listWrapper}>
      <Row className="h-100">
        {SOCIAL_MEDIA_LINKS.map((mediaItem, index) => (
          <Col key={index} className="d-flex justify-content-center">
            <a
              href={mediaItem.url}
              className={classNames(
                styles.linkWrapper,
                "w-100 h-100 d-flex align-items-center justify-content-center"
              )}
              target="_blank"
              rel="noreferrer"
            >
              {mediaItem.icon}
            </a>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default SocialIcons;
