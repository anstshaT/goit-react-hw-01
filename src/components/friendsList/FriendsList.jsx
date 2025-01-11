import styles from "./friendList.module.css";

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

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatarImg} />
      <p className={styles.friendName}>{name}</p>
      {isOnline ? (
        <p className={styles.isOnline}>Online</p>
      ) : (
        <p className={styles.isOffline}>Offline</p>
      )}
    </div>
  );
};

export default FriendList;
