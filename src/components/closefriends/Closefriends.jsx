import React from 'react'
import "./closefriends.css"

export default function Closefriends({user}) {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="img" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
