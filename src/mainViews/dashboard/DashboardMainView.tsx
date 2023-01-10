import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./dashboardMainView.module.scss";
import { ArrowRight } from "phosphor-react";
import Button from "../../shared/components/button/Button";
// import { PaymentService } from "../../database/DatabaseService";
import { useRoot } from "../../shared/contexts/RootProvider";
import OrderView from "../orders/views/OrderView";

const DashboardMainView = () => {
  const router = useRouter();

  // @ts-ignore
  const { loggedInUser } = useRoot();
  // const [orderList, setorderList] = useState([]);

  // useEffect(() => {
  //   if (loggedInUser) {
  //     PaymentService.getAllById(loggedInUser.uid).then((userData: any) => {
  //       setorderList(userData);
  //     });
  //   }
  // }, [loggedInUser]);

  const viewAll = () => {
    router.push("/orders");
  };

  return (
    <Row>
      <Col xs={12}>{/* <h3>Dashboard</h3> */}</Col>
      <Col xs={12}>
        <div className={styles.welcome}>
          <Row>
            <Col
              xs={{ order: 2, span: 7 }}
              md={{ order: 1, span: "auto" }}
              className="pt-3 pt-md-0 ms-auto"
            >
              <Image
                objectFit="contain"
                src="/undraw_working_remotely_jh40.svg"
                width={200}
                height={80}
                layout="fixed"
                alt="user"
              />
            </Col>
            <Col xs={{ order: 1, span: 12 }} md={{ order: 2, span: true }}>
              <h2>Hello, {loggedInUser?.name}</h2>
              <p>
                From your account dashboard, you can download the lists you have
                bought, manage your account details and find support for any
                question you may have.
              </p>
            </Col>
          </Row>
        </div>
      </Col>

      {loggedInUser && (
        <>
          {" "}
          <Col xs={12}>
            <Row className={styles.links}>
              <Col md xs={12} className="mb-3">
                <Link href="/downloads">
                  <a>
                    <span>
                      <span className={styles.title}>Downloads</span>
                      <span className={styles.caption}>
                        Downloadable lists from your orders
                      </span>
                      <Link href="/downloads">
                        <span className={styles.action}>
                          View Now <ArrowRight size={20} />
                        </span>
                      </Link>
                    </span>
                    <span
                      className={styles.background}
                      style={{
                        backgroundImage:
                          'url("/undraw_folder_files_re_2cbm.svg")',
                      }}
                    />
                  </a>
                </Link>
              </Col>
              <Col md xs={12} className="mb-3">
                <Link href="/support">
                  <a>
                    <span>
                      <span className={styles.title}>Support</span>
                      <span className={styles.caption}>
                        Let us know how to help
                      </span>
                      <Link passHref={true} href="/support">
                        <span className={styles.action}>
                          Get Support <ArrowRight size={20} />
                        </span>
                      </Link>
                    </span>
                    <span
                      className={styles.background}
                      style={{
                        backgroundImage:
                          'url("/undraw_active_support_re_b7sj.svg")',
                      }}
                    />
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div className={styles.table}>
              <Row>
                <Col>
                  <h4>Recent Orders</h4>
                </Col>
                <Col xs="auto">
                  <Button onClick={viewAll} size="small" variant="tertiary">
                    View All
                  </Button>
                </Col>
              </Row>
              <OrderView />
            </div>
          </Col>{" "}
        </>
      )}
    </Row>
  );
};

export default DashboardMainView;
