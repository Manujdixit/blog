import { Avatar } from "@nextui-org/avatar";
import { Link } from "react-router-dom";

interface BlogCardType {
  id: number;
  authorName: string;
  title: string;
  content: string;
  date: string;
  //   image: string;
  // id: string;
  // category: string;
  // tags: string[];
  // url: string;
  // likes: number;
  // comments: number;
  // shares: number;
  // views: number;
  // rating: number;
}

const BlogCard = ({ authorName, title, id, content, date }: BlogCardType) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
        <div className="flex flex-row items-center">
          <Avatar size="sm" src="https://api.dicebear.com/8.x/adventurer/svg" />
          <div className="ml-3 flex items-center">
            <span className="font-extralight">{authorName}</span>
            <span className="text-xs px-1">&#9679;</span>
            <span className="font-thin text-slate-400">{date}</span>
          </div>
        </div>

        <div className="text-xl font-semibold">{title}</div>
        <div className="text-md font-thin ">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </Link>
  );
};

export default BlogCard;
