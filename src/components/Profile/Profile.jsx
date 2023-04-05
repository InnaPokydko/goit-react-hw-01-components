import PropTypes from 'prop-types';
import style from "./Profile.css";

const Profile = props => {
    const { username, tag, location, avatar, stats } = props;
    return (
      <div className={style.profile}>
        <div className={style.description}>
          <div className={style['avatar-wrapper']}>
            <img src={avatar} alt="User avatar" className={style.avatar} />
          </div>
          <h2 className={style.name}>{username}</h2>
          <a className={style.tag} href={`/${tag}`}>
            @{tag}
          </a>
          <p className={style.location}>{location}</p>
        </div>
        <ul>
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;