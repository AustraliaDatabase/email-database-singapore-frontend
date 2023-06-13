import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

import { BUTTON_VARIANT_ENUM } from '../../enums';
import Button from '../button/Button';
import styles from "./styles.module.scss"

interface IservicesList {
    image: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string
}
interface IServiceView {
    title: string;
    description: string;
    services: IservicesList[];
}

const ServicesView = (props: IServiceView) => {
    const { title, description, services } = props;
    const router = useRouter();

    const [expandedCardIndexes, setExpandedCardIndexes] = useState<number[]>([]);
    const maxDescriptionLength = 250;

    const toggleCardExpand = (index: number) => {
        if (expandedCardIndexes.includes(index)) {
            setExpandedCardIndexes(expandedCardIndexes.filter(i => i !== index));
        } else {
            setExpandedCardIndexes([...expandedCardIndexes, index]);
        }
    };

    const isCardExpanded = (index: number) => {
        return expandedCardIndexes.includes(index);
    };

    return (
        <Container>
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
            <Col xs={12} md={10} lg={8} className='mx-auto text-center mt-4'>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
            </Col>
            <Row className={styles.cardsRow}>
                {services.map((service: IservicesList, index: number) => {
                    const isExpanded = isCardExpanded(index);
                    const truncatedDescription = service.description.slice(0, maxDescriptionLength);
                    const isDescriptionTruncated = service.description.length > maxDescriptionLength;
                    return (
                        <Col xs={12} lg={6} key={index}>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>
                                    <Image src={service.image} width={54} height={54} objectFit='scale-down' alt={`${service.buttonLabel} icon`} />
                                </div>
                                <div className={styles.cardTitle} dangerouslySetInnerHTML={{ __html: service.title }} />
                                <div className={styles.cardDescription}>
                                    {isExpanded ? service.description : truncatedDescription}
                                    {isDescriptionTruncated && (
                                        <span className={styles.seeMore} onClick={() => toggleCardExpand(index)}>
                                            {isExpanded ? 'See less' : "See More"}
                                        </span>
                                    )}
                                </div>
                                <div className='text-center mt-4'>
                                    <Button className={styles.button} variant={BUTTON_VARIANT_ENUM.Primary} onClick={() => router.push(service.buttonLink)} >
                                        {service.buttonLabel}
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container >
    );
};

export default ServicesView;