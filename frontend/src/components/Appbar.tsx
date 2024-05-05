// import { Avatar } from "@nextui-org/react";
import Pic from "./Pic";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-20 h-20 items-center">
      <div
        className="
     hover:text-2xl hover:line-through hover:cursor-pointer text-xl font-regular hover:bg-[#08ff08] p-1 rounded"
      >
        Blogsy
      </div>
      <div>
        {/* <Avatar size="sm" src="https://api.dicebear.com/8.x/adventurer/svg" /> */}
        <Pic />
      </div>
    </div>
  );
};

export default Appbar;
