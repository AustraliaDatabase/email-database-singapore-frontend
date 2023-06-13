import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-scroll";

import styles from "./styles.module.scss"
import Card from '../../../../shared/components/card/Card';

interface IDetails {
    shortTitle: string;
    title: string;
    description: string;
    id?: string
}

interface IScrollableDetails {
    explainDetails: IDetails[];
}

const ScrollableDetails = (props: IScrollableDetails) => {
    const { explainDetails } = props;
    return (
        <Container>
            <Row>
                <Col xs={12} lg={9}>
                    <Card className={styles.detailsWrapper}>
                        {explainDetails.map((explain: IDetails, index: number) => {
                            return (
                                <div className={styles.explain} key={index} id={explain.id}>
                                    <div className={styles.title} dangerouslySetInnerHTML={{ __html: explain.title }} />
                                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: explain.description }} />
                                </div>
                            )
                        })}
                    </Card>
                </Col>
                <Col xs={12} lg={3}>
                    <div className={styles.grandShotTitlesWrapper}>

                    <div className={styles.shotTitlesWrapper}>
                        {explainDetails.map((explain: IDetails, index: number) => {
                            return (
                                <Link spy={true} to={explain.id ? explain.id : ""} key={index}>
                                    <div>{explain.shortTitle}</div>
                                </Link>
                            )
                        })}
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ScrollableDetails;