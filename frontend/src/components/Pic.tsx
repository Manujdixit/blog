import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Pic() {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Handle logout click action
    localStorage.removeItem("token");
    navigate("/");
    console.log("Logout clicked");
    // toast.success("Logout successful");
  };
  // const handleProfileClick = () => {
  //   // Handle logout click action
  //   navigate("/profile");
  //   // toast.success("Logout successful");
  // };
  return (
    <div className="flex items-center gap-4">
      <Dropdown backdrop="blur" placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            color="success"
            className="transition-transform"
            src="https://i.pravatar.cc/150"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          {/* <DropdownItem
            key="profile"
            color="primary"
            // onClick={handleProfileClick}
          >
            Drafts
          </DropdownItem> */}
          <DropdownItem key="logout" color="danger" onClick={handleLogoutClick}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
