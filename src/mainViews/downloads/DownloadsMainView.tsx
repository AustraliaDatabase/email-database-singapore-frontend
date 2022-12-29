import { useRouter } from "next/router";
import { ArrowSquareLeft } from "phosphor-react";
import React from "react";
import Link from "next/link";

import DownloadView from "./views/DownloadView";

const DownloadsMainView = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };

  const orderId = router.query.downloadId;

  return (
    <div>
      <div className="d-flex">
        <div onClick={back} style={{ cursor: "pointer" }}>
          <ArrowSquareLeft
            size={32}
            weight="fill"
            style={{ color: "#FF4800" }}
          />
        </div>
        <h3>
          <Link href="/downloads">Downloads</Link> - #{orderId}
        </h3>
      </div>
      <DownloadView />
    </div>
  );
};

export default DownloadsMainView;
