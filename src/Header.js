import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/2048px-Linkedin_icon.svg.png"
          alt="error"
        />
        <div className="header__search">
          {/* search icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications " />
        <HeaderOption Icon={NotificationsIcon} title="About ME " />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/D4E12AQEud3Ll5MI7cQ/article-inline_image-shrink_1000_1488/0/1660833954461?e=1666828800&v=beta&t=J6sZboKReM-2oQjRvNlCPVrFIwGuwdk_4pOWzOAZP8Y"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
