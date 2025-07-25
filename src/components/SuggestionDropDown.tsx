import type { GitHubUser } from "../types/types";

type SuggestionDropDownProps = {
    suggestions: GitHubUser[];
    show: boolean;
    onSelect: (user: string) => void;
};

const SuggestionDropDown = ({
    suggestions,
    show,
    onSelect,
}: SuggestionDropDownProps) => {
    if (!show || suggestions.length === 0) {
        return null;
    }

    return (
        <ul className="suggestions">
            {suggestions.slice(0, 5).map((user: GitHubUser) => {
                return (
                    <li key={user.login} onClick={() => onSelect(user.login)}>
                        <img
                            src={user.avatar_url}
                            className="avatar-xs"
                            alt={user.login}
                        />

                        <span>{user.login}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default SuggestionDropDown;
