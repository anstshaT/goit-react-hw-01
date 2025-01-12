import styles from "./FriendListItem.module.css";

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

export default FriendListItem;
