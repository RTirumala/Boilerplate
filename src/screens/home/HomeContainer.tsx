import React from 'react';
import usePosts from './../../api/HomeApi';

function Home(): JSX.Element {
    const { data, isFetching } = usePosts();

    return (
        <div>
            {!isFetching &&
                data &&
                Object.keys(data).map((temp) => (
                    <p key={temp}>
                        <a href="#">
                            {temp}:{data[temp].title}
                        </a>
                    </p>
                ))}
        </div>
    );
}

export default Home;
