import React from 'react';
import './post.css';

import Radio from '../Radio';



function Post() {
    
    return(
        <div className="post post-grid">
                <div className="post-header">
                    <Radio />
                    <h4 className="post-title">Title</h4>
                    <p className="post-week">week 1</p>
                </div>

                <p className="post-description">Description</p>
                <p className="post-links">Links</p>
                <p className="post-tags">Tag</p>
        </div>
    )
}

export default Post;