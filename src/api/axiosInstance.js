import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseURL = import.meta.env.VITE_APP_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    toast.info("Sorğu göndərilir.");
    return config;
  },
  (error) => {
    toast.error("Sorğu göndərilərkən xəta baş verdi.");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    toast.success("Cavab alındı.");
    return response;
  },
  (error) => {
    toast.error("Cavab alınarkən xəta baş verdi.");
    return Promise.reject(error);
  }
);

export default axiosInstance;
