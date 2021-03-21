import React from 'react';
import NbaTable from '../../common/components/NbaTable';
import Post from '../../common/components/Post';
import { CountContext } from '../../context/homeContext';
import usePosts from './../../api/HomeApi';

function Home(): JSX.Element {
    const { data, isFetching } = usePosts();
    const { state, dispatch } = React.useContext(CountContext);

    return (
        <div>
            <div className="flex space-x-2 items-center">
                <div>Count: {state.count}</div>
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'add', payload: 5 })}
                >
                    +5
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'minus', payload: 5 })}
                >
                    -5
                </button>
            </div>
            {/* <NbaTable /> */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-5 px-6 py-4 whitespace-no-wrap md:text-left border-b border-gray-500 text-sm leading-5 text-gray-600">
                <div className="col-span-1 md:block hidden font-bold">ID#</div>
                <div className="col-span-1 md:block hidden font-bold">
                    User ID
                </div>
                <div className="col-span-4 md:block hidden font-bold">
                    Title
                </div>
                <div className="col-span-6 md:block hidden font-bold">Body</div>
            </div>
            {!isFetching &&
                data &&
                Object.keys(data).map((temp) => (
                    <Post key={temp} post={data[temp]} />
                ))}
        </div>
    );
}

export default Home;
