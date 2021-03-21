import React from 'react';
import { post as PostType } from './../Types/CommonTypes';

interface IProps {
    post: PostType;
    // any other props that come into the component
}

function Post({ post }: IProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 px-6 py-4 whitespace-no-wrap border-b border-gray-500 leading-5 text-gray-600">
            <div className="col-span-1">
                <div className="flex space-x-4 md:space-x-0">
                    <div className="md:hidden font-bold">ID#</div>
                    <div>{post.id}</div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="flex space-x-4  md:space-x-0">
                    <div className="md:hidden font-bold">User ID</div>
                    <div>{post.userId}</div>
                </div>
            </div>
            <div className="col-span-2 md:col-span-4">
                <div className="md:hidden font-bold">Title</div>
                {post.title}
            </div>
            <div className="col-span-2 md:col-span-6">
                <div className="md:hidden font-bold">Body</div>
                {post.body}
            </div>
        </div>
    );
}

export default Post;
