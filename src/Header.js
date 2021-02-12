import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "./firebase";
import "./header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import BuisnessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://lh3.googleusercontent.com/proxy/eoCea3RY4wH-_bQl2e0Aeu2yrl1fxbXRb8Yoz3zh4QIxm9NVoia2nihY19hDxRjpKsjhxrn3n7kT1864pWoacGBm89IxPryCRSPzBzl61bnMF9VH0MXbsI-1WIFgDyg8E3gl"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BuisnessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
