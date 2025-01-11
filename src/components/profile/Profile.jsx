import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.profile)}>
      <div className={css.imageDiv}>
        <img src={image} alt="User avatar" className={css.img} />
        <p className={css.profileName}>{name}</p>
        <p className={css.avatarInfo}>@{tag}</p>
        <p className={css.avatarInfo}>{location}</p>
      </div>

      <ul className={css.informationUl}>
        <li className={`${css.infoItems} ${css.leftAngel}`}>
          <span>Followers</span>
          <span className={css.spanNumbers}>{stats.followers}</span>
        </li>
        <li className={`${css.infoItems} ${css.itemBorder}`}>
          <span>Views</span>
          <span className={css.spanNumbers}>{stats.views}</span>
        </li>
        <li className={`${css.infoItems} ${css.rightAngel}`}>
          <span>Likes</span>
          <span className={css.spanNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
