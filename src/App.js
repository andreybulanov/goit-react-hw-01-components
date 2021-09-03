import user from './data/user.json';

import Profile from './components/Profile/Profil.jsx';

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

      {/* <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </div>
  );
}
