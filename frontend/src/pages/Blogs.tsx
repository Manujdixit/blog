import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Skeletonui from "../components/Skeletonui";
import { useBlogs } from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading)
    return (
      <div className="h-screen">
        <Skeletonui />
        <Skeletonui />
        <Skeletonui />
        <Skeletonui />
      </div>
    );
  return (
    <div>
      <Appbar />
      <div className="flex justify-center flex-row">
        <div className="flex justify-center max-w-xl flex-col">
          <BlogCard
            authorName="Manuj Dixit"
            title="How an ugly single page website makes 5000 a month without ad affiliate marketing"
            description="This is my first blog.I am writting random gibberish trash which dont even mean. I could have just generated lorem text. Ok now I am generating it."
            date="2 Nov 2024"
          />
          <BlogCard
            authorName="Manuj Dixit"
            title="How an ugly single page website makes 5000 a month without ad affiliate marketing"
            description="This is my first blog.I am writting random gibberish trash which dont even mean. I could have just generated lorem text. Ok now I am generating it."
            date="2 Nov 2024"
          />
          <BlogCard
            authorName="Manuj Dixit"
            title="How an ugly single page website makes 5000 a month without ad affiliate marketing"
            description="This is my first blog.I am writting random gibberish trash which dont even mean. I could have just generated lorem text. Ok now I am generating it."
            date="2 Nov 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
