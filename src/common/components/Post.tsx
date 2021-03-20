import React from 'react';
import { post as PostType } from './../Types/CommonTypes';

interface IProps {
    post: PostType;
    // any other props that come into the component
}

function Post({ post }: IProps) {
    return (
        <div className="grid grid-cols-12 gap-5 px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
            <div className="col-span-1">{post.id}</div>
            <div className="col-span-1">{post.userId}</div>
            <div className="col-span-4">{post.title}</div>
            <div className="col-span-6">{post.body}</div>
        </div>
    );
}

export default Post;
