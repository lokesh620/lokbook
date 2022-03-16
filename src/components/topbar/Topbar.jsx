import React from 'react';
import "./topbar.css";
import "./topbarresponsive.css";
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logoName">Lokbook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search For Friend, Post or Video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span>
            <Link className="topbarLink" to="/">Home</Link>
          </span>
          <span >
            <Link className="topbarLink" to="/profile"> Profile </Link>
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <div >
          <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
        </div>
        </div>
      </div>
    </div>
  );
}
