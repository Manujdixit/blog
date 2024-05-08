import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: number;
  published: boolean;
  author: { name: string };
  formattedDate: string;
  formattedTime: string;
}

export const useBlogs = (page: number) => {
  const [loading, setloading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalpages, settotalpages] = useState<number>(1);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/v1/blog/bulk?page=${page}&limit=10`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // setBlogs(res.data.blogs);
        // settotalpages(res.data.meta.totalPages);
        // setloading(false);
        const formattedBlogs = res.data.blogs.map((blogData: any) => {
          const dateTime = new Date(blogData.datetime);

          // Extract date components
          const year = dateTime.getFullYear();
          const month = dateTime.getMonth() + 1; // Months are zero-indexed, so January is 0
          const day = dateTime.getDate();

          // Extract time components
          const hours = dateTime.getHours();
          const minutes = dateTime.getMinutes();

          const formattedDate = `${day}-${month}-${year}`;
          const formattedTime = `${hours}:${minutes}`;

          return {
            ...blogData,
            formattedDate: formattedDate,
            formattedTime: formattedTime,
          };
        });

        setBlogs(formattedBlogs);
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
      .get(`${BASE_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const blogData = res.data.blog;
        const dateTime = new Date(blogData.datetime);

        // Extract date components
        const year = dateTime.getFullYear();
        const month = dateTime.getMonth() + 1; // Months are zero-indexed, so January is 0
        const day = dateTime.getDate();

        // Extract time components
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();

        const formattedDate = `${day}-${month}-${year}`;
        const formattedTime = `${hours}:${minutes}`;

        // Update the blog object with formatted date and time
        const updatedBlog: Blog = {
          ...blogData,
          // Add formatted date and time properties
          formattedDate: formattedDate,
          formattedTime: formattedTime,
        };

        setBlog(updatedBlog);
        setloading(false);
      })
      .catch((error) => {
        console.error("error fetching blog:", error);
        setloading(false);
      });
  }, [id]);

  return { loading, blog };
};

// export const usedrafts = (page: number) => {
//   const [loading, setloading] = useState(true);
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [totalpages, settotalpages] = useState<number>(1);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/api/v1/blog/bulk/drafts?page=${page}&limit=10`, {
//         headers: {
//           Authorization: localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         // setBlogs(res.data.blogs);
//         // settotalpages(res.data.meta.totalPages);
//         // setloading(false);
//         const formattedBlogs = res.data.blogs.map((blogData: any) => {
//           const dateTime = new Date(blogData.datetime);

//           // Extract date components
//           const year = dateTime.getFullYear();
//           const month = dateTime.getMonth() + 1; // Months are zero-indexed, so January is 0
//           const day = dateTime.getDate();

//           // Extract time components
//           const hours = dateTime.getHours();
//           const minutes = dateTime.getMinutes();

//           const formattedDate = `${day}-${month}-${year}`;
//           const formattedTime = `${hours}:${minutes}`;

//           return {
//             ...blogData,
//             formattedDate: formattedDate,
//             formattedTime: formattedTime,
//           };
//         });

//         setBlogs(formattedBlogs);
//         settotalpages(res.data.meta.totalPages);
//         setloading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching blogs:", error);
//         setloading(false);
//       });
//   }, [page]);

//   return { loading, blogs, totalpages };
// };
