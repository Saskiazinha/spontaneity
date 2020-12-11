import { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { addFriend, getFriends, removeFriend } from "../service/FriendsService";
import { getPosts, getTimeMatchingPosts } from "../service/PostService";
import PostContext from "../contexts/PostContext";

export default function useFriends() {
  const [friends, setFriends] = useState([]);
  const { token, tokenIsValid } = useContext(UserContext);
  const { setPostsWithoutSeconds } = useContext(PostContext);

  useEffect(() => {
    tokenIsValid() &&
      getFriends(token)
        .then((friends) => setFriends(friends))
        .catch(console.log);
  }, [token, tokenIsValid]);

  useEffect(() => {
    tokenIsValid() &&
      getPosts(token)
        .then((posts) => setPostsWithoutSeconds(posts, "posts"))
        .catch(console.log);
  }, [token, tokenIsValid, friends]);

  useEffect(() => {
    tokenIsValid() &&
      getTimeMatchingPosts(token)
        .then((matchingPosts) =>
          setPostsWithoutSeconds(matchingPosts, "matchingPosts")
        )
        .catch(console.log);
  }, [token, tokenIsValid, friends]);

  const addNewFriend = (friendUsername) =>
    addFriend(token, friendUsername).then((newFriend) =>
      setFriends([...friends, newFriend])
    );
  const deleteFriend = (friendUsername) =>
    removeFriend(token, friendUsername)
      .then(() =>
        setFriends(
          friends.filter((friend) => friend.username !== friendUsername)
        )
      )
      .catch(console.log);

  return [friends, addNewFriend, deleteFriend];
}
