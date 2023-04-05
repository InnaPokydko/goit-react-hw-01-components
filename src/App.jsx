import user from 'data/user';
// import statistics from 'data/statistics';
// import friends from 'data/friends';
// import transactions from 'data/transactions';
import Profile from 'components/Profile/Profile';
import style from './App.module.scss';

export const App = () => {
  return (
    <div className={style.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </div>
  );
};
