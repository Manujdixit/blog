import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/blogs`).then((res) => {
      setBlogs(res.data);
      setloading(false);
    });
  }, []);

  return { loading, blogs };
};
