import React from "react";

import Avatar from "@mui/material/Avatar";

import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Siddu naroju</h2>
        <h4>Siddunaroju@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,229</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">988</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("Programming")}
        {recentItem("Clones")}
        {recentItem("Security")}
        {recentItem("Trending")}
      </div>
    </div>
  );
}

export default Sidebar;
