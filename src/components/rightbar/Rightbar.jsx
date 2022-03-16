import { Users } from "../../dummyData";
import React from 'react'
import "./rightbar.css";
import "./rightbarresponsive.css";
import Online from "../online/Online";

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/post/birth.jpg" alt="" />
          <span className="birthdayText">
            <b>Prateek Dhir</b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/post/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (<>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Jaipur</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Baran</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/j.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gajju Dhakad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/k.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gajju Dhakad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/t.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gajju Dhakad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/p.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gajju Dhakad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/v.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gajju Dhakad</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/r.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Gajju Dhakad</span>
        </div>
      </div>
    </>)
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
