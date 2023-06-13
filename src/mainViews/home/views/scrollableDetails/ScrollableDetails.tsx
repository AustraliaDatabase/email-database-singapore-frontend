import React from 'react';
import { Link } from "react-scroll";
import classNames from 'classnames';
import { Col, Container, Row } from 'react-bootstrap';

import Card from '../../../../shared/components/card/Card';
import styles from "./styles.module.scss"

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
                <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 9 }}>
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
                <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 3 }} className='mb-5 mb-lg-0 d-none d-md-block'>
                    <div className={styles.grandShortTitlesWrapper}>
                        <div className={styles.shortTitlesWrapper}>
                            {explainDetails.map((explain: IDetails, index: number) => {
                                return (
                                    <Link
                                        offset={-120}
                                        className={classNames("explain-custom-scrollable", styles.link)}
                                        spy={true} to={explain.id ? explain.id : ""}
                                        key={index}>
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