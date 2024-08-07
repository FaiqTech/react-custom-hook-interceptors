// src/hooks/useUserData.js
import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const useUserData = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/users/${username}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [username]);

  return { data, loading };
};

export default useUserData;
