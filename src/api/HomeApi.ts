import axios from 'axios';
import { posts } from './../common/Types/CommonTypes';
import { useQuery, UseQueryResult } from 'react-query';

/* const usePosts = async (): Promise<posts> => {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
};
export default usePosts; */
const getPosts = async (): Promise<posts> => {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
};

export default function usePosts(): UseQueryResult<
    posts,
    Error
> /* {
    data: posts | undefined;
    error: Error | any;
    isLoading: boolean;
    isFetching: boolean;
} */ {
    return useQuery<posts, Error>('posts', getPosts);
}
