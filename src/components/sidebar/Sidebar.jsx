import React from 'react'
import "./sidebar.css";
import "./sidebarresponsive.css";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FmdGoodSharpIcon from '@mui/icons-material/FmdGoodSharp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import GoogleMapReact from 'google-map-react';



// import {RssFeed,} from '@material-ui/icons';
import { Work, Accessible, AddAPhoto, Apple, Cast, Computer, ContactSupport, ExitToApp } from '@material-ui/icons';
import { Users } from "../../dummyData";
import Closefriends from "../closefriends/Closefriends";
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const defaultProps = {
    center: {
      lat: 28.433547017949557,
      lng: 77.01051938494876
    },
    zoom: 5
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div  style={{ height: '100vh', width: '1000px' }}>
     <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
         <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
        </GoogleMapReact>
        </div>
    </Dialog>
  );
}


export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  


  
  const [open1, setOpen1] = React.useState(true);

  const handleClick = () => {
    setOpen1(!open1);
  };

  return (
    <div className="sidebar" >
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <VideoLibraryIcon className="sidebarIcon" />
            <span className="sidebarListItemTexr">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FmdGoodSharpIcon className="sidebarIcon" />
            <Button variant="outlined" onClick={handleClickOpen}>
            <span className="sidebarListItemTexr">Google Map</span>
            </Button>
          </li>
          <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
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
        <div>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={open1 ? "Show Less" : "Show More"} />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
      <ul className="sidebarFriendList">
        {Users.map(u=>(
            <Closefriends key = {u.id} user={u} />
          ))} 
      
        </ul>
      </Collapse>
      </div>

        {/* <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" /> */}

        
      </div>
    </div>
  )
}
