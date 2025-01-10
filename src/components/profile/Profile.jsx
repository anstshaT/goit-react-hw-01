import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.profile)}>
      <div className={css.imageDiv}>
        <img src={image} alt="User avatar" className={css.img} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.informationUl}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
