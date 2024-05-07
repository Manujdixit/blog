import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: number;
  published: boolean;
  author: { name: string };
}

export const useBlogs = (page: number) => {
  const [loading, setloading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalpages, settotalpages] = useState<number>(1);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk?page=${page}&limit=10`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data.blogs);
        settotalpages(res.data.meta.totalPages);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setloading(false);
      });
  }, [page]);

  return { loading, blogs, totalpages };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setloading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setloading(false);
      });
  }, [id]);

  return { loading, blog };
};
