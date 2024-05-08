import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import Appbar from "../components/Appbar";
import { Spinner } from "@nextui-org/react";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  return (
    <div>
      <Appbar />
      {loading || !blog ? (
        <div className="w-full h-screen flex justify-center">
          <Spinner size="lg" color="success" />
        </div>
      ) : (
        <FullBlog blog={blog} />
      )}
    </div>
  );
};

export default Blog;
