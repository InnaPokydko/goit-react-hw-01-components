import PropTypes from 'prop-types';
import { Card, ImgAvatar, Stats} from './Profile.styled';

const Profile = props => {
    const { username, tag, location, avatar, stats } = props;
    return (
      <Card>
        <div>
          <div>
            <ImgAvatar src={avatar} alt="User avatar" />
          </div>
          <h2>{username}</h2>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <Stats>
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
        </Stats>
      </Card>
    );
  };

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;