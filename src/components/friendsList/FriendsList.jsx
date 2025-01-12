import styles from "./friendList.module.css";
import FriendListItem from "../friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
