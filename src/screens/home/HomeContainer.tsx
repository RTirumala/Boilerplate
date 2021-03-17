import React from 'react';
import { CountContext } from '../../context/homeContext';
import usePosts from './../../api/HomeApi';

function Home(): JSX.Element {
    const { data, isFetching } = usePosts();
    const { state, dispatch } = React.useContext(CountContext);

    return (
        <div>
            <div>
                Count: {state.count}
                <button onClick={() => dispatch({ type: 'increment' })}>
                    +
                </button>
                <button onClick={() => dispatch({ type: 'add', payload: 5 })}>
                    +5
                </button>
                <button onClick={() => dispatch({ type: 'decrement' })}>
                    -
                </button>
                <button onClick={() => dispatch({ type: 'minus', payload: 5 })}>
                    +5
                </button>
            </div>
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
