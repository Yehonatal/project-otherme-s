import { useQueryClient } from "@tanstack/react-query";
import { FaClock, FaUser } from "react-icons/fa";
import { fetchGithubUser } from "../api/github";

type RecentProp = {
    users: string[];
    onSelect: (user: string) => void;
};

const RecentSearches = ({ users, onSelect }: RecentProp) => {
    const queryClient = useQueryClient();

    return (
        <div className="recent-searches">
            <div className="recent-header">
                <FaClock />
                <h3>Recent Searches</h3>
            </div>

            <ul>
                {users.map((user: string) => (
                    <li key={user} onClick={() => onSelect(user)}>
                        <button
                            onClick={() => onSelect(user)}
                            className="recent-btn"
                            onMouseEnter={() => {
                                queryClient.prefetchQuery({
                                    queryKey: ["users", user],
                                    queryFn: () => fetchGithubUser(user),
                                });
                            }}
                        >
                            <FaUser className="user-icon" />
                            {user}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSearches;
