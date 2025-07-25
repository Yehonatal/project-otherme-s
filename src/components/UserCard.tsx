import { FaGithubAlt, FaUserMinus, FaUserPlus } from "react-icons/fa";
import type { User } from "../types/types";
import { checkIfFollowingUser, followUser, unfollowUser } from "../api/github";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const UserCard = ({ user }: { user: User }) => {
    // Query to check if the user is followed
    const { data: isFollowing, refetch } = useQuery({
        queryKey: ["follow-status", user.login],
        queryFn: () => checkIfFollowingUser(user.login),
        enabled: !!user.login,
    });

    // Mutation to follow and un-follow user
    const followMutation = useMutation({
        mutationFn: () => followUser(user.login),
        onSuccess: () => {
            toast.success(`You are now following ${user.login}`);
            refetch(); // Refetch follow status after following
        },
        onError: (error) => {
            toast.error(`Error following user: ${error.message}`);
        },
    });

    const unfollowMutation = useMutation({
        mutationFn: () => unfollowUser(user.login),
        onSuccess: () => {
            toast.success(`You have unfollowed ${user.login}`);
            refetch(); // Refetch follow status after un-following
        },
        onError: (error) => {
            toast.error(`Error un-following user: ${error.message}`);
        },
    });

    const handleFollow = () => {
        if (isFollowing) {
            unfollowMutation.mutate();
        } else {
            followMutation.mutate();
        }
    };

    return (
        <div>
            <div className="user-card">
                <img
                    className="avatar"
                    src={user.avatar_url}
                    alt={user.login}
                />

                <h2>{user.name || user.login}</h2>
                <p className="bio">{user.bio}</p>

                <div className="user-card-buttons">
                    <button
                        disabled={
                            followMutation.isPending ||
                            unfollowMutation.isPending
                        }
                        onClick={handleFollow}
                        className={`follow-btn ${
                            isFollowing ? "following" : ""
                        }`}
                    >
                        {isFollowing ? (
                            <>
                                <FaUserMinus className="follow-icon" />
                                Following
                            </>
                        ) : (
                            <>
                                <FaUserPlus className="follow-icon" />
                                Follow User
                            </>
                        )}
                    </button>
                    <a
                        className="profile-btn"
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithubAlt className="icon" />
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
