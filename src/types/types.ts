export type GitHubUser = {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
};

export type GitHubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    watchers_count: number;
    default_branch: string;
    updated_at: string;
    created_at: string;
    pushed_at: string;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
};

export type User = {
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
    bio: string;
};
