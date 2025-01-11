const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p className="isOnline">Online</p>
      ) : (
        <p className="">Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
