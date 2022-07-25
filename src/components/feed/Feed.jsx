import React from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import {Posts} from "../../dummyData"
import Button from '@mui/material/Button';



export default function Feed() {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className='video'>
        <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        </div>
      
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
        </div>
    </div>    
  )
}
