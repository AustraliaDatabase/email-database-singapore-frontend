// import { storage } from "./firebase";
// import { ref, getDownloadURL } from "firebase/storage";
import instance from "../services/baseServices";
import { triggerForm } from "../services/internalServices";

export const getRealtorDownloadUrl = async (
  csvFile: string,
  getDownloadUrlFunc: Function
) => {
  try {
    const response = await instance.post("/downloadUrls", {
      csvFile,
    });

    getDownloadUrlFunc(response.data);
  } catch (error: any) {
    triggerForm({
      title: "",
      text: error.response.data?.message || error.response.data,
      icon: "error",
      confirmButtonText: "OK",
    });
  }

  // storageRef
  //   .child(`realtors/${csvFile}`)
  //   .getDownloadURL()
  //   .then((url) => {
  //     // `url` is the download URL for 'images/stars.jpg'
  //     getDownloadUrl(url);
  //   })
  //   .catch((error) => {
  //     // Handle any errors
  //   });
};
