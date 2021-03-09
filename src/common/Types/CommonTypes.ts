export type post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type posts = {
    [key: string]: post;
};
