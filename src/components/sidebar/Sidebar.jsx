import React from 'react'
import "./sidebar.css";
import "./sidebarresponsive.css";


// import {RssFeed,} from '@material-ui/icons';
import { RssFeed, Chat, Work, Accessible, AddAPhoto, Apple, Cast, Computer, ContactSupport, ExitToApp } from '@material-ui/icons';
import { Users } from "../../dummyData";
import Closefriends from "../closefriends/Closefriends";
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar" >
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemTexr">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemTexr">Chat</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemTexr">Work</span>
          </li>
          <li className="sidebarListItem">
            <Accessible className="sidebarIcon" />
            <span className="sidebarListItemTexr">Accessible</span>
          </li>
          <li className="sidebarListItem">
            <AddAPhoto className="sidebarIcon" />
            <span className="sidebarListItemTexr">Add Photo</span>
          </li>
          <li className="sidebarListItem">
            <Apple className="sidebarIcon" />
            <span className="sidebarListItemTexr">Apple</span>
          </li>
          <li className="sidebarListItem">
            <Cast className="sidebarIcon" />
            <span className="sidebarListItemTexr">Cast</span>
          </li>
          <li className="sidebarListItem">
            <Computer className="sidebarIcon" />
            <span className="sidebarListItemTexr">Computer</span>
          </li>
          <li className="sidebarListItem">
            <ContactSupport className="sidebarIcon" />
            <span className="sidebarListItemTexr">Contact Support</span>
          </li>
          <li className="sidebarListItem">
            <ExitToApp className="sidebarIcon" />
            <span>
            <Link className="sidebarListItemTextlink" to="/">Log Out</Link>
          </span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
        {Users.map(u=>(
            <Closefriends key = {u.id} user={u} />
          ))} 
      
        </ul>
      </div>
    </div>
  )
}
