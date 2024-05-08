// import { Avatar } from "@nextui-org/react";
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
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part: string) => part.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 cursor-pointer">
        <div className="flex flex-row items-center">
          <div className="avatar  flex justify-center items-center bg-black w-6 h-6 rounded-full text-white font-normal text-sm">
            <span>{getInitials(authorName)}</span>
          </div>
          <div className="ml-3 flex items-center">
            <span className="font-extralight">{authorName}</span>
            <span className="text-xs px-1">&#9679;</span>
            <span className="font-light text-slate-500">{date}</span>
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
