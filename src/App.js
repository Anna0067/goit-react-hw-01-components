import './App.css';
import user from './user.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import styles from './components/Statistics/Statistics.module.css';
import FriendList from './components/Friends/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div className={styles.app}>
        <Statistics title="UPLOAD STATS" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;

const data = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];
