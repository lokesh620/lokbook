import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';


export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/person/11.jpg" alt="" />
                            <img className="profileUserImg" src="/assets/person/1.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Lokesh Kumar</h4>
                            <span className="profileInfoDesc">“If you want to live a happy life, tie it to a goal, not to people or things.”– <b>Albert Einstein</b></span>
                        </div>
                    </div>
                    <div className="profileRightBottom">

                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}