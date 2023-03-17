// import { auth } from "./firebase";
// import { UserService } from "./DatabaseService";
import dayjs from "dayjs";
import axios from "axios";

// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithEmailAndPassword,
//   sendPasswordResetEmail,
// } from "firebase/auth";
import { triggerForm } from "../services/internalServices";
import instance from "../services/baseServices";

var utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const actionCodeSettings: any = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: process.env.NEXT_PUBLIC_BASE_URL,
  // This must be true.
  handleCodeInApp: true,
};

export const registerUser = async (
  userName: string,
  email: string,
  password: string,
  loginCallBack: Function,
  loginCallBackFail: Function,
  otherInfo = {}
) => {
  let userIpInfo = null;
  try {
    const response = await axios.post("https://geolocation-db.com/json/");

    if (!(response.status == 200)) {
      throw new Error(`Error! status: ${response.status}`);
    }

    userIpInfo = await response.data;
  } catch (error) {
  }

  try {
    // const userCredential = await createUserWithEmailAndPassword(
    //   auth,
    //   email,
    //   password
    // );

    const user = await instance.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        displayName: userName,
        email,
        password,
        userIpAddress: userIpInfo?.IPv4 || "",
        date: dayjs().unix(),
        ...otherInfo,
        returnSecureToken: true,
      }
    );

    const userResponse = await instance.post("/register", {
      uid: user.data.localId,
      userName,
      email,
      password,
      userIpAddress: userIpInfo?.IPv4 || "",
      date: dayjs().unix(),
      ...otherInfo,
    });

    // auth.currentUser &&
    //   sendEmailVerification(auth.currentUser, actionCodeSettings);

    // const newInfo = userIpInfo ? { ...otherInfo, ...userIpInfo } : otherInfo;

    // UserService.updateWithCustomId(userCredential.user?.uid, {
    //   name: userName,
    //   email,
    //   isEmailVerified: false,
    //   isAdmin: false,
    //   userIpAddress: userIpInfo?.IPv4 || "",
    //   date: dayjs().unix(),
    //   ...newInfo,
    // });

    triggerForm({
      title: "",
      text: `Successfully Registered`,
      icon: "success",
      confirmButtonText: "OK",
    });

    loginCallBack(user.data);

    return userResponse;
  } catch (error: any) {
    triggerForm({
      title: "",
      text: error.response.data?.message || error.response.data?.error?.message,
      icon: "error",
      confirmButtonText: "OK",
    });

    loginCallBackFail();
  }
};

export const loginUser = async (
  email: string,
  password: string,
  loginCallBack: Function,
  loginCallBackFail: Function
) => {
  try {
    const user = await instance.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    // Signed in
    triggerForm({
      title: "",
      text: "Successfully Logged In",
      icon: "success",
      confirmButtonText: "OK",
    });

    loginCallBack(user.data);
    return user;
  } catch (error: any) {
    triggerForm({
      title: "",
      text:
        error?.response?.data?.message || error?.response?.data?.error?.message,
      icon: "error",
      confirmButtonText: "OK",
    });

    loginCallBackFail();
  }

  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     triggerForm({
  //       title: "",
  //       text: "Successfully Logged In",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });

  //     loginCallBack();
  //   })
  //   .catch((error) => {
  //     triggerForm({
  //       title: "",
  //       text: error.message,
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });

  //     loginCallBackFail();
  //   });
};

export const verifyEmail = async () => {
  try {
    // auth.currentUser &&
    //   sendEmailVerification(auth.currentUser, actionCodeSettings);

    const response = await instance.post("/verifyEmail");

    triggerForm({
      title: "",
      text: "Sent the Email",
      icon: "success",
      confirmButtonText: "OK",
    });

    return response;
  } catch (error: any) {
    triggerForm({
      title: "",
      text:
        error?.response?.data?.message || error?.response?.data?.error?.message,
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

export const resetPassword = async (
  email: string,
  setResetLoading: Function
) => {
  try {
    const response = await instance.post("/resetPassword", { email });

    triggerForm({
      title: "",
      text: "Reset Email Sent",
      icon: "success",
      confirmButtonText: "OK",
    });

    setResetLoading(false);

    return response;
  } catch (error: any) {
    setResetLoading(false);
    triggerForm({
      title: "",
      text:
        error?.response?.data?.message || error?.response?.data?.error?.message,
      icon: "error",
      confirmButtonText: "OK",
    });

    return error;
  }

  // return await sendPasswordResetEmail(auth, email, actionCodeSettings)
  //   .then(() => {
  //     triggerForm({
  //       title: "",
  //       text: "Reset Email Sent",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });

  //     setResetLoading(false);
  //   })
  //   .catch((error: any) => {
  //     setResetLoading(false);
  //     triggerForm({
  //       title: "",
  //       text: error.message,
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   });
};
