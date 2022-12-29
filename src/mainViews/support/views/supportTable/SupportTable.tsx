import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import instance from "../../../../services/baseServices";
import { getUser } from "../../../../services/helpers/tokenService";
import { triggerForm } from "../../../../services/internalServices";
// import { useRoot } from "../../../../shared/contexts/RootProvider";

var utc = require("dayjs/plugin/utc");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);
dayjs.extend(utc);

interface ISupportTable {
  saveLoading: boolean;
}

const SupportTable = (props: ISupportTable) => {
  const { saveLoading } = props;
  const [loading, setLoading] = useState(false);
  const [downloadList, setDowloadList] = useState([]);
  // const { loggedInUser } = useRoot();

  useEffect(() => {
    const user = getUser();

    if (user && !saveLoading) {
      getDownloadLinks();
    }
  }, [saveLoading]);

  const getDownloadLinks = async () => {
    setLoading(true);
    try {
      const result: any = await instance.post(`/supportList`);

      setDowloadList(result.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);

      triggerForm({
        title: "",
        text: error.response.data?.message || error.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="responsive-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Created Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!downloadList?.length && !loading ? (
            <tr>
              {" "}
              <td>No any Records Found</td> <td></td>
              <td></td>
            </tr>
          ) : null}
          {loading && (
            <tr>
              <td>Loading... </td>
              <td></td>
              <td></td>
            </tr>
          )}
          {downloadList?.map((element: any, index: number) => {
            return (
              <tr key={index}>
                <td>{element?.subject}</td>
                {/* @ts-ignore */}
                <td className="td-field-inc">{dayjs.unix(element?.date).fromNow()}</td>
                <td>
                  {element.status === "Processing" ? (
                    <Badge bg="primary">{element?.status}</Badge>
                  ) : element.status === "Resolved" ? (
                    <Badge bg="success">{element?.status}</Badge>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SupportTable;
