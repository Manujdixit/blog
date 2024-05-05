import { Avatar } from "@nextui-org/avatar";

interface BlogCardType {
  authorName: string;
  title: string;
  description: string;
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

const BlogCard = ({ authorName, title, description, date }: BlogCardType) => {
  return (
    <div className="border border-slate-200 pb-4">
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
        {description.slice(0, 100) + "..."}
      </div>
      <div className="text-slate-500 text-sm font-thin">{`${Math.ceil(
        description.length / 100
      )} min read`}</div>
    </div>
  );
};

export default BlogCard;
