export type FeedPostType = {
    id: number,
    name: string,
    username: string,
    userImage: string,
    img: string,
    text: string,
    timestamp: string,
};

export const FeedPostLists: FeedPostType[] = [
    {
        id: 1,
        name: "Kazuki",
        username: "kazukioshima",
        userImage: "/twitter.svg",
        img: "https://images.unsplash.com/photo-1558929996-da64ba858215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        text: "Dog is cute",
        timestamp: "2 hours ago",
    },
    {
        id: 2,
        name: "Kazuki",
        username: "kazukioshima",
        userImage: "/twitter.svg",
        img: "https://images.unsplash.com/photo-1669840528318-487ea0f70f04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "Merry christmas",
        timestamp: "2 hours ago",
    }
];