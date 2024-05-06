import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Skeletonui from "../components/Skeletonui";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

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
                  description={blog.content}
                  date="2 Nov 2024"
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
