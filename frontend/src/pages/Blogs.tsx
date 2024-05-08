import { Pagination } from "@nextui-org/react";
import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Skeletonui from "../components/Skeletonui";
import { useBlogs } from "../hooks";
import { useState } from "react";

const Blogs = () => {
  const [currentpage, setcurrentpage] = useState(1);
  const { loading, blogs, totalpages } = useBlogs(currentpage);

  const handlePageChange = (pageNumber: number) => {
    setcurrentpage(pageNumber);
  };

  return (
    <div>
      <Appbar />
      <div className="flex justify-center flex-row">
        <div className="flex justify-center max-w-xl flex-col">
          {loading ? (
            <>
              <Skeletonui />
              <Skeletonui />
              <Skeletonui />
              <Skeletonui />
            </>
          ) : (
            <>
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  authorName={blog.author.name}
                  title={blog.title}
                  content={blog.content}
                  date={blog.formattedDate}
                />
              ))}
              <div className="p-5 flex justify-center">
                <Pagination
                  showShadow
                  total={totalpages}
                  page={currentpage}
                  onChange={handlePageChange}
                  initialPage={1}
                  showControls={true}
                  variant="bordered"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
