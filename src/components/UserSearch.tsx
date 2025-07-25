import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser, searchGithubUser } from "../api/github";
import UserCard from "./UserCard";
import RecentSearches from "./RecentSearches";
import { useDebounce } from "use-debounce";
import SuggestionDropDown from "./SuggestionDropDown";

const UserSearch = () => {
    const [username, setUsername] = useState("");
    const [submittedUsername, setSubmittedUsername] = useState("");
    const [recentUsers, setRecentUsers] = useState<string[]>(() => {
        return JSON.parse(localStorage.getItem("recentUsers") || "[]");
    });

    const [debouncedUsername] = useDebounce(username, 500, { maxWait: 1000 });
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Fetch a specific user when submitted
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["users", submittedUsername],
        queryFn: () => fetchGithubUser(submittedUsername),
        enabled: !!submittedUsername,
    });

    // Search users based on input for suggestion using the debounce as a trigger
    const { data: suggestions } = useQuery({
        queryKey: ["github-user-suggestions", debouncedUsername],
        queryFn: () => searchGithubUser(debouncedUsername),
        enabled: debouncedUsername.length > 1,
    });

    const handleRecentUsers = (user: string) => {
        setRecentUsers((prev) => {
            const updatedUsers = [user, ...prev.filter((u) => u !== user)];
            return updatedUsers.slice(0, 5); // Limit to 5 recent users
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = username.trim();
        if (!trimmed) return;

        handleRecentUsers(trimmed);

        setSubmittedUsername(trimmed);
        setUsername("");
    };

    const onSelect = (user: string) => {
        setSubmittedUsername(user);
        setShowSuggestions(false);
        setUsername("");
    };

    useEffect(() => {
        localStorage.setItem("recentUsers", JSON.stringify(recentUsers));
    }, [recentUsers]);

    return (
        <div className="main">
            <form className="form" onSubmit={handleSubmit}>
                <div className="dropdown-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Github username..."
                        value={username}
                        onChange={(e) => {
                            const val = e.target.value;
                            setUsername(val);
                            setShowSuggestions(val.trim().length > 1);
                        }}
                    />
                    {showSuggestions && suggestions?.length > 0 && (
                        <SuggestionDropDown
                            suggestions={suggestions}
                            show={showSuggestions}
                            onSelect={(selected) => {
                                setShowSuggestions(false);
                                if (submittedUsername !== selected) {
                                    setSubmittedUsername(selected);
                                    setUsername("");
                                    handleRecentUsers(selected);
                                } else {
                                    refetch();
                                }
                            }}
                        />
                    )}
                </div>
                <button type="submit">Search</button>
            </form>

            {isLoading && <p className="status">Loading...</p>}
            {isError && <p className="status error">{error.message}</p>}

            {data && <UserCard user={data} />}

            {recentUsers.length > 0 && (
                <RecentSearches users={recentUsers} onSelect={onSelect} />
            )}
        </div>
    );
};

export default UserSearch;
