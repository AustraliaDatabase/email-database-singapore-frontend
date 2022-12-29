import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Link from "next/link";

// import Button from "../../../shared/components/button/Button";
// import { UserAssignedDownloads } from "../../../database/DatabaseService";
import { useRoot } from "../../../shared/contexts/RootProvider";
import styles from "./style.module.scss";
// import dayjs from "dayjs";
import { AddToCart, triggerForm } from "../../../services/internalServices";
import instance from "../../../services/baseServices";

const DownloadView = () => {
  const { currentCartItem, setCurrentCartItem, loggedInUser } = useRoot();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [downloadList, setDowloadList] = useState([]);

  useEffect(() => {
    if (loggedInUser?.uid) {
      getDownloadLinks();
    }
  }, [loggedInUser?.uid]);

  const getDownloadLinks = async () => {
    setLoading(true);
    try {
      const downloadInfo: any = await instance.post(`downloadLinks`, {
        downloadId: router.query.downloadId,
      });

      setDowloadList(downloadInfo.data);
      setLoading(false);

      // UserAssignedDownloads.getAllByPrimaryAndSecondaryId(
      //   loggedInUser.uid,
      //   router.query.downloadId
      // ).then(async (result: any) => {
      //   setDowloadList(downloadInfo);
      //   setLoading(false);
      // });
    } catch (error: any) {
      setLoading(false);

      triggerForm({
        title: "",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!downloadList.length && !loading ? (
            <tr>
              <td>No any Downloads Found</td>
            </tr>
          ) : null}
          {loading && (
            <tr>
              <td>Loading...</td>{" "}
            </tr>
          )}
          {/* {downloadList.map((element: any, index: number) => {
            return (
              <tr key={index}>
                <td>{element?.name}</td>
                <td>
                  {dayjs(element?.expireDate).format("YYYY-MMM-DD / h:mm A")}
                </td>
                <td>
                  {element?.signedUrl ? (
                    Date.now() - element?.expireDate > 0 ? (
                      <Link href="/checkout" passHref={true}>
                        <Button onClick={pressRenew} variant="secondary">
                          Renew
                        </Button>
                      </Link>
                    ) : (
                      <a
                        target="_blank"
                        href={element?.signedUrl}
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
                        onClick={() => {
                          // alert("Need to implement");
                        }}
                      >
                        <Link href="/support">Ping us on this issue</Link>
                      </span>{" "}
                      if this take more than 5 minuites
                    </div>
                  )}
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default DownloadView;
