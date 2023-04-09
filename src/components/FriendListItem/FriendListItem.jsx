import PropTypes from 'prop-types';
import { FriendCard } from './FriendListItem.styled';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  const backgroundColor = isOnline ? 'green' : 'red';
  return (
    <FriendCard>
      <span
        style={{ backgroundColor: backgroundColor }}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;