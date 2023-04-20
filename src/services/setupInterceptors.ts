import {
  getUser,
  setUser,
} from "./helpers/tokenService";
import axiosInstance from "./baseServices";
import axios from "axios";

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const user = getUser();

      if (user?.idToken) {
        config.headers &&
          (config.headers["Authorization"] = "Bearer " + user?.idToken);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const user = getUser();

      const originalConfig = err.config;

      if (err.response) {
        // Access Token was expired
        if (err.response.data.errorCode === 10010) {
          return;
        }
        if (err.response.status === 403 && !originalConfig._retry) {
          originalConfig._retry = true;

          const res = await axios.post(
            `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_API_KEY}`,
            {
              refresh_token: user?.refreshToken,
              grant_type: "refresh_token",
            }
          );
          const { id_token, refresh_token } = res.data;

          if (user) {
            setUser({
              ...user,
              refreshToken: refresh_token,
              idToken: id_token,
            });
          }

          if (res.status === 200) {
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + id_token;

            // Refresh page
            // window.location.reload();
          }

          return axiosInstance(originalConfig);
        }
      }
      return Promise.reject(err);
    }
  );
};

export default setupInterceptors;
