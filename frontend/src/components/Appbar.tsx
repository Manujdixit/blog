// import { Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Pic from "./Pic";
import { Button } from "@nextui-org/react";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between tablet:px-20 mobilel:px-10 px-5 h-20 items-center">
      <Link to={"/blogs"}>
        <div
          className="
     hover:text-2xl hover:line-through cursor-pointer text-xl font-regular hover:bg-[#08ff08] p-1 rounded"
        >
          Blogsy
        </div>
      </Link>
      <div className="flex">
        <Link to={"/create"}>
          <Button
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mr-12 rounded-3xl"
            endContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>
            }
          >
            Create blog
          </Button>
        </Link>
        <Pic />
      </div>
    </div>
  );
};

export default Appbar;
