import React from 'react';
import Post from './Post';
import './posts.css';


function Posts() {
    return(
       
        <div className="posts-container">
            <div className="posts">
                
                <Post />
                <Post />
                <Post />
                <Post />
                {/* <Post />
                <Post /> */}
                
            </div>
            <button className='add-btn'><i>Add New Post</i></button>

        </div>   

       
    )
}

export default Posts;