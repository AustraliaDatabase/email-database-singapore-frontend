import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Image from "next/image";
import dayjs from "dayjs";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { ProgressBar } from "react-bootstrap";
import axios from "axios";

import Button from "../../shared/components/button/Button";
// import { SupportService } from "../../database/DatabaseService";
import { useRoot } from "../../shared/contexts/RootProvider";
import { triggerForm } from "../../services/internalServices";
// import { storage } from "../../database/firebase";
import { supportEmailSend } from "../../shared/emailSend";
import SupportTable from "./views/supportTable/SupportTable";
import instance from "../../services/baseServices";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const SupportMainView = () => {
  const [subject, setSubject] = useState("Select");
  const [contactInput, setContactInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [sending, setSending] = useState(false);

  const { loggedInUser } = useRoot();

  const sendEmail = async (downloadURL: string) => {
    let userIpInfo = null;
    try {
      const response = await axios.post("https://geolocation-db.com/json/");

      if (!(response.status == 200)) {
        throw new Error(`Error! status: ${response.status}`);
      }

      userIpInfo = await response.data;
    } catch (error) {
      setSending(false);
    }

    try {
      await supportEmailSend(
        downloadURL,
        userIpInfo,
        subject,
        contactInput,
        loggedInUser?.name,
        loggedInUser?.email
      );

      setPercent(0);
      setSending(false);
    } catch (error) {
      setLoading(false);
      setPercent(0);
      setSending(false);
    }
  };

  const saveSupportInfoToFirestore = async (supportAttachedUrl?: string) => {
    try {
      // await SupportService.updateWithCustomIdAndAdd(loggedInUser?.uid, {
      //   subject,
      //   contactInput,
      //   supportAttachedUrl,
      //   status: "Processing",
      //   date: dayjs().unix(),
      // });

      instance.post(`updateSupport`, {
        subject,
        contactInput,
        // supportAttachedUrl,
        status: "Processing",
        date: dayjs().unix(),
      });

      setSubject("Select");
      setContactInput("");

      setLoading(false);
      setPercent(0);
      setSending(false);

      triggerForm({
        title: "",
        text: "Successfully Sent!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error: any) {
      triggerForm({
        title: "",
        text: error.response.data?.message || error.response.data,
        icon: "error",
        confirmButtonText: "OK",
      });

      setLoading(false);
      setPercent(0);
      setSending(false);
    }
  };

  // const uploadFile = () => {
  //   const storageRef = ref(
  //     storage,
  //     `supportImages/${Math.floor(Math.random() * 1000 + 1)}`
  //   );

  //   // progress can be paused and resumed. It also exposes progress updates.
  //   // Receives the storage reference and the file to upload.
  //   // @ts-ignore
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const percent = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );

  //       // update progress
  //       setPercent(percent);
  //     },
  //     (err) => {
  //       triggerForm({
  //         title: "",
  //         text: "Oops! Something went wrong!",
  //         icon: "error",
  //         confirmButtonText: "OK",
  //       });
  //       setLoading(false);
  //       setUploading(false);
  //     },
  //     () => {
  //       // download url
  //       getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
  //         setUploading(false);
  //         setSending(true);
  //         await sendEmail(url);
  //         saveSupportInfoToFirestore(url);
  //       });
  //     }
  //   );
  // };

  const pressSupport = async () => {
    if (!contactInput || subject === "Select") {
      triggerForm({
        title: "",
        text: "Please fill all the fields",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setLoading(true);
    if (!file) {
      await sendEmail("");
      saveSupportInfoToFirestore("");
    } else {
      setUploading(true);
      // uploadFile();
    }
  };

  const onChangeText = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      {/* <h3>Support</h3> */}
      <div className="dashboard-card p-4">
        <h4>Please let us know how we may help you</h4>
        <Row className="pt-3">
          <Col md={6}>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="subject">
                The type of issue you want our support with?
              </Form.Label>
              <Form.Select
                onChange={(event: any) => setSubject(event.target.value)}
                value={subject}
              >
                <option>Select</option>
                <option>Order Issue</option>
                <option>Downloads</option>
                <option>Billing Issue</option>
                <option>Technical Issue</option>
                <option>Others</option>
              </Form.Select>
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label htmlFor="explain">
                Please explain us the problem you are facing
              </Form.Label>
              <Form.Control
                onChange={(event: any) => setContactInput(event.target.value)}
                as="textarea"
                rows={3}
                value={contactInput}
              />
            </FormGroup>
            {/* <Form.Group>
              {percent || loading ? <ProgressBar now={percent} /> : null}
            </Form.Group> */}
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="d-flex justify-content-between">
                <Form.Label>Attachement</Form.Label>
                {uploading && <span>Uploading...</span>}
                {sending && <span>Sending Mail...</span>}
              </div>
              <Form.Control
                onChange={onChangeText}
                type="file"
                placeholder="Ex:- Marketting Image"
              />
            </Form.Group> */}
            <Form.Group>
              <Button
                onClick={pressSupport}
                disabled={loading}
                loading={loading}
                className="mt-3 mb-4"
              >
                Find Support
              </Button>
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Image
              width={300}
              height={300}
              layout="fixed"
              src="/undraw_active_support_re_b7sj.svg"
              alt="Support"
            />
          </Col>
        </Row>

        <SupportTable saveLoading={loading} />
      </div>
    </>
  );
};

export default SupportMainView;
