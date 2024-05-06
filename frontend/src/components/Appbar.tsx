// import { Avatar } from "@nextui-org/react";
import Pic from "./Pic";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between tablet:px-20 mobilel:px-10 px-5 h-20 items-center">
      <div
        className="
     hover:text-2xl hover:line-through hover:cursor-pointer text-xl font-regular hover:bg-[#08ff08] p-1 rounded"
      >
        Blogsy
      </div>
      <div>
        <Pic />
      </div>
    </div>
  );
};

export default Appbar;
