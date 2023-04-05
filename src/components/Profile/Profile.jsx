import PropTypes from 'prop-types';
// import style from "./Profile.css";

const Profile = props => {
    const { username, tag, location, avatar, stats } = props;
    return (
      <div>
        <div>
          <div>
            <img src={avatar} alt="User avatar" />
          </div>
          <h2>{username}</h2>
          <a  href={`/${tag}`}>
            @{tag}
          </a>
          <p>{location}</p>
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