import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import { useState } from 'react';
import ProfileImg from '../../images/1.jpg'


export default function Profile() {

    const [fileImage1Path, setFileImage1Path] = useState(ProfileImg);

    function setImage1Base64(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setFileImage1Path(reader.result);
        };
      }
    
    //   function uploadFileImage1(e) {
    //     fileImage1NameChanged.current = true;
    //     setFileImage1Name(e.target.files[0].name);
    //     setFileImage1(fileImage1Input.current.files[0]);
    //   }

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/person/11.jpg" alt="" />
                            {/* <input className="profileUserImg" type='file'></input> */}
                            <label>
                                <input
                                    type="file"
                                    id='image2'
                                    onChange={(e) => setImage1Base64(e)}
                                />
                                <img
                                src={fileImage1Path}
                                    className="profileUserImg" 
                                    alt="Uploaded Image"
                                />
                                </label>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Lokesh Kumar</h4>
                            <span className="profileInfoDesc">“If you want to live a happy life, tie it to a goal, not to people or things.”– <b>Albert Einstein</b></span>
                        </div>
                    </div>
                    <div className="profileRightBottom">

                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}