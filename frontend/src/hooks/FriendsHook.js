import { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { addFriend, getFriends, removeFriend } from "../service/FriendsService";

export default function useFriends() {
  const [friends, setFriends] = useState([]);
  const { token, tokenIsValid } = useContext(UserContext);

  useEffect(() => {
    tokenIsValid() &&
      getFriends(token)
        .then((friends) => setFriends(friends))
        .catch(console.log);
  }, [token, tokenIsValid]);

  const addNewFriend = (friendUsername) =>
    addFriend(token, friendUsername)
      .then((newFriend) => setFriends([...friends, newFriend]))
      .catch(console.log);

  const deleteFriend = (friendUsername) =>
    removeFriend(token, friendUsername).then(() =>
      setFriends(friends.filter((friend) => friend.username !== friendUsername))
    );

  return [friends, addNewFriend, deleteFriend];
}
