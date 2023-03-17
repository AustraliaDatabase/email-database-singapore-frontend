import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";

import Button from "../../shared/components/button/Button";
// import {
//   PaymentService,
//   UserAssignedDownloads,
// } from "../../database/DatabaseService";
import { useRoot } from "../../shared/contexts/RootProvider";

import styles from "./style.module.scss";
import { AddToCart, triggerForm } from "../../services/internalServices";
import { useRouter } from "next/router";
import instance from "../../services/baseServices";

const AllDownloadsMainView = () => {
  const { currentCartItem, setCurrentCartItem } = useRoot();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const { loggedInUser } = useRoot();
  const [fullDownloadList, setFullDownloadList] = useState([]);

  useEffect(() => {
    if (loggedInUser) {
      getFullDownloadList();
    }
  }, [loggedInUser]);

  const getFullDownloadList = async () => {
    try {
      setLoading(true);
      const fullDownloadList: any = await instance.post(`downloadList`);

      setFullDownloadList(fullDownloadList.data);

      setLoading(false);
    } catch (error: any) {
      triggerForm({
        title: "",
        text: error.response.data?.message || error.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });
      setLoading(false);
    }
  };

  const pressRenew = (downloadObject: any) => {
    downloadObject?.orderInfo?.currentCartItem.forEach((element: any) => {
      AddToCart(
        currentCartItem,
        setCurrentCartItem,
        element.url,
        element.contacts,
        element?.price,
        element.productName
      );
    });

    router.push("/checkout");
  };

  return (
    <div className={styles.table}>
      <h2 className="mb-3">Downloads</h2>
      <div className="responsive-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Expire Date</th>
              <th></th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td>Loading....</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {!loading && !fullDownloadList.length && (
              <tr>
                <td>No any Downloads Found!</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {fullDownloadList?.map((element: any) => {
              return element?.orderList?.map?.(
                (childElement: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td className="td-field-inc-mobile">
                        {childElement?.name}
                      </td>
                      <td className="td-field-inc">
                        {dayjs(childElement?.expireDate).format(
                          "YYYY-MMM-DD / h:mm A"
                        )}
                      </td>
                      <td>
                        {childElement?.signedUrl ? (
                          Date.now() - childElement?.expireDate > 0 ? (
                            <Button
                              onClick={() => {
                                pressRenew(element);
                              }}
                              variant="secondary"
                            >
                              Renew
                            </Button>
                          ) : (
                            <a
                              target="_blank"
                              href={childElement?.signedUrl}
                              rel="noreferrer"
                            >
                              <Button>Download</Button>
                            </a>
                          )
                        ) : (
                          <div>
                            Link is building.{" "}
                            <span
                              className="text-highlight"
                              style={{ cursor: "pointer" }}
                            >
                              <Link href="/support">Ping us on this issue</Link>
                            </span>{" "}
                            if this take more than 5 minutes
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                }
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDownloadsMainView;
