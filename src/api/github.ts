export const fetchGithubUser = async (username: string) => {
    const res = await fetch(
        `${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`
    );

    if (!res.ok) {
        throw new Error("User not found");
    }

    const data = await res.json();
    return data;
};

export const searchGithubUser = async (query: string) => {
    const res = await fetch(
        `${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${query}`
    );

    if (!res.ok) {
        throw new Error("User not found");
    }

    const data = await res.json();
    return data.items;
};

// Check if following a user
export const checkIfFollowingUser = async (username: string) => {
    const res = await fetch(
        `${import.meta.env.VITE_GITHUB_API_URL}/user/following/${username}`,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
        }
    );

    if (res.status === 404) {
        return false; // Not following
    } else if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
            "Error checking following status" +
                (errorData?.message ? `: ${errorData.message}` : "")
        );
    }

    return true; // Following
};

// Follow user on Github
export const followUser = async (username: string) => {
    const res = await fetch(
        `${import.meta.env.VITE_GITHUB_API_URL}/user/following/${username}`,
        {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
        }
    );

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
            "Error following user" +
                (errorData?.message ? `: ${errorData.message}` : "")
        );
    }

    return true; // Successfully followed
};

// Unfollow user on Github
export const unfollowUser = async (username: string) => {
    const res = await fetch(
        `${import.meta.env.VITE_GITHUB_API_URL}/user/following/${username}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
        }
    );

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
            "Error unfollowing user" +
                (errorData?.message ? `: ${errorData.message}` : "")
        );
    }

    return true; // Successfully unfollowed
};
