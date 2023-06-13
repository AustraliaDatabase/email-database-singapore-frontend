import React from 'react';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';

import Button from '../button/Button';
import styles from "./styles.module.scss"
import Image from 'next/image';
import { BUTTON_VARIANT_ENUM } from '../../enums';
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
    return (
        <Container>
            <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
            <Col xs={12} md={10} lg={8} className='mx-auto text-center mt-4'>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
            </Col>
            <Row className={styles.cardsRow}>
                {services.map((service, index) => {
                    return (
                        <Col xs={12} lg={6} key={index}>
                            <div className={styles.serviceCard}>
                                <div className={styles.iconWrapper}>
                                    <Image src={service.image} width={66} height={66} objectFit='scale-down' alt={`${service.buttonLabel} icon`} />
                                </div>
                                <div className={styles.cardTitle} dangerouslySetInnerHTML={{ __html: service.title }} />
                                <div className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: service.description }} />
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
        </Container>
    );
};

export default ServicesView;