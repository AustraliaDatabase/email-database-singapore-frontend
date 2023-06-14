import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";

import { BUTTON_VARIANT_ENUM } from "../../enums";
import Button from "../button/Button";
import styles from "./styles.module.scss";

interface IservicesList {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
}

interface IServiceView {
  title: string;
  description: string;
  services: IservicesList[];
}

const ServicesView: React.FC<IServiceView> = (props) => {
  const { title, description, services } = props;
  const router = useRouter();

  const [expandedCardIndexes, setExpandedCardIndexes] = useState<number[]>([]);
  const maxDescriptionLength = 475;

  const toggleCardExpand = (index: number) => {
    setExpandedCardIndexes((prevExpandedCardIndexes) => {
      if (prevExpandedCardIndexes.includes(index)) {
        return prevExpandedCardIndexes.filter((i) => i !== index);
      } else {
        return [...prevExpandedCardIndexes, index];
      }
    });
  };

  const isCardExpanded = (index: number) => {
    return expandedCardIndexes.includes(index);
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Container>
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Col xs={12} md={10} lg={8} className="mx-auto text-center mt-4">
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Col>
      <Row className={styles.cardsRow}>
        {services.map((service: IservicesList, index: number) => {
          const isExpanded = isCardExpanded(index);
          const truncatedDescription = truncateText(
            service.description,
            maxDescriptionLength
          );
          const isDescriptionTruncated =
            service.description.length > maxDescriptionLength;

          return (
            <Col xs={12} lg={6} key={index}>
              <div className={styles.serviceCard}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={service.image}
                    width={54}
                    height={54}
                    objectFit="scale-down"
                    alt={`${service.buttonLabel} icon`}
                  />
                </div>
                <div
                  className={styles.cardTitle}
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <div className={styles.cardDescription}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: isExpanded
                        ? service.description
                        : truncatedDescription,
                    }}
                  />
                  {isDescriptionTruncated && (
                    <span
                      className={styles.seeMore}
                      onClick={() => toggleCardExpand(index)}
                    >
                      {isExpanded ? "See less" : "See more"}
                    </span>
                  )}
                </div>
                <div className="text-center mt-4">
                  <a href={`${service.buttonLink}`}>
                    <Button
                      className={styles.button}
                      variant={BUTTON_VARIANT_ENUM.Primary}
                    >
                      {service.buttonLabel}
                    </Button>
                  </a>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ServicesView;
