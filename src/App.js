import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

import Profile from './components/Profile/Profil.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';

export default function App() {
  return (
    <div>
      {
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      }

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
}
