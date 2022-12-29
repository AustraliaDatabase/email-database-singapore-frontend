import classNames from 'classnames';
import React, { ReactNode } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-scroll";

import Button from '../../shared/components/button/Button';
import styles from "./floatingMenu.module.scss";


interface IFloatingMenuLink {
  link: string;
  label: string;
  icon: ReactNode;
}

interface IFloatingMenu {
  menuList: IFloatingMenuLink[];
  className?: string;
}

const FloatingMenuLink: React.FC<IFloatingMenuLink> = ({ link, icon, label }) => {
  return <Link offset={-200} to={link} href={link}><Button className={styles.menuLink} variant="tertiary">{label} {icon}</Button></Link>;
}

const FloatingMenu: React.FC<IFloatingMenu> = ({ menuList, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Container>
        <Row>
          <Col className={styles.menu} xs={12}>
            {menuList.map((item: IFloatingMenuLink, index: number) => {
              return <FloatingMenuLink key={index} icon={item.icon} link={item.link} label={item.label} />
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FloatingMenu;