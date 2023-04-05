import user from 'data/user';
import data from 'data/data';
// import friends from 'data/friends';
// import transactions from 'data/transactions';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
// import style from './App.module.scss';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
    </div>
  );
};
