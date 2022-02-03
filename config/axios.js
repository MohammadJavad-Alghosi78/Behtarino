import axios from "axios";
import { API } from "../constants/environmentVariables";
import {
  setResponseInterceptor,
  setErrorInterceptor,
  setRequestInterceptor,
} from "./interceptor";

/**
 * Creates the base axios request config.
 * @param mode
 * @returns {AxiosRequestConfig}
 */
const getAxiosRequestConfig = () => {
  const requestConfig = {
    headers: {
      "Content-Type": "application/json",
      "X-Client": "web",
    },
    timeout: 20000,
    maxRedirects: 0,
  };

  return Object.assign(requestConfig, {
    baseURL: API.HOST,
  });
};

/**
 * Create an axios main instance for main requests with base request config.
 */
const mainHttp = axios.create(getAxiosRequestConfig());

mainHttp.interceptors.request.use(setRequestInterceptor, setErrorInterceptor);
mainHttp.interceptors.response.use(setResponseInterceptor, setErrorInterceptor);

export default mainHttp;
